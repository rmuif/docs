---
id: firebase
title: Firebase
sidebar_label: Firebase
description: Firebase
keywords:
  - rmuif
  - docs
  - firebase
---

import useBaseUrl from '@docusaurus/useBaseUrl';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Firebase is an integral part of RMUIF, with most of their products used in one place or another. The most used products are Authentication and Cloud Firestore, and the best thing is that it’s free.

The biggest learning curve with Firebase and its database layer is Security Rules. But you don’t have to worry about them just yet, we’ve got you covered with the basics.

<img alt="Illustration" src={useBaseUrl('img/illustrations/firebase.svg')} />

## Create a Firebase project

A Firebase project is the top-level entity for Firebase. In your project, you can add apps for iOS, Android, and Web. After you configure your apps to use Firebase, you can then add the Firebase SDKs for any number of Firebase products, like Analytics, Cloud Firestore, Performance Monitoring, and Remote Config.

1. In the [Firebase Console](https://console.firebase.google.com), click ”Add project“, then select or enter a ”Project name“. If you have an existing Google Cloud Platform (GCP) project, you can select the project from the dropdown menu to add Firebase resources to that project.
2. If you are creating a new project, you can edit the ”Project ID“.
3. Click ”Continue“.
4. Set up Google Analytics for your project.
5. Click ”Create project“ (or ”Add Firebase“, if you’re using an existing GCP project).

:::note
Firebase automatically provisions resources for your Firebase project. When the process completes, you’ll be taken to the overview page for your Firebase project in the Firebase console.
:::

## Register your app

After you have created a Firebase project, you can add a web app to it. You need to have at least one web app to get access to the Firebase config object.

1. In the center of the [Firebase console’s project overview page](https://console.firebase.google.com), click the ”Web“ icon to launch the setup workflow.
   If you’ve already added an app to your Firebase project, click ”Add app“ to display the platform options.
2. Enter your app’s nickname. This nickname is an internal, convenience identifier and is only visible to you in the Firebase console.
3. Click ”Register app“.

## The config object

To initialize Firebase in your app, you need to provide your app’s Firebase project configuration, it looks like:

```js
{
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id"
}
```

:::info
If you enable new Firebase services in your Firebase project after creating your Firebase Web App (especially Cloud Storage or Google Analytics), make sure to update your Firebase config object in your app.
:::

When you’ve retrieved your Firebase config object you need to replace the default one with your own. If the credentials above was your Firebase config object, the `firebase` object in `config` of `packge.json` would look like:

<Tabs
defaultValue="package.json"
values={[
{ label: 'package.json', value: 'package.json' }
]
}>
<TabItem value="package.json">

```json {12-19}
{
  ...

  "config": {
    "title": "RMUIF",
    "theme": {
      "primaryColor": "blue",
      "secondaryColor": "red",
      "dark": false
    },
    "firebase": {
      "apiKey": "api-key",
      "authDomain": "project-id.firebaseapp.com",
      "databaseUrl": "https://project-id.firebaseio.com",
      "projectId": "project-id",
      "storageBucket": "project-id.appspot.com",
      "messagingSenderId": "sender-id",
      "appId": "app-id",
      "measurementId": "G-measurement-id"
    },
    "sentry": {
      "dsn": "https://78536326e6524916b6f44b4ea510b7a4@sentry.io/1846624"
    }
  }

  ...
}
```

</TabItem>
</Tabs>

## Enable Email/Password sign-in

You should enable the ”Email/Password“ sign-in method to make it eaiser for you to test the app and accomodate users that don’t want to use an identity provider. You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including e-mail address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login.

1. In the Firebase console, open the ”Auth“ section.
2. On the ”Sign in method“ tab, enable the ”Email/password“ sign-in method and click ”Save“.

## Create a Cloud Firestore database

Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform. Like Firebase Real-time Database, it keeps your data in sync across client apps through real-time listeners and offers offline support for mobile and web so you can build responsive apps that work regardless of network latency or internet connectivity. Cloud Firestore also offers seamless integration with other Firebase and Google Cloud Platform products, including Cloud Functions.

1. From the console's navigation pane, select ”Database“, then click ”Create database“ for Cloud Firestore.
2. Select a starting mode for your Cloud Firestore Security Rules. It doesn’t matter which mode you select as you will be replacing the default security rules.
3. Select a [location](https://firebase.google.com/docs/firestore/locations#types) for your database.
4. Click ”Done“.

:::note
When you enable Cloud Firestore, it also enables the API in the Cloud API Manager.
:::

### Secure your data

Modify your security rules in ”Rules“ on the console:

```
service cloud.firestore {
  function isUserAuthenticated() {
    return request.auth != null;
  }

  function isUserOwner(userId) {
    return request.auth.uid == userId;
  }

  function hasUserRole(role) {
    return role in request.auth.token.roles;
  }

  function isUserAdmin() {
    return hasUserRole('admin');
  }

  function isUserPremium() {
    return hasUserRole('premium');
  }

  function isUserAuthorized(userId) {
    return isUserOwner(userId) || isUserAdmin();
  }

  match /databases/{database}/documents {
    match /users/{userId} {
      allow get: if isUserAuthenticated();
      allow list: if isUserAuthenticated() && isUserAdmin();
    }

    match /users/{userId} {
      allow create: if isUserAuthenticated() && isUserAuthorized(userId);
      allow update: if isUserAuthenticated() && isUserAuthorized(userId);
      allow delete: if isUserAuthenticated() && isUserAuthorized(userId);
    }
  }
}
```

## Create a default Storage bucket

Cloud Storage for Firebase lets you upload and share user generated content, such as images and videos, which allows you to build rich media content into your apps. Your data is stored in a Google Cloud Storage bucket, an exabyte scale object storage solution with high availability and global redundancy. Cloud Storage lets you securely upload these files directly from mobile devices and web browsers, handling spotty networks with ease.

1. From the navigation pane of the Firebase console, select ”Storage“, then click ”Get started“.
2. Review the messaging about securing your Storage data using security rules.
3. Select a [location](https://firebase.google.com/docs/projects/locations#types) for your default Storage bucket.
4. Click ”Done“.

### Secure your data

Modify your security rules in ”Rules“ on the console:

```
service firebase.storage {
  function isUserAuthenticated() {
    return request.auth != null;
  }

  function isUserOwner(userId) {
    return request.auth.uid == userId;
  }

  function hasUserRole(role) {
    return role in request.auth.token.roles;
  }

  function isUserAdmin() {
    return hasUserRole('admin');
  }

  function isUserPremium() {
    return hasUserRole('premium');
  }

  function isUserAuthorized(userId) {
    return isUserOwner(userId) || isUserAdmin();
  }

  function isAvatarValid() {
  	return (
    	request.resource.contentType.matches('image/.*') &&
      request.resource.size <= 20 * 1024 * 1024 &&
      (resource == null || request.resource.md5Hash != resource.md5Hash)
    );
  }

  match /b/{bucket}/o {
    match /images {
    	match /avatars/{userId} {
        allow get: if isUserAuthenticated();
        allow list: if isUserAuthenticated() && isUserAdmin();
      }

      match /avatars/{userId} {
        allow create: if isUserAuthenticated() && isUserAuthorized(userId) && isAvatarValid();
        allow update: if isUserAuthenticated() && isUserAuthorized(userId) && isAvatarValid();
        allow delete: if isUserAuthenticated() && isUserAuthorized(userId);
      }
    }
  }
}
```

:::info
Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0).
:::

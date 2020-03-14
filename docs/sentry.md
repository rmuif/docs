---
id: sentry
title: Sentry
sidebar_label: Sentry
description: Sentry
keywords:
  - rmuif
  - docs
  - sentry
image: img/illustrations/sentry.png
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{ textAlign: "center" }}>
  <img style={{ width: "75%", marginBottom: "32px" }} alt="Illustration" src={useBaseUrl('img/illustrations/sentry.svg')} />
  <h1>Sentry</h1>
  <p>
    Sentry is of great help when you put your app into the hands of your users
  </p>
</div>

## Configure the SDK

After you’ve completed setting up a project in Sentry, you’ll get a Data Source Name (DSN). It’s a representation of the configuration required by Sentry SDKs. It consists of a few pieces, including the protocol, public key, server address, and project identifier.

You can set the DSN for your project in the `config` object of `package.json`, replace `https://<key>@sentry.io/<project>` with your DSN:

<Tabs
defaultValue="package.json"
values={[
{ label: 'package.json', value: 'package.json' }
]
}>
<TabItem value="package.json">

```json {22}
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
      "dsn": "https://<key>@sentry.io/<project>"
    }
  }

  ...
}
```

</TabItem>
</Tabs>

## Capture your first event

Once you have integrated Sentry into your project, you’ll want to make sure everything is working as expected before deploying it. What better way to do that than to break your app?

One way to break your app is to call an undefined function from anywhere in your app:

```js
myUndefinedFunction();
```

:::tip

You can verify the function caused an error by checking your browser console.

:::

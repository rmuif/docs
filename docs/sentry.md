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
    Sentry is of great help when you put your app into the hands of your users.
  </p>
</div>

## Configure the SDK

After you’ve completed setting up a project in Sentry, you’ll get a Data Source Name (DSN). It’s a representation of the configuration required by Sentry SDKs. It consists of a few pieces, including the protocol, public key, server address, and project identifier.

You can set the DSN for your project in the `.env` file, replace `https://<key>@sentry.io/<project>` with your DSN:

<Tabs
defaultValue=".env"
values={[
{ label: '.env', value: '.env' }
]
}>
<TabItem value=".env">

```env {12}
...

REACT_APP_FIREBASE_API_KEY=api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=project-id.firebaseapp.com
REACT_APP_FIREBASE_DATABASE_URL=https://project-id.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=project-id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=sender-id
REACT_APP_FIREBASE_APP_ID=app-id
REACT_APP_FIREBASE_MEASUREMENT_ID=G-measurement-id

REACT_APP_SENTRY_DSN=https://<key>@sentry.io/<project>
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

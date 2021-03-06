---
id: roadmap
title: Roadmap
sidebar_label: Roadmap
description: Roadmap
keywords:
  - rmuif
  - docs
  - roadmap
image: img/illustrations/roadmap.png
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<div style={{ textAlign: "center" }}>
  <img style={{ width: "75%", marginBottom: "32px" }} alt="Illustration" src={useBaseUrl('img/illustrations/roadmap.svg')} />
  <h1>Roadmap</h1>
  <p>
    There are more features coming to RMUIF, some are documented here, more might be added.
  </p>
</div>

## Version 3.x

### [CRUD example](https://github.com/rmuif/web/issues/420)

Provide an example featuring CRUD operations, e.g., an article page.

### [Improve accessibility](https://github.com/rmuif/web/issues/429)

https://reactjs.org/docs/accessibility.html

### [Advanced tests](https://github.com/rmuif/web/issues/165)

https://reactjs.org/docs/testing.html

### [Optional theme synchronization](https://github.com/rmuif/web/issues/295)

Provide an option to disable theme synchronization.

### [Support for `prefers-color-scheme`](https://github.com/rmuif/web/issues/61)

https://material-ui.com/customization/palette/#user-preference

### [Phone number sign-in](https://github.com/rmuif/web/issues/220)

https://firebase.google.com/docs/auth/web/phone-auth

### [”Sign in again“ dialogs](https://github.com/rmuif/web/issues/209)

Show a ”Sign in again“ dialog instead of telling the user to sign out and sign in again.

### [Offline persistence with Cloud Firestore](https://github.com/rmuif/web/issues/183)

https://firebase.google.com/docs/firestore/manage-data/enable-offline

### [Maintenance mode](https://github.com/rmuif/web/issues/95)

Add a setting to put the whole app into maintenance mode.

### User relations

Add user-to-user interactions such as ”Add friend“ and ”Block user“.

### Administrative actions

Add administrative actions in the app for users with the `admin` role, e.g., on a user’s page, the options ”Ban“ and ”Remove“ are available.

## Version 4.x

### [Notifications](https://github.com/rmuif/web/issues/254)

Show notifications using both the browser’s built-in notification API and a section in the app. An example notification can be when a user sends a friend request.

### Conversion to Hooks

Convert the whole app to use React Hooks instead of regular components.

### [Internationalization](https://github.com/rmuif/web/issues/300)

https://github.com/i18next/react-i18next

https://react.i18next.com

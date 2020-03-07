---
id: authentication
title: Authentication
sidebar_label: Authentication
description: Authentication
keywords:
  - rmuif
  - docs
  - authentication
---

import useBaseUrl from '@docusaurus/useBaseUrl';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

RMUIF uses Firebase Authentication in conjunction with Cloud Firestore to create, sign in, and manage users. Authentication is the most integral part of the app and can be seen as the foundation. Cloud Firestore is used to store user data, both public and private, like a user’s first name and the last time they changed their password.

<img alt="Illustration" src={useBaseUrl('img/illustrations/authentication.svg')} />

## Users and their data

A user is made up of three sources of data: the Firebase Authentication user account and the public and private user data in Cloud Firestore. When a user creates an account, they use the following structure in Cloud Firestore:

- `users`
  - `userId`
    - `firstName`
    - `lastName`
    - `username`
    - `theme`
      - `primaryColor`
      - `secondaryColor`
      - `dark`
- `privateUsers`
  - `userId`
    - `lastPasswordChange`

The `userId` key is always the same as the `uid` property of a Firebase user account. In fact, `uid` is short for user ID, but we have chosen to name the key `userId` for a more welcoming terminology. For example, the representation of a user in Cloud Firestore could look like:

- `users`
  - `WZwxotRnOrWdnqCx8Vf9tfbqnTr2`
    - `firstName: John`
    - `lastName: Doe`
    - `username: john`
    - `theme`
      - `primaryColor: purple`
      - `secondaryColor: pink`
      - `dark: false`
- `privateUsers`
  - `WZwxotRnOrWdnqCx8Vf9tfbqnTr2`
    - `lastPasswordChange: 29 February 2020 at 12:53:44 UTC+1`

## Providers

RMUIF supports multiple authentication providers in addition to password-based sign-in, we try to stay updated with the same providers that Firebase Authentication supports. These are the ones we provide support for today:

- Apple
- Facebook
- GitHub
- Google
- Microsoft
- Twitter
- Yahoo

You can easily add more authentication providers, the support we provide for existing ones are essentially the definitions and some testing for quality assurance. In theory, the only thing you need to change is the `authProviders.js` file in the `/src` directory. From there, you can add or remove existing providers. The authentication service only needs a `providerId` to initiate a sign-in.

:::note
Users can tie multiple authentication providers to their account by linking them in the ”Links“ tab in ”Settings“.
:::

## Protecting content

If you have access to the `user` object, you can check if the user is signed in or not. For example, in `HomeContent`, where we determine what to display based on whether or not the user is signed in:

```jsx
const { user } = this.props;

if (user) {
  return <EmptyState icon={<HomeIcon />} title="Home" />;
}

return (
  <EmptyState
    title={process.env.REACT_APP_TITLE}
    description={process.env.REACT_APP_DESCRIPTION}
  />
);
```

## Protecting routes

You might want to require the user to be authenticated to be able to access certain routes, e.g. a settings page. You can take a look at the existing definitions in `Router`, where the `user` object is required:

```jsx
<Route path="/user/:userId">
  {user ? <UserContent /> : <Redirect to="/" />}
</Route>
```

:::info
The value of the `user` object indicates whether or not a user is signed in. If the user is signed in, it will be populated, otherwise it will be `null`.
:::

## Managing users

You can use the [Firebase Console](https://console.firebase.google.com) for basic user management but it can be hard to use when performing operations such as deleting all of your users. RMUIF has its own tools for managing individual users and users at scale, you can find these in the `/tools` directory of your project.

The `user` program is for managing users individually, e.g. if you want to create, update, and delete a user. The `users` program is for performing operations on all users, e.g. listing or deleting all users.

### Creating a user

You don’t need to start the app if you want to create a new user. There are some cases where you would want to create a test or system user, and from the `user` tool you can do that. You can even set more properties than you can do from the Firebase Console. The following command will start a wizard where you can create your user:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn user create
```

</TabItem>
<TabItem value="npm">

```sh
npm run user create
```

</TabItem>
</Tabs>

Here’s an example of what it looks like:

```sh
? uid: john
? email: john@doe.com
? emailVerified: Yes
? password: john123
? displayName: john
? photoURL:
? disabled: No
┌───────────────┬──────────────┐
│ uid           │ john         │
├───────────────┼──────────────┤
│ email         │ john@doe.com │
├───────────────┼──────────────┤
│ emailVerified │ true         │
├───────────────┼──────────────┤
│ password      │ john123      │
├───────────────┼──────────────┤
│ displayName   │ john         │
├───────────────┼──────────────┤
│ photoURL      │              │
├───────────────┼──────────────┤
│ disabled      │ false        │
└───────────────┴──────────────┘
? create: Yes
```

:::note
If you don’t provide a `uid`, Firebase will generate a random one for you. A custom `uid` is useful if you want to create a system or test user. That way, you always know the ID of the user and don’t need to perform any querying whenever you need that specific user.
:::

### Getting a user’s data

You can use the `user` tool to quickly get information from a user, e.g. their e-mail address or display name. Again, it’s very simple to use:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn user get <uid>
```

</TabItem>
<TabItem value="npm">

```sh
npm run user get <uid>
```

</TabItem>
</Tabs>

That’s nice, if you know the ID of a user. But what if you don’t? You can use the `--email` or `-e` option to use an e-mail address instead of a user ID:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn user -e get <email>
```

</TabItem>
<TabItem value="npm">

```sh
npm run user -e get <email>
```

</TabItem>
</Tabs>

:::tip
The `-e` option is available for all commands with the `uid` argument in the `user` tool, i.e. you can use it when getting, updating, and deleting a user.
:::

An example of getting information from a user with the user ID `john`:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn user get john
```

</TabItem>
<TabItem value="npm">

```sh
npm run user get john
```

</TabItem>
</Tabs>

The response might look like this:

```sh
┌───────────────┬──────────────┐
│ uid           │ john         │
├───────────────┼──────────────┤
│ email         │ john@doe.com │
├───────────────┼──────────────┤
│ emailVerified │ true         │
├───────────────┼──────────────┤
│ displayName   │ john         │
├───────────────┼──────────────┤
│ photoURL      │              │
├───────────────┼──────────────┤
│ disabled      │ false        │
└───────────────┴──────────────┘
```

### Getting all users’ data

You can get the data of all users with one command using the `users` tool, the syntax is:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn users list
```

</TabItem>
<TabItem value="npm">

```sh
npm run users list
```

</TabItem>
</Tabs>

The tool will paginate the users if there are many, a table represents a page. An example output for this command looks like:

```sh
┌──────┬──────────────┬───────────────┬─────────────┬──────────┬──────────┐
│ uid  │ email        │ emailVerified │ displayName │ photoURL │ disabled │
├──────┼──────────────┼───────────────┼─────────────┼──────────┼──────────┤
│ john │ john@doe.com │ true          │ john        │          │ false    │
└──────┴──────────────┴───────────────┴─────────────┴──────────┴──────────┘
```

:::info
The output will be very big if you have a lot of users. To ensure proper formatting, you should maximize the window of the shell you’re using.
:::

### Updating a user

You can also use the tool to update an existing user, this command will start a wizard where you choose which values you want to change:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn user update <uid>
```

</TabItem>
<TabItem value="npm">

```sh
npm run user update <uid>
```

</TabItem>
</Tabs>

Another example using the user `john`:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn user update john
```

</TabItem>
<TabItem value="npm">

```sh
npm run user update john
```

</TabItem>
</Tabs>

The wizard comes with the current values as default. If you don’t want to change the selected value, you can just continue. But let’s say we wanted to change the display name from `john` to `doe`, that would look like:

```sh
? email: john@doe.com
? emailVerified: Yes
? displayName: doe
? photoURL:
? disabled: No
┌───────────────┬───────────────┬──────────────┐
│ Key           │ Current Value │ New Value    │
├───────────────┼───────────────┼──────────────┤
│ email         │ john@doe.com  │ john@doe.com │
├───────────────┼───────────────┼──────────────┤
│ emailVerified │ true          │ true         │
├───────────────┼───────────────┼──────────────┤
│ displayName   │ john          │ doe          │
├───────────────┼───────────────┼──────────────┤
│ photoURL      │               │              │
├───────────────┼───────────────┼──────────────┤
│ disabled      │ false         │ false        │
└───────────────┴───────────────┴──────────────┘
? update: Yes
```

### Banning a user

If you’re ever in need of preventing someone from accessing your app, you can disable or ”ban“ their account. This will block them from signing in. The command, is as usual, really simple:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn user ban <uid>
```

</TabItem>
<TabItem value="npm">

```sh
npm run user ban <uid>
```

</TabItem>
</Tabs>

Banning the user `john` would look like:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn user ban john
```

</TabItem>
<TabItem value="npm">

```sh
npm run user ban john
```

</TabItem>
</Tabs>

### Unbanning a user

If you want to enable a user again, you can lift their ban. This will allow them to sign in again. Use this clean command:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn user unban <uid>
```

</TabItem>
<TabItem value="npm">

```sh
npm run user unban <uid>
```

</TabItem>
</Tabs>

If we wanted `john` back on, we could pardon him like:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn user unban john
```

</TabItem>
<TabItem value="npm">

```sh
npm run user unban john
```

</TabItem>
</Tabs>

### Deleting a user

Deleting a user is a dangerous action as it implies serious consequences for the affected user. Think twice before using this command. You can use this command like:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn user delete <uid>
```

</TabItem>
<TabItem value="npm">

```sh
npm run user delete <uid>
```

</TabItem>
</Tabs>

Deleting `john` would be dangerous but would also look like:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn user delete john
```

</TabItem>
<TabItem value="npm">

```sh
npm run user delete john
```

</TabItem>
</Tabs>

:::warning
Deleting a user will also delete any data associated to them, e.g. their documents in Cloud Firestore and avatar in Cloud Storage.
:::

### Deleting all users

This is a very dangerous command to execute, it will delete all users and their data in your app. You might have to use this command multiple times as Firebase limits the number of deletions that can be performed. The tool will tell you if the limit has been exceeded. We are working to improve this tool further, but until now that seems to be the only viable solution. You have to use the `users` tool when executing this command:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn users delete
```

</TabItem>
<TabItem value="npm">

```sh
npm run users delete
```

</TabItem>
</Tabs>

You will be prompted with a confirmation before the deletion process starts:

```sh
? Delete all users? (y/N)
```

:::warning
This command is very dangerous, it will delete all users and their data in your app. Think twice before using it!
:::

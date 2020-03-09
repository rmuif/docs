---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
description: Getting Started
keywords:
  - rmuif
  - docs
  - getting started
image: img/illustrations/getting-started.png
---

import useBaseUrl from '@docusaurus/useBaseUrl';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<img alt="Illustration" src={useBaseUrl('img/illustrations/getting-started.svg')} />

## Creating an app

There is an RMUIF template for Create React App, you can use it with the `--template` option when creating an app:

```sh
npx create-react-app <project-directory> --template rmuif
```

:::note
Replace `<project-directory>` with your app’s name, e.g. `rmuif` or `my-app`.
:::

## Starting the app

Before you can start the app, you need to be inside your project’s directory. This command will change the current working directory to your project’s directory:

```sh
cd <project-directory>
```

:::note
Replace `<project-directory>` with the same name you used when creating the app.
:::

Make sure everything works as expected before continuing with the configuration, this command will start the app on http://localhost:3000 (a different port is used if 3000 is already in use) in your default web browser:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn start
```

</TabItem>
<TabItem value="npm">

```sh
npm start
```

</TabItem>
</Tabs>

:::tip
You can override your default web browser by using the `BROWSER` environmment variable, e.g. `export BROWSER=safari` if you want to use Safari. Depending on your setup, it might be ideal to create a `.env.local` file where you define environment variables unique to your local environment.
:::

Check the developer console for any errors and warnings, if it’s empty and everything’s working you can go ahead to the configuration page. However, if something’s not working out for you, you could try following these steps:

1. Use Google to search for any errors or warnings, it might be very obvious.
2. Look for similar issues on the repository’s page on GitHub.
3. Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/rmuif) or have a chat with us on [Discord](https://discord.gg/5Ann5C3), we’re always happy to help!
4. Create an issue on GitHub using the ”Bug Report“ template.

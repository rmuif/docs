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
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{ textAlign: "center" }}>
  <img style={{ width: "75%", marginBottom: "32px" }} alt="Illustration" src={useBaseUrl('img/illustrations/getting-started.svg')} />
  <h1>Getting Started</h1>
  <p>
    It’s easy to create an app, especially if you’re already familiar with Create React App.
  </p>
</div>

## Quickstart

If you’ve used RMUIF before or just want to get started quickly, run these commands:

```sh
npx create-react-app my-app --template rmuif
cd my-app
yarn start
```

They use sensible defaults and are a great fit for both new and existing users.

## Creating an app

With Create React App, you can now start a new app from the RMUIF template by appending `--template rmuif` to the creation command:

```sh
npx create-react-app my-app --template rmuif
```

:::info

When you create a new app, the CLI will use `yarn` to install dependencies (when available). If you have `yarn` installed, but would prefer to use `npm`, you can append `--use-npm` to the creation command:

```sh
npx create-react-app my-app --template rmuif --use-npm
```

:::

## Starting the app

Before you can start the app, you need to be inside your project’s directory. This command will change the current working directory to your project’s directory:

```sh
cd my-app
```

This command will start the app on http://localhost:3000 in your default web browser:

<Tabs defaultValue="yarn" values={[{ label: "yarn", value: "yarn" },{ label: "npm", value: "npm" }]}>
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

You can override your default web browser by using the `BROWSER` environmment variable, e.g. `BROWSER=safari` if you want to use Safari. Depending on your setup, it might be ideal to create a `.env.local` file where you define environment variables unique to your local environment.

:::

Check the developer console of your browser for any errors and warnings, if it’s empty and everything’s working you can go ahead to the next page. However, if something’s not working, you could try following these steps:

1. Use Google to search for any errors or warnings.
2. Look for similar issues on the repository’s page on GitHub.
3. Have a chat with us on [Discord](https://discord.gg/5Ann5C3) or ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/rmuif), we’re always happy to help!
4. Create an issue on GitHub using the [Report a bug](https://github.com/rmuif/web/issues/new?template=bug_report.md) template.

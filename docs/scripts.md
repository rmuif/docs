---
id: scripts
title: Scripts
sidebar_label: Scripts
description: Scripts
keywords:
  - rmuif
  - docs
  - scripts
---

import useBaseUrl from '@docusaurus/useBaseUrl';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

There are some scripts at your disposal for managing your app. The scripts help you with developing, testing, building, and analyzing your app.

<img alt="Illustration" src={useBaseUrl('img/illustrations/scripts.svg')} />

## Running scripts

You can use `yarn` or `npm` to run these scripts. We recommend using `yarn` because that is the standard throughout this project. When running a script, make sure you’re inside your project’s root directory. Prefix the script you want to run with either `yarn` or `npm` like:

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

## Available scripts

You can also take a look at the `scripts` object in the `package.json` file in your project’s root directory.

### `start`

This script will run the app in the development mode. It will automatically open http://localhost:3000 (another port will be used if 3000 is already in use) in your default web browser. The page will reload if you make any changes to files of importance and you will find errors in the developer console.

You have to restart the development server if you make any changes to the configuration in `package.json` as members of the `config` object are forwarded to the app through the `.env` file and they’re only initialized on startup. The rule of thumb is that if you don’t see your expected change, restart the development server.

You can override the default web browser with the environment variable `BROWSER`. If you always want to override it, consider creating a `.env.local` file in the root directory where you initialize the variable, e.g. for Safari:

<Tabs
defaultValue=".env.local"
values={[
{ label: '.env.local', value: '.env.local' }
]
}>
<TabItem value=".env.local">

```sh
BROWSER=safari
```

</TabItem>
</Tabs>

:::info
The name of a web browser depends on the platform, e.g. Google Chrome is `chrome` on Windows, `google chrome` on macOS, and `chrome` on Linux. If you need to pass any arguments to the web browser, you can use the `BROWSER_ARGS` environment variable. You can read more about the available environment variables over at Create React App’s ”[Advanced Configuration](https://create-react-app.dev/docs/advanced-configuration)“.
:::

### `test`

This script will launch the test runner in the interactive watch mode. Every time you save a file, it will re-run the tests, like how `yarn start` recompiles the code.

### `build`

This script will build the app for production. It will create a new directory, `build`, where the minified and deployable version of your app is placed.

### `analyze`

This script will analyze your `build` directory, it determines which file each byte in your minified code came from and shows you a visualization to facilitate debugging.

:::info
You need to build the app before using this script, i.e. run `yarn build` before running `yarn analyze`.
:::

### `eject`

This script will expose all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project as dependencies. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. This command is really a last resort.

:::warning
This is a one-way operation, once you run `eject`, you can’t go back. All of the commands except `eject` will still work, but they will instead point to the copied scripts so you can tweak them. At this point, you’re on your own, as far as tooling goes.
:::

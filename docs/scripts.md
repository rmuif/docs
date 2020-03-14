---
id: scripts
title: Scripts
sidebar_label: Scripts
description: Scripts
keywords:
  - rmuif
  - docs
  - scripts
image: img/illustrations/scripts.png
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{ textAlign: "center" }}>
  <img style={{ width: "75%", marginBottom: "32px" }} alt="Illustration" src={useBaseUrl('img/illustrations/scripts.svg')} />
  <h1>Scripts</h1>
  <p>
    These scripts help you with developing, testing, building, and analyzing your app.
  </p>
</div>

## `start`

This script will run the app in the development mode. It will automatically open http://localhost:3000 in your default web browser. The page will reload if you make any changes to files of importance and you will find errors in the developer console.

You have to restart the development server if you make any changes to the configuration in `package.json` as members of the `config` object are forwarded to the app through the `.env` file and they’re only initialized on start. The rule of thumb is that if you don’t see the change, restart the development server.

You can override the default web browser with the environment variable `BROWSER`. If you always want to override it, consider creating a `.env.local` file in the root directory where you initialize the variable, e.g., for Safari:

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

The name of a web browser depends on the platform, e.g., Google Chrome is `chrome` on Windows, `google chrome` on macOS, and `google-chrome` on Linux. If you need to pass any arguments to the web browser, you can use the `BROWSER_ARGS` environment variable.

:::

## `test`

This script will launch the test runner in the interactive watch mode. Every time you save a file, it will rerun the tests, like how `yarn start` recompiles the code.

## `build`

This script will build the app for production. It will create a new directory, `build`, where the minified and deployable version of your app is placed.

## `analyze`

This script will analyze your `build` directory, it determines which file each byte in your minified code came from and shows you a visualization to facilitate debugging.

:::caution

You need to build the app before using this script, i.e., run `build` before running `analyze`.

:::

## `eject`

This script will expose all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project as dependencies. The curated feature set in RMUIF is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. This command is really a last resort.

:::warning

This is a one-way operation, once you run `eject`, you can’t go back. All of the commands except `eject` will still work, but they will instead point to the copied scripts so you can tweak them. At this point, you’re on your own, as far as tooling goes.

:::

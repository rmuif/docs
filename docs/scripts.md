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

This script runs the app in the development mode. It opens http://localhost:3000 in your default web browser. The page reloads if you make any changes to files of importance, and you find errors in the developer console.

You have to restart the development server if you make any changes to the configuration in `.env` as it initializes on start. The rule of thumb is that if you don’t see the change, restart the development server.

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

This script launches the test runner in the interactive watch mode. Every time you save a file, it reruns the tests, like how `yarn start` recompiles the code.

## `build`

This script builds the app for production. It creates a new directory, `build`, where it places the minified and deployable version of your app.

## `analyze`

This script analyzes your `build` directory. It determines which file each byte in your minified code came from and shows you a visualization to facilitate debugging.

:::caution

You need to build the app before using this script, i.e., run `build` before running `analyze`.

:::

## `eject`

This script exposes all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) into your project as dependencies. The curated feature set in RMUIF is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. This script is the last resort.

:::warning

This script is a one-way operation. Once you run `eject`, you can’t go back. All of the scripts except `eject` still work, but they point to the copied scripts so you can tweak them. At this point, you’re on your own, as far as tooling goes.

:::

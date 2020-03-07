---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
description: Getting Started
keywords:
  - rmuif
  - docs
  - getting started
---

import useBaseUrl from '@docusaurus/useBaseUrl';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can get the base template up and running after just a few commands. After that you can start configuring it your liking and let development flow from there.

<img alt="Illustration" src={useBaseUrl('img/illustrations/getting-started.svg')} />

## Cloning the template

You can use `git` to clone the official RMUIF repository. Replace `<directory>` with your project’s name, e.g. `rmuif` or `my-cool-app`. This command will download all the required files into a directory with your project’s name:

<Tabs
defaultValue="git"
values={[
{ label: 'git', value: 'git' },
{ label: 'degit', value: 'degit' }
]
}>
<TabItem value="git">

```sh
git clone https://github.com/phoqe/rmuif.git <directory>
```

</TabItem>
<TabItem value="degit">

```sh
npx degit phoqe/rmuif <directory>
```

</TabItem>
</Tabs>

## Installing the dependencies

Before you can install the dependencies, you need to be inside your project’s directory. Replace `<directory>` with the same name you used with `git` when cloning the repository. This command will change the current working directory to your project’s directory:

```sh
cd <directory>
```

You can use `yarn` to install the dependencies. RMUIF prefers `yarn` over `npm`, you’re free to use `npm` if you want to, just make sure to stay consistent with whatver you choose. This command will install all the required dependencies:

<Tabs
defaultValue="yarn"
values={[
{ label: 'yarn', value: 'yarn' },
{ label: 'npm', value: 'npm' }
]
}>
<TabItem value="yarn">

```sh
yarn install
```

</TabItem>
<TabItem value="npm">

```sh
npm install
```

</TabItem>
</Tabs>

:::info
Once all dependencies have been installed, a lock-file is created. For `yarn` it’s `yarn.lock` and for `npm` it’s `package-lock.json`. This file describes the `node_modules` tree that was generated, such that subsequent installs are able to generate identical trees. You should commit this file.
:::

## Starting the app

That’s all you need to do for the actual template. You should make sure everything works as expected before continuing with the configuration. This command will start the app on http://localhost:3000 (a different port is used if 3000 is already in use) in your default web browser:

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
3. Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/rmuif) or reach out to us on [Spectrum](https://spectrum.chat/rmuif) or have a chat with us on [Discord](https://discord.gg/PdRYuHW), we’re always happy to help!
4. Create an issue on GitHub using the ”Bug Report“ template.

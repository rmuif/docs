---
id: updates
title: Updates
sidebar_label: Updates
description: Updates
keywords:
  - rmuif
  - docs
  - updates
---

import useBaseUrl from '@docusaurus/useBaseUrl';

RMUIF is constantly evolving with general improvements and bug fixes included in every release. It doesn’t follow a strict versioning scheme like regular frameworks do with Semantic Versioning. RMUIF is more than just a framework, it’s a template and a starting point for your app. The versioning system we use is similar to Romantic Versioning.

<img alt="Illustration" src={useBaseUrl('img/illustrations/updates.svg')} />

## Backwards compatibility

The concept of backwards compatibility differs from regular Node.js modules. With our update process, you get to decide what updates you want and can observe and deal with breaking changes as they will result in a merge conflict. Any change that interfere with your code will result in a merge conflict. It is very important for you, as a developer, to read through the release notes of every release you’re bringing in to your project. We will document changes to the structure of the app and the data available to your app.

## Release notes

With every release, we will do a summary of the changes made. We will try to be as thorough as can be and will emphasize breaking changes and new features that may change how your app looks and feels.

:::warning
It is your responsibility to read through the release notes before updating and putting your app into production. You and your users may suffer as a result, if anything unexpected happens.
:::

## Updating the base template

The first step in updating the base template is to use read through the release notes. When you’ve done that, you can use `git` to add the official RMUIF repository as an upstream:

```sh
git remote add upstream https://github.com/phoqe/rmuif.git
```

Then you can use `fetch` to get all the references from the repository:

```sh
git fetch upstream
```

You can then begin merging in the changes from RMUIF. The `master` branch contains the latest released version of the template. If you need something from the `develop` branch you can just replace `master` with `develop`. Here’s how you would merge in the changes:

```sh
git merge upstream/master
```

:::note
Make sure you’re on the main development branch, e.g. `master` or `develop`, depending on your setup, when merging in the changes from the upstream repository.
:::

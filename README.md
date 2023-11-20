# eslint-config-wzx-nuxt

[![NPM version](https://img.shields.io/npm/v/eslint-config-wzx-nuxt?logo=npm&style=flat-square)](https://www.npmjs.com/package/eslint-config-wzx-nuxt)
[![node](https://img.shields.io/node/v/eslint-config-wzx-nuxt?logo=nodedotjs&style=flat-square)](https://nodejs.org)
[![Code Style](https://img.shields.io/badge/code%20style-prettier-ff69b4?logo=prettier&style=flat-square)](https://prettier.io)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/VicSolWang/eslint-config-wzx-nuxt/test-release.yml?branch=master&logo=github&style=flat-square)](https://github.com/VicSolWang/eslint-config-wzx-nuxt/actions/workflows/test-release.yml)
[![release](https://img.shields.io/badge/release-semantic--release-e10079?logo=semantic-release&style=flat-square)](https://github.com/semantic-release/semantic-release)
[![codecov](https://img.shields.io/codecov/c/gh/VicSolWang/eslint-config-wzx-nuxt/master?label=codecov&logo=codecov&style=flat-square)](https://codecov.io/gh/VicSolWang/eslint-config-wzx-nuxt)
[![NPM downloads](https://img.shields.io/npm/dt/eslint-config-wzx-nuxt?style=flat-square)](https://www.npmjs.com/package/eslint-config-wzx-nuxt)

> The custom nuxt eslint rules based on [eslint-config-wzx-vue](https://www.npmjs.com/package/eslint-config-wzx-vue). (Follow airbnb-base and Support Typescript Eslint)

## :cd: Installation

    npm install --save-dev eslint-config-wzx-nuxt

:bulb: Typescript eslint needs to install [typescript](https://www.npmjs.com/package/typescript), [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser), [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

    npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

## :rocket: Usage

Starting from v4.x, we will use the new flat eslint config. Add eslint-config-wzx-nuxt in your `eslint.config.js`.

    import wzxNuxt from 'eslint-config-wzx-nuxt';

    export default [
      ...wzxNuxt,
    ]

:bulb: Typescript eslint needs `tsconfig.json` in your project root directory. And the config will select the rules of `nuxt2` or `nuxt3` according to the nuxt version installed in your project.

## :lock: License

[MIT](LICENSE).

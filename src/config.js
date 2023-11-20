/**
 * Created by VICSOLWANG.
 * Date: 2021/12/25 21:55
 * Email: vic.sol.wang@gmail.com
 */

import wzxVue from 'eslint-config-wzx-vue';
import nuxt2Config from '@nuxtjs/eslint-config';
import nuxt2ConfigTs from '@nuxtjs/eslint-config-typescript';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import nuxt3Config from './nuxt3Config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const getNuxtConfigByVersion = async () => {
  const config = {};
  const configTs = {};
  let rules = nuxt2Config.rules || {};
  let overrides = nuxt2Config.overrides || [];
  let rulesTs = nuxt2ConfigTs.rules || {};
  try {
    config.log(11111111, 'test');
    const { createNuxt } = await import('nuxt');
    if (createNuxt) {
      rules = {};
      overrides = (nuxt3Config.overrides || []).slice(1);
      rulesTs = nuxt3Config.overrides[0].rules || {};
    }
  } catch (error) {
    console.info(
      'Note: Nuxt version is not confirmed, use Nuxt2 config by default.',
    );
  }
  Object.keys(rules).forEach((key) => {
    if (key.includes('unicorn/')) {
      delete rules[key];
    }
  });
  if (rules && Object.keys(rules).length > 0) {
    config.rules = rules;
  }
  if (overrides && overrides.length > 0) {
    config.overrides = overrides;
  }
  if (rulesTs && Object.keys(rulesTs).length > 0) {
    configTs.rules = rulesTs;
  }
  return {
    config,
    configTs,
  };
};
const nuxtConfig = await getNuxtConfigByVersion();

const wzxVueOverrideIndex = wzxVue.findIndex(
  (item) =>
    item.files && item.files.length > 0 && typeof item.files[0] === 'function',
);
const wzxVueExtends = wzxVue.slice(
  0,
  wzxVueOverrideIndex > -1 ? wzxVueOverrideIndex : wzxVue.length,
);
const wzxVueAirbnbAndVue =
  wzxVueExtends.length >= 3
    ? wzxVueExtends.slice(0, wzxVueExtends.length - 3)
    : [];
const wzxVuePrettierAndVuePlugins = wzxVueExtends.slice(
  wzxVueExtends.length - 3,
);
const wzxVueOverrides =
  wzxVueOverrideIndex > -1 && wzxVue.length >= 2
    ? wzxVue.slice(wzxVueOverrideIndex, wzxVue.length - 2)
    : [];
const wzxVueOverridesAirbnbAndVue =
  wzxVueOverrides.length >= 3
    ? wzxVueOverrides.slice(0, wzxVueOverrides.length - 3)
    : [];
const wzxVueOverridesPrettierAndVuePlugins = wzxVueOverrides.slice(
  wzxVueOverrides.length - 3,
);
const wzxVueCustomRules = wzxVue[wzxVue.length - 2] || {};
const wzxVueCustomLanguageOptions = wzxVue.slice(wzxVue.length - 1);

let $config = [
  ...wzxVueAirbnbAndVue,
  ...compat.config(nuxtConfig.config),
  ...wzxVuePrettierAndVuePlugins,
];

try {
  await import('typescript');
  await import('@typescript-eslint/parser');
  await import('@typescript-eslint/eslint-plugin');
  const overridesFilesTypes = {
    files: wzxVueOverridesAirbnbAndVue[0].files,
  };
  $config = [
    ...$config,
    ...wzxVueOverridesAirbnbAndVue,
    {
      ...nuxtConfig.configTs,
      ...overridesFilesTypes,
    },
    ...wzxVueOverridesPrettierAndVuePlugins,
  ];
} catch (error) {
  console.info(
    'Note: Typescript eslint needs to install typescript, @typescript-eslint/parser, @typescript-eslint/eslint-plugin.',
  );
}

const config = [...$config, wzxVueCustomRules, ...wzxVueCustomLanguageOptions];

export default config;

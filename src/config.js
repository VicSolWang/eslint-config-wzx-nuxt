/**
 * Created by VICSOLWANG.
 * Date: 2021/12/25 21:55
 * Email: vic.sol.wang@gmail.com
 */

const baseConfig = require('eslint-config-wzx-vue');

const getNuxtConfig = (isSupportTs = false) => [
  !isSupportTs ? '@nuxtjs/eslint-config' : '@nuxtjs/eslint-config-typescript',
  'plugin:nuxt/recommended',
];

const handleExtendsConfig = (extendsConfig = [], isSupportTs = false) => {
  const result = [...extendsConfig];
  result.splice(result.length - 1, 0, ...getNuxtConfig(isSupportTs));
  return result;
};

const { overrides: defaultOverrides, ...defaultConfig } = baseConfig;
const config = {
  ...defaultConfig,
  extends: handleExtendsConfig(defaultConfig.extends),
  plugins: defaultConfig.plugins.concat(['nuxt']),
};

try {
  require('typescript');
  require('@typescript-eslint/parser');
  require('@typescript-eslint/eslint-plugin');
  config.overrides = [
    {
      ...defaultOverrides[0],
      extends: handleExtendsConfig(defaultOverrides[0].extends, true),
      plugins: defaultOverrides[0].plugins.concat(['nuxt']),
    },
  ];
} catch (err) {
  console.info(
    'Note: Typescript eslint needs to install typescript, @typescript-eslint/parser, @typescript-eslint/eslint-plugin.',
  );
}

module.exports = config;

/**
 * Created by VICSOLWANG.
 * Date: 2023/11/14 21:19
 * Email: vic.sol.wang@gmail.com
 */

export default {
  '**/*.{vue,js,ts}': [
    'prettier --write --list-different',
    'eslint --no-error-on-unmatched-pattern --fix',
  ],
  '**/*.json': ['prettier --write --list-different'],
};

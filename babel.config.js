/* eslint-disable no-return-assign, no-param-reassign */
const { compilerOptions } = require('./tsconfig.json');

const pathEntries = Object.entries(compilerOptions.paths);
const normalizePath = (obj) => (Array.isArray(obj) ? obj.map(normalizePath) : obj.replace('/*', ''));
const pathAliases = normalizePath(pathEntries)
  .reduce((paths, path) => paths = { ...paths, [path[0]]: path[1][0] }, {});

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        ...pathAliases,
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};

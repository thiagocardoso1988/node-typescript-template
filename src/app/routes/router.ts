/* eslint-disable import/no-dynamic-require, global-require */
import glob from 'glob';
import { Router } from 'express';

export default (): Router => glob
  .sync('**/*.ts', { cwd: `${__dirname}/` })
  .map((filename) => require(`./${filename}`))
  .filter((router) => Object.getPrototypeOf(router.default || router.default || router) === Router)
  .reduce((rootRouter, router) => rootRouter.use(router.default), Router({ mergeParams: true }));

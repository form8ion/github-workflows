import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

import {After, Before, When} from '@cucumber/cucumber';
import stubbedFs from 'mock-fs';

const __dirname = dirname(fileURLToPath(import.meta.url));          // eslint-disable-line no-underscore-dangle
const stubbedNodeModules = stubbedFs.load(resolve(__dirname, '..', '..', '..', '..', 'node_modules'));

let scaffold, qualify;

Before(async function () {
  this.projectRoot = process.cwd();
  // eslint-disable-next-line import/no-extraneous-dependencies,import/no-unresolved
  ({scaffold, qualify} = await import('@form8ion/github-workflows'));

  stubbedFs({
    node_modules: stubbedNodeModules
  });
});

After(function () {
  stubbedFs.restore();
});

When('the project is scaffolded', async function () {
  if (await qualify({projectRoot: this.projectRoot})) {
    await scaffold({projectRoot: this.projectRoot});
  }
});

import {promises as fs} from 'node:fs';

import {Given} from '@cucumber/cucumber';

Given('the repository is hosted on GitHub', async function () {
  await fs.mkdir(`${this.projectRoot}/.github`);
});

import {directoryExists} from '@form8ion/core';

import {Then} from '@cucumber/cucumber';
import assert from 'node:assert';

Then('the workflows directory will be created', async function () {
  assert.equal(await directoryExists(`${this.projectRoot}/.github/workflows`), true);
});

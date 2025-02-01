import {promises as fs} from 'node:fs';

import any from '@travi/any';
import {vi, describe, it, expect, afterEach} from 'vitest';

import scaffold from './scaffolder.js';

vi.mock('node:fs');

describe('scaffolder', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create the workflows directory', async () => {
    const projectRoot = any.string();

    expect(await scaffold({projectRoot})).toEqual({});

    expect(fs.mkdir).toHaveBeenCalledWith(`${projectRoot}/.github/workflows`, {recursive: true});
  });
});

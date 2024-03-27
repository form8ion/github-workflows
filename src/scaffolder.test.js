import makeDir from 'make-dir';

import any from '@travi/any';
import {vi, describe, it, expect, afterEach} from 'vitest';

import scaffold from './scaffolder.js';

vi.mock('make-dir');

describe('scaffolder', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create the workflows directory', async () => {
    const projectRoot = any.string();

    expect(await scaffold({projectRoot})).toEqual({});

    expect(makeDir).toHaveBeenCalledWith(`${projectRoot}/.github/workflows`);
  });
});

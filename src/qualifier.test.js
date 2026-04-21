import {sourceHostedOnGitHub} from '@form8ion/github-core';

import {describe, it, vi, expect} from 'vitest';
import {when} from 'vitest-when';
import any from '@travi/any';

import githubWorkflowsAreApplicable from './qualifier.js';

vi.mock('@form8ion/github-core');

describe('qualifier', () => {
  const projectRoot = any.string();

  it('should return `true` when the repository is hosted on github', async () => {
    when(sourceHostedOnGitHub).calledWith({projectRoot}).thenResolve(true);

    expect(await githubWorkflowsAreApplicable({projectRoot})).toBe(true);
  });

  it('should return `false` when the repository is not hosted on github', async () => {
    when(sourceHostedOnGitHub).calledWith({projectRoot}).thenResolve(false);

    expect(await githubWorkflowsAreApplicable({projectRoot})).toBe(false);
  });
});

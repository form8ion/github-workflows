import {sourceHostedOnGitHub} from '@form8ion/github-core';

export default function qualify({projectRoot}) {
  return sourceHostedOnGitHub({projectRoot});
}

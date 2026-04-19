import {promises as fs} from 'node:fs';

export default async function scaffoldGithubWorkflows({projectRoot}) {
  await fs.mkdir(`${projectRoot}/.github/workflows`, {recursive: true});
  await fs.writeFile(`${projectRoot}/.github/workflows/.gitkeep`, '');

  return {};
}

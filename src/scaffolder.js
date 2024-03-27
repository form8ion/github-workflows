import makeDir from 'make-dir';

export default async function ({projectRoot}) {
  await makeDir(`${projectRoot}/.github/workflows`);

  return {};
}

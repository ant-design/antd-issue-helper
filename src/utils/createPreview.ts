export default function createPreview(issueType: string, values: any) {
  if (issueType === 'bug') {
    return createBugPreview(values);
  }
  return createFeaturePreview(values);
}

function createBugPreview({
  version,
  system,
  browser,
  reproduction,
  steps,
  expected,
  actual,
  extra,
  repo,
}: any) {
  return `
### Reproduction link
${createReproductionLink(reproduction)}

### Steps to reproduce
${steps}

### What is expected?
${expected}

### What is actually happening?
${actual}

| Environment | Info |
|---|---|
| ${repo} | ${version} |
| System | ${system} |
| Browser | ${browser} |

${extra ? `---\n${extra}` : ''}
`.trim();
}

function createFeaturePreview({ motivation, proposal }: any) {
  return `
### What problem does this feature solve?
${motivation}

### What does the proposed API look like?
${proposal}
`.trim();
}

function createReproductionLink(link: string) {
  if (!link) {
    return;
  }

  if (link.indexOf('codesandbox.io') >= 0) {
    return `[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](${link})`;
  }

  return `[${link}](${link})`;
}

export default function createPreview(issueType: string, values: any) {
  if (issueType === 'bug') {
    return createBugPreview(values);
  }
  return createFeaturePreview(values);
}

function createBugPreview({
  version,
  reproduction,
  steps,
  expected,
  actual,
  extra
}: any) {
  return `
### Version
${version}

### Reproduction link
[${reproduction}](${reproduction})

### Steps to reproduce
${steps}

### What is expected?
${expected}

### What is actually happening?
${actual}

${extra ? `---\n${extra}` : ''}
`.trim();
}

function createFeaturePreview({
  motivation,
  proposal
}: any) {
  return `
### What problem does this feature solve?
${motivation}

### What does the proposed API look like?
${proposal}
`.trim();
}

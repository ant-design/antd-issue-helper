export default function createPreview(issueType: string, values: any) {
  if (issueType === 'bug') {
    return createBugPreview(values);
  }
  return createFeaturePreview(values);
}

function createBugPreview({  
  steps,
}: any) {
  return `

### Steps to reproduce
${steps}

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

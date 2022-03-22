export default function createPreview(issueType: string, values: any) {
  if (issueType === "bug") {
    return createBugPreview(values);
  }
  return createFeaturePreview(values);
}

function createBugPreview({
  version,
  react,
  system,
  browser,
  reproduction,
  steps,
  expected,
  actual,
  extra,
  repo
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

### Environment and version

- antd: \`${version || "not specified"}\`
- React: \`${react || "not specified"}\`
- System: \`${version || "not specified"}\`
- Browser: \`${browser || "not specified"}\`

${extra ? `---\n${extra}` : ""}
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

  if (link.indexOf("codesandbox.io") >= 0) {
    return `[![Edit on CodeSandbox](https://gw.alipayobjects.com/zos/antfincdn/HnwnLhPWA/codesandbox.png)](${link})`;
  }

  return `[${link}](${link})`;
}

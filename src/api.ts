const compareVersions: any = require("compare-versions");

interface Response {
  status: number;
  statusText: string;
  json(): any;
}

const npmEndpoint = "https://registry.npm.taobao.org";
const endpoint = "https://api.github.com";

const npmMapping: { [repo: string]: string } = {
  "ant-design": "antd",
  "ant-design-mobile": "antd-mobile",
  "ant-design-mobile-rn": "@ant-design/react-native"
};

function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(response.statusText);
  }
}

function orderVersions(versions: string[]): string[] {
  const normalVersions: string[] = [];
  const nextVersions: string[] = [];
  versions.forEach(version => {
    if (version.match(/^\d+\.\d+\.\d+$/) || version.includes("-rc.")) {
      normalVersions.push(version);
    } else {
      nextVersions.push(version);
    }
  });

  return [
    ...normalVersions.sort((a: string, b: string) => -compareVersions(a, b)),
    ...nextVersions.sort((a: string, b: string) => -compareVersions(a, b))
  ];
}

export function fetchVersions(repo: string) {
  const npmPromise = fetch(`${npmEndpoint}/${npmMapping[repo]}`)
    .then(checkStatus)
    .then((response: Response) => response.json())
    .then(({ versions }) =>
      Object.keys(versions).filter(ver => !ver.includes("-"))
    )
    .then(versions => orderVersions(versions))
    .then(versions => versions.slice(0, 100));

  // We use github versions first, but if failed use npm versions as backup
  return fetch(`${endpoint}/repos/ant-design/${repo}/releases?per_page=100`)
    .then(checkStatus)
    .then((response: Response) => response.json())
    .then(releases => releases.filter((r: any) => !r.prerelease))
    .then(releases => releases.map((r: any) => r.tag_name))
    .then(versions => orderVersions(versions))
    .catch(err => {
      console.warn(err);
      return npmPromise;
    });
}

export function fetchIssues(repo: string, keyword: string) {
  const q = encodeURIComponent(`is:issue repo:ant-design/${repo} ${keyword}`);
  return fetch(`${endpoint}/search/issues?q=${q}&per_page=5`)
    .then(checkStatus)
    .then((response: Response) => response.json())
    .then(json => json.items);
}

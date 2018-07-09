const compareVersions: any = require('compare-versions');

interface Response {
  status: number;
  statusText: string;
  json(): any;
}

const endpoint = 'https://api.github.com';

function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(response.statusText);
  }
}

export function fetchVersions(repo: string) {
  return fetch(`${endpoint}/repos/eggjs/${repo}/releases?per_page=100`)
    .then(checkStatus)
    .then((response: Response) => response.json())
    .then(releases => releases.filter((r: any) => !r.prerelease))
    .then(releases => releases.map((r: any) => r.tag_name))
    .then(versions =>
      versions.sort((a: string, b: string) => -compareVersions(a, b)),
    );
}

export function fetchIssues(repo: string, keyword: string) {
  const q = encodeURIComponent(`is:issue repo:eggjs/${repo} ${keyword}`);
  return fetch(`${endpoint}/search/issues?q=${q}&per_page=5`)
    .then(checkStatus)
    .then((response: Response) => response.json())
    .then(json => json.items);
}

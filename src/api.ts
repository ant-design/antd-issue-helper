import 'whatwg-fetch';

interface Response {
  json(): any;
}

const endpoint = 'https://api.github.com';

export function fetchVersions(repo: string) {
  return fetch(`${endpoint}/repos/ant-design/${repo}/releases`)
    .then((response: Response) => response.json())
    .then(releases => releases.map((r: any) => r.tag_name));
}

export function fetchIssues(repo: string, keyword: string) {
  const q = encodeURIComponent(`is:issue repo:ant-design/${repo} ${keyword}`);
  return fetch(`${endpoint}/search/issues?q=${q}&per_page=5`)
    .then((response: Response) => response.json())
    .then(json => json.items);
}

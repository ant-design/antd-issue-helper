interface RepoItem {
  id: string;
  name: string;
  package: string;
}

export const REPO_CONFIG: { [repo: string]: RepoItem } = {
  g: {
    id: 'g',
    name: 'G',
    package: '@antv/g-base',
  },
  g2: {
    id: 'g2',
    name: 'G2',
    package: '@antv/g2',
  },
  g2plot: {
    id: 'g2plot',
    name: 'G2Plot',
    package: '@antv/g2plot',
  },
  g6: {
    id: 'g6',
    name: 'G6',
    package: '@antv/g6',
  },
  x6: {
    id: 'x6',
    name: 'X6',
    package: '@antv/x6',
  },
  l7: {
    id: 'l7',
    name: 'L7',
    package: '@antv/l7',
  },
  f2: {
    id: 'f2',
    name: 'F2',
    package: '@antv/f2',
  },
  f6: {
    id: 'f6',
    name: 'F6',
    package: '@antv/f6',
  },
  s2: {
    id: 's2',
    name: 'S2',
    package: '@antv/s2',
  },
};

export const REPO_LIST: RepoItem[] = Object.values(REPO_CONFIG);

interface RepoItem {
  package: string;
}

export const REPO_CONFIG: { [repo: string]: RepoItem } = {
  g: {
    package: '@antv/g-base',
  },
  g2: {
    package: '@antv/g2',
  },
  g2plot: {
    package: '@antv/g2plot',
  },
  g6: {
    package: '@antv/g6',
  },
  x6: {
    package: '@antv/x6',
  },
  f2: {
    package: '@antv/f2',
  },
  l7: {
    package: '@antv/l7',
  },
};

export const REPO_LIST: string[] = Object.keys(REPO_CONFIG);

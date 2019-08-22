import * as api from '../utils/api';
import { state } from 'reactive.macro';

export default function useSimilarIssues() {
  let similarIssues: any[] = state([]);

  const searchIssues = (repo: string, title: string) => {
    if (title) {
      api.fetchIssues(repo, title).then(_issues => (similarIssues = _issues));
    } else {
      similarIssues = [];
    }
  };

  return {
    similarIssues,
    searchIssues,
  };
}

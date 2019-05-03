import * as api from "../api";
import { state } from "reactive.macro";

export default function useVersions() {
  let repoVersions: { [repo: string]: string[] } = state({});

  const fetchVersions = (repo: string) => {
    api.fetchVersions(repo).then(
      (versions: string[]) =>
        (repoVersions = {
          ...repoVersions,
          [repo]: versions
        })
    );
  };

  return { repoVersions, fetchVersions };
}

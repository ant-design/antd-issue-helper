import * as api from "../api";
import { state } from "reactive.macro";
import { useCallback } from "react";

export default function useVersions() {
  let repoVersions: { [repo: string]: string[] } = state({});

  const fetchVersions = useCallback(
    (repo: string) => {
      api.fetchVersions(repo).then(
        (versions: string[]) =>
          // eslint-disable-next-line react-hooks/exhaustive-deps
          (repoVersions = {
            ...repoVersions,
            [repo]: versions
          })
      );
    },
    [JSON.stringify(repoVersions)]
  );

  return { repoVersions, fetchVersions };
}

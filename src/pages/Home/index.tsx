import { FormEvent, useEffect, useRef, useState } from "react";
import { Card } from "../../components/Card";
import { api } from "../../services/api";

interface SearchResultProps {
  total_count: number;
  incomplete_results: boolean;
  items: [
    {
      id: number;
      node_id: string;
      name: string;
      full_name: string;
      private: boolean;
      owner: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: false;
      };
      html_url: string;

      description: null;
      fork: false;
      url: string;
      forks_url: string;
      keys_url: string;
      collaborators_url: string;
      teams_url: string;
      hooks_url: string;
      issue_events_url: string;
      events_url: string;
      assignees_url: string;
      branches_url: string;
      tags_url: string;
      blobs_url: string;
      git_tags_url: string;
      git_refs_url: string;
      trees_url: string;
      statuses_url: string;
      languages_url: string;
      stargazers_url: string;
      contributors_url: string;
      subscribers_url: string;
      subscription_url: string;
      commits_url: string;
      git_commits_url: string;
      comments_url: string;
      issue_comment_url: string;
      contents_url: string;
      compare_url: string;
      merges_url: string;
      archive_url: string;
      downloads_url: string;
      issues_url: string;
      pulls_url: string;
      milestones_url: string;
      notifications_url: string;
      labels_url: string;
      releases_url: string;
      deployments_url: string;
      created_at: string;
      updated_at: string;
      pushed_at: string;
      git_url: string;
      ssh_url: string;
      clone_url: string;
      svn_url: string;

      homepage: null;
      size: number;
      stargazers_count: number;
      watchers_count: number;
      language: string;
      has_issues: boolean;
      has_projects: boolean;
      has_downloads: boolean;
      has_wiki: boolean;
      has_pages: boolean;
      forks_count: number;

      mirror_url: null;
      archived: boolean;
      disabled: boolean;
      open_issues_count: number;

      license: null;
      allow_forking: boolean;
      is_template: boolean;

      topics: [];
      visibility: string;
      forks: number;
      open_issues: number;
      watchers: number;
      default_branch: string;
      score: number;
    }
  ];
}

export function Home() {
  const [searchResult, setSearchResult] = useState<SearchResultProps>(
    {} as SearchResultProps
  );
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    api
      .get(`search/repositories?q=${searchInput}`)
      .then((response) => setSearchResult(response.data));
  }, [searchInput]);

  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (inputRef.current?.value !== undefined) {
      setSearchInput(inputRef.current.value);
    }
  }

  return (
    <div>
      <h1 className="title">Explore repositórios no Github.</h1>
      <form className="search">
        <input
          type="text"
          name=""
          id=""
          placeholder="Digite aqui"
          ref={inputRef}
          spellCheck={false}
        />
        <button type="submit" onClick={handleSearch}>
          Pesquisar
        </button>
      </form>
      <main>
        {searchResult.items == undefined
          ? ""
          : searchResult.items.map((item) => {
              return <Card repository={item} key={item.id}></Card>;
            })}
      </main>
    </div>
  );
}

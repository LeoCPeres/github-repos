import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import "./styles.css";

type RepoParams = {
  name: string;
  owner_login: string;
};

interface SearchResultProps {
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

export function Repository() {
  const params = useParams<RepoParams>();
  const repoName = `${params.owner_login}/${params.name}`;

  const [searchResult, setSearchResult] = useState<SearchResultProps>(
    {} as SearchResultProps
  );

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get(`repos/${repoName}`);
      setSearchResult(response.data);
    }

    fetchApi();
  }, []);

  console.log(searchResult);

  return (
    <div>
      {/* {searchResult == undefined ? (
        ""
      ) : (
        <div className="repo">
          <img src={searchResult.owner.avatar_url} alt="" />
          <div className="repo-info">
            <h2>{searchResult.name}</h2>
            <span>{searchResult.description}</span>
          </div>
        </div>
      )} */}
    </div>
  );
}

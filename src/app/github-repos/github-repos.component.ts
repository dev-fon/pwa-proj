import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

interface GitHubRepo {
  html_url: string;
  name: string;
  language: string;
  description: string;
}


@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements OnInit {
  repos: GitHubRepo[];
  public searchText: string;

  constructor(private githubService: GithubServiceService) { }

  ngOnInit() {
    this.githubService.getRepos('dfonjga')
    .subscribe((data: GitHubRepo[]) => {
      this.repos = data;
    });
  }

  onSearchButtonClick() {
    this.githubService.getRepos(this.searchText)
    .subscribe((data: GitHubRepo[]) => {
      this.repos = data;
    });
  }
}

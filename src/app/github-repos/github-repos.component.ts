import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

interface GitHubRepo {
  name: string;
  url: string;
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
    this.githubService.getRepos('nel-sam')
      .subscribe((data: GitHubRepo[]) => {
        this.repos = data;
      });
  }

  onSearchButtonClick() {
  }
}

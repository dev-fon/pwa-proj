import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.scss']
})
export class GithubReposComponent implements OnInit {
  repos: string;

  constructor(private githubService: GithubServiceService) { }

  ngOnInit() {
    this.githubService.getRepos('nel-sam')
      .subscribe((data: any) => {
        this.repos = data;
      });
  }

}

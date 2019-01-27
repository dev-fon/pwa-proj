import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http: HttpClient) {
  }

  public getRepos(username: string) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}

/**
 * @fileoverview Gibhub service.
 *
 * @author Kyaw Tun <kyawtun@yathit.com>
 */

import { Injectable } from '@angular/core';

@Injectable()
export class GithubService {
  username: string;
  constructor() {
    this.username = '';
  }
  getUsername(): string {return this.username;}
  setUsername(username: string): void {
    this.username = username;
  }

  private request(path: string): Promise<Object> {
    let url = 'https://api.github.com/' + path;
    return window['fetch'](url).then(function(resp) { // ???: HTML5 fetch is not recognized by TS
      return resp.json();
    });
  }

  public listProjects(): Promise<Object> {
    return this.request('users/' + this.username + '/repos');
  }


  public readme(repo: string): Promise<Object> {
    return this.request('repos/' + this.username + '/' + repo + '/readme');
  }
}



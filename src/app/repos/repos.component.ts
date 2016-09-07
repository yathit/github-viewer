import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GithubService} from "../github.service";
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Repos` component loaded asynchronously');

@Component({
  selector: 'repos',
  styles: [`
  `],
  template: `
    <h1>Projects</h1>
    
    <ul>
      <li *ngFor='let repo of repos'>
        <a routerLink="/repo/{{ repo.name }}">{{ repo.name }}</a>
      </li>
    </ul>
 
  `
})
export class Repos {
  localState: any;
  repos: Array<Object>;
  constructor(private router: Router, public githubService: GithubService) {

  }

  ngOnInit() {

    if (!this.githubService.getUsername()) {
      this.router.navigate(['/home']);
      return;
    }

    this.githubService.listProjects().then((function(repos) {
      console.log(repos);
      this.repos = repos;

    }).bind(this));

    console.log('hello `Repos` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    // setTimeout(() => {
    //
    //   let asyncDataPromise = asyncMockDataPromiseFactory();
    //   asyncDataPromise.then(json => {
    //     console.log('async mockData', json);
    //   });
    //
    // });
  }

}

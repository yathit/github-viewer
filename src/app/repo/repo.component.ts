import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GithubService} from "../github.service";
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Repo` component loaded asynchronously');

@Component({
  selector: 'repo',
  styles: [`
  `],
  template: `
    <h1>Project: {{ name }} </h1>
   
    <div>
      {{ content }}
    </div>

  `
})
export class Repo {
  name: any;
  readme: Object;
  content: string;
  constructor(public route: ActivatedRoute, private router: Router, private githubService: GithubService) {

  }

  renderDetail() {
    this.githubService.readme(this.name).then((md) => {
      this.readme = md;
      this.content = atob(md['content'] || '');
    })
  }

  ngOnInit() {
    this.route
      .params
      .subscribe((data: any) => {
        // your resolved data from route
        if (!this.githubService.getUsername() || !data.name) {
          this.router.navigate(['/home']);
          return;
        }
        this.name = data.name;
        this.renderDetail();
      });

    console.log('hello `Repo` component');
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

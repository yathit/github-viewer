import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { Repo } from './repo';
import { About } from './about';
import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';
import {Repos} from "./repos/repos.component";


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'repo/:name', component: Repo },
  { path: 'repos', component: Repos },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];

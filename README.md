## A single-page appplication that display a user Github projects

This is a test project.

See [final app](https://yathit.github.io/github-viewer/dist/index.html).

## Setup

This is a AngularJS 2 application using [Angular2 Webpack Starter](https://github.com/AngularClass/angular2-webpack-starter). 

Tested in OS X with node 5.10.2 and npm 3.8.3. ()node 4 and npm 2 have dependency conflict.)

See there for detail, briefly

    npm install
    npm start
    
For development

    npm run server:dev:hmr
    
## Intro 
    
The starter project come with minimal SPA, but using hash for routing.     
    
## Gitbub Service
    
Main implementation is `GithubService`, which provides data from given github user.

## Repos Component
    
`Repos` component show user's projects and entry point for project details.

## Repo Component

`Repo` component show project detail with Readme content.
   
    



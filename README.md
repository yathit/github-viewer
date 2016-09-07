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
    
Production build
    
    npm run build:prod
    
Then, change to relative url
    
    sed -i -e  's/href="\//href="/g' dist/index.html
    
## Intro 
    
The starter project come with minimal SPA, but using hash for routing. Change to HTML5 routing by setting `<base href="/">` in index.html file as describe in [doc](https://angular.io/docs/ts/latest/guide/router.html#!#browser-url-styles), but does not work :-(.     
    
## Gitbub Service
    
Main implementation is `GithubService`, which provides data from given github user.

## Repos Component
    
`Repos` component show user's projects and entry point for project details.

## Repo Component

`Repo` component show project detail with Readme content.
   
    



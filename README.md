Countries and Capitals
======================
<span style='text-align: center; '>[gh-Pages Demo](http://spdavern.github.io/Countries-and-Capitals/)</span>

Thinkful AngularJS Unit 2 Lesson 2 Assignment 3

# Development Computer Setup
## Once per computer:
* Install npm: See https://github.com/npm/npm
* Install Bower globally: `npm install -g bower`
* Install Gulp globally: `npm install -g gulp`
* Install Karma command line interface globally: `npm install -g karma-cli` (runs the project-local version of karma - <span>[Ref](http://karma-runner.github.io/0.12/intro/installation.html)</span>)

## Application specific:
* Clone/Pull/Fork this repo
* cd into the new repo
* Pull down dev dependencies: `npm install`
* Pull down app dependencies: `bower install`
* Start Gulp server: `gulp`   this is equivalent to `gulp connect` because the 'connect' task is set as the default in gulpfile.js.
* The app is now being served at http://localhost:8080
* Start unit-test runner: `karma start`  Karma is now watching app and spec files and running unit tests upon update.

## Build deployable app:
* Build munged, minified files: `gulp build`
* Run built app locally: `gulp runbuild`

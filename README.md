# Moose | API

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/devsebastian/moose/issues) 
[![beta](https://img.shields.io/badge/production-BETA-red.svg)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/devsebastian/moose/blob/master/LICENSE) 
[![twitter](https://img.shields.io/badge/Twitter-@iDevSebastian-green.svg)](https://twitter.com/iDevSebastian)

> Moose is still in its very early stages. Breaking changes might come and the app might crash or not work as intended in some cases.

Beta Setup: [windows (\*.exe setup)](https://drive.google.com/open?id=1qJ3HzkEhlP4eP7ZkFKEWMktRrG-wNT7d)

Moose is a powerful cross-platform REST *client*, built on top of Electron. It is still in development and is in it's very early stages.

![Moose](static/images/screenshot1.png)

## Pluggins/Dependencies
 - [axios](https://www.npmjs.com/package/axios) - for accessing API contents and headers
 - [code-mirror](https://codemirror.net/) - default editor used in the app
 - React Scripts required to work in react
   - [react](https://reactjs.org/)
   - [react-dom](https://reactjs.org/)
   - [react-scripts](https://reactjs.org/)
   
## DevDependencies
 - [foreman](https://www.npmjs.com/package/foreman)
 - [electron](https://electronjs.org/)
 - [electron-builder](https://www.npmjs.com/package/electron-builder)
   
## Getting the Sources
First, fork the moose repository so that you can make a pull request. Then, clone your fork locally:
git clone https://github.com/[your-github-account]/moose.git
Occasionally you will want to merge changes in the upstream repository (the official code repo) with your fork.

```
cd moose
git checkout master
git pull https://github.com/devsebastian/moose.git master
```
Manage any merge conflicts, commit them, and then push them to your fork.

To setup all node modules, in the terminal run:
```
npm install
```
 
## Production
in the terminal just run
```
yarn dev
```
OR
```
npm run dev
```

## License
Copyright (c) 2020 Dev Sebastian

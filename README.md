Fetch feeds from twitter using es-next code. Some keywords: gulp, BrowserSync, Backbone, Karma, Jasmine, jquery, LESS, FlexBox, ES6, babel, jspm, nodejs

Because twittwer does not support CORS, twitter queries are done through a nodejs server found here: http://twitter-cors.herokuapp.com/feed

The source code for the server is found here:
https://github.com/liviuignat/twitterfeed-server

Client dependecies are managed with jspm (http://jspm.io/). Run the commands with administrator rights in the exact order as below:

```
npm install -g gulp jspm
jspm registry config github //add your github credentials
npm install
jspm install
```

Usefull commands to run the project: 

```
gulp
gulp test
```

TODOs:
- create production build gulp task to generate ES5 js sources and minify JS, HTML.
- create output for HTML templates in a combined template cache
- FlexBox is not IE9,8 compatible, replace with compatible CSS to handle the grid system

Resources:
- http://jspm.io/
- https://babeljs.io/
- https://github.com/lukehoban/es6features
- http://benmccormick.org/2015/04/07/es6-classes-and-backbone-js/

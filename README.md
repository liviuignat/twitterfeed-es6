### Twitter Feed [![Build Status](https://travis-ci.org/liviuignat/twitterfeed-es6.svg?branch=master)](https://travis-ci.org/liviuignat/twitterfeed-es6)

Fetch feeds from twitter using es-next code. Keywords: gulp, BrowserSync, Backbone, Karma, Jasmine, jquery, LESS, FlexBox, ES6, SystemJS, babel, jspm, nodejs

Because twittwer does not support CORS, twitter queries are done through a nodejs server which I developed. First request to the api might be slower because Heroku stops the app when it's not used for a while. Link can be found here: http://twitter-cors.herokuapp.com/feed?count=2&user_names=liviu_ignat

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
gulp build //generates the production sources
gulp serve:prod //run the application locally with production sources (faster load, test in prod mode)
```

Structure: 
- Main folders are split in common, services, components and styles.
- Each test file is in the same folder with the file that is being tested having *.spec.js suffix.
- Each template file is in the same folder as the view having *.view.tmpl.html suffix.
- Each *.less file is in the same folder as the view having *.view.less suffix.

Styles:
- Namings follow suit css, a standard for component style applications: https://suitcss.github.io/
- Each component has each own .less file. They are combined in /styles/coponents.less. Variables are defined also in /styles/varibales.less

Testing:
  - Testing framework used is jasmine
  - Test are being ran in TravisCI also
  - Run tests manually once with command: gulp test

TODOs:
- create production build gulp task to generate ES5 js sources and minify JS, HTML.
- create output for HTML templates in a combined template cache
- FlexBox is not IE9,8 compatible, replace with compatible CSS to handle the grid system

Resources:
- http://jspm.io/
- https://babeljs.io/
- https://github.com/lukehoban/es6features
- http://benmccormick.org/2015/04/07/es6-classes-and-backbone-js/


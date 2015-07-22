### Twitter Feed

Fetch feeds from twitter using es-next code. Keywords: gulp, BrowserSync, Backbone, Karma, Jasmine, jquery, LESS, FlexBox, ES6, SystemJS, babel, jspm, nodejs

Because twittwer does not support CORS, twitter queries are done through a nodejs server which I developed and it's found here: http://twitter-cors.herokuapp.com/feed

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

Structure: 
- Main folders are split in common, services, components and styles.
- Each test file is in the same folder with the file that is being tested having *.spec.js sufix.
- Each template file is in the same folder as the view having *.view.tmpl.html sufix.
- Each *.less file is in the same folder as the view having *.view.less sufix.

Styles:
- Namings follow suit css, a standard for component style applications: https://suitcss.github.io/
- Each component has each own .less file. They are combined in /styles/coponents.less. Variables are defined also in /styles/varibales.less

TODOs:
- create production build gulp task to generate ES5 js sources and minify JS, HTML.
- create output for HTML templates in a combined template cache
- FlexBox is not IE9,8 compatible, replace with compatible CSS to handle the grid system

Resources:
- http://jspm.io/
- https://babeljs.io/
- https://github.com/lukehoban/es6features
- http://benmccormick.org/2015/04/07/es6-classes-and-backbone-js/

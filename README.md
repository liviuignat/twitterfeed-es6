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
gulp serve:prod //run the application locally with production sources (faster load, test in prod mode)
gulp build      //generates the production sources (output in ./.dist)
gulp            //run application in development mode with auto-reload features
gulp test       //single test run
gulp lint       //run JS linter

```

Structure: 
- Main folders are split in common, services, components and styles.
- Each test file is in the same folder with the file that is being tested having *.spec.js suffix.
- Each template file is in the same folder as the view having *.view.tmpl.html suffix.
- Each *.less file is in the same folder as the view having *.view.less suffix.

Styles:
- Namings follow suit css, a naming convention for component style applications: https://suitcss.github.io/
- Each component has each own *.less file. 
- All components are combined in ./src/styles/components.less. 
- Variables are defined also in ./src/styles/varibales.less
- There are 2 main theme files ./src/theme-default.less and ./src/theme-reddiamond.less
- Grid system is managed with FlexBox, because of simplicity. It is very known that IE support for FlexBox is very low.

Testing:
- Testing framework used is jasmine
- Test are being ran in TravisCI also, see ./.travis.yml for configuration
- Run tests manually once with command: ```gulp test```

Build system:
- Tasks are being ran with gulp
- gulp default task will put an watch on all development files and auto-reload the browser 

Browser compatibility:
- CSS: Known issue - IE has limitted support for Flexbox.
- JavaScript: running ```gulp serve:prod``` should prove support for IE9 and greater.

TODOs:
- FlexBox is not compatible with IE9,8  and has bugs also on other IE versions, replace with compatible CSS to handle the grid system

Where is it published? It is published on Heroku, just follow this link: http://twitter-feeds.herokuapp.com/

Resources:
- http://jspm.io/
- https://babeljs.io/
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- https://github.com/lukehoban/es6features
- http://benmccormick.org/2015/04/07/es6-classes-and-backbone-js/


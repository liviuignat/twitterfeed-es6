var koa = require('koa');
var serveStatic = require('koa-static');
var bodyParser = require('koa-body-parser');
var methodOverride = require('koa-methodoverride')
var router = require('koa-router')();
var path = require('path');
var fs = require('fs');
var util = require('util');

var PORT = process.env.PORT || 8000;
var app = koa();
var rootFolder = path.join(__dirname);

var readFileThunk = function(src) {
  return new Promise(function (resolve, reject) {
    fs.readFile(src, {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
}

router.get('/', '/layout', function * (next) {
  var filePath = path.join(rootFolder, '.dist/index.html');
  this.body = yield readFileThunk(filePath);
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(bodyParser())
  .use(methodOverride())
  .app.use(gzip());
  .use(serveStatic(path.join(rootFolder, '.dist'), {
    maxage: 365 * 24 * 60 * 60 * 1000
  }));


app.listen(PORT);
console.log(util.format('server started on port %s as "%s" environment.'), PORT, process.env.NODE_ENV);


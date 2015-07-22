'use strict';

var url = require('url');
var fs = require('fs');
var path = require('path');
var folder = path.resolve(__dirname, 'src');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();
var path = require('path');
var fse = require('fs-extra');
var bundleLess = require('bundle-less');
var runSequence = require('run-sequence');
var karma = require('karma');
var jsPaths = ['src/**/*.js', '!src/config.js', '!src/jspm_packages/*.js', '!src/jspm_packages/**/*.js']

var supportedBrowsers = ['last 3 versions', 'last 3 BlackBerry versions', 'last 3 Android versions'];

var runKarma = function (config, done) {
  karma.server.start(config, function (failedTests) {
    done();
  });
};

var compileLess = function (options) {
  var inputFile = path.resolve(options.from);
  var outputFile = path.resolve(options.to);
  var less = fse.readFileSync(inputFile, 'utf-8');
  return bundleLess(less, options).then(function (result) {
    fse.ensureDirSync(path.dirname(outputFile));
    fse.writeFileSync(outputFile + '.map', result.map, 'utf-8');
    fse.writeFileSync(outputFile, result.css, 'utf-8');
  });
};

var startBrowserSync = function (baseDir) {
  var defaultFile = 'index.html'

  return browserSync({
    server: {
      baseDir: baseDir,
      middleware: function(req, res, next) {
        var fileName = url.parse(req.url);
        fileName = fileName.href.split(fileName.search).join('');
        var extension = path.extname(fileName);

        if (!extension) {
            req.url = '/' + defaultFile;
        }
        return next();
      }
    },
    startPath: '/',
    browser: 'default'
  });
};

gulp.task('test', function (done) {
  var options = {
    configFile: path.resolve('karma.conf.js'),
    singleRun: true,
    browsers: ['PhantomJS']
  };
  runKarma(options, done);
});

gulp.task('lint', function () {
  return gulp.src(jsPaths)
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

gulp.task('reload', function () {
  return browserSync.reload();
});

gulp.task('reload:styles', ['styles'], function () {
  return browserSync.reload('*.css');
});

gulp.task('scripts', ['reload'], function (done) {
  runSequence('lint', 'test', done);
});

gulp.task('styles', function (done) {
  compileLess({
    from: 'src/main.less',
    to: '.tmp/main.css',
    base: 'src',
    embedErrors: true,
    csswring: {
      removeAllComments: true
    },
    autoprefixer: {
      browsers: supportedBrowsers
    }
  }).then(done, done);
});

gulp.task('serve', ['styles'], function () {
  startBrowserSync(['.tmp', 'src']);
});

gulp.task('watch', ['serve'], function () {
  gulp.watch(jsPaths, ['lint', 'scripts']);
  gulp.watch(['src/**/*.less'], ['reload:styles']);
  gulp.watch(['src/**/*.html', '!index.html'], ['reload']);
});

gulp.task('default', ['watch']);

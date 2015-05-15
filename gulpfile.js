var gulp = require('gulp');
var gutil = require('gulp-util');
var open = require('gulp-open');
var karma = require('gulp-karma');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var connect = require('gulp-connect');
var frontMatter = require('gulp-front-matter');
var markdown = require('gulp-markdown');
var mustache = require('./tasks/mustache');
var partialise = require('./tasks/partialise');
var runSequence = require('run-sequence');
var replace = require('gulp-replace');
var del = require('del');

var paths = {
  docs: './docs/**/*.md',
  templates: './lib/templates/**/*.mustache',
  scripts: 'lib/**/*.js',
  tests: 'test/**/*.js',
  styles: [
    './node_modules/bootstrap/dist/css/**/*.css',
    './node_modules/highlight/lib/vendor/highlight.js/styles/default.css'
  ],
  serveBase: './.tmp'
};

var config = {
  port: 3000
};

//FIXME: these are included here and in karma.conf.js
var testDeps = [
  'node_modules/hogan.js/dist/hogan-3.0.2.js',
  'node_modules/phantomjs-polyfill/bind-polyfill.js',
  'lib/templates/**/*.mustache'
];

gulp.task('jasmine', function() {
  return gulp.src([paths.scripts, paths.tests].concat(testDeps))
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    })
});

//jshint is concerned with issues of code correctness
gulp.task('jshint', function() {
  return gulp.src([paths.scripts, paths.tests])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish')) //output in a pretty format
    .pipe(jshint.reporter('fail')) //fail the build on hint error
});

//jscs is concerned with rules relating to code style
gulp.task('jscs', function() {
  return gulp.src([paths.scripts, paths.tests])
    .pipe(jscs());
});


gulp.task('serve:js', function () {
  return gulp.src(paths.scripts)
    .pipe(gulp.dest(paths.serveBase))
    .pipe(connect.reload());
});

gulp.task('serve:css', function () {
  return gulp.src(paths.styles)
    .pipe(gulp.dest(paths.serveBase))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src(paths.templates)
    .pipe(partialise()) //generate partials object
    .pipe(gutil.buffer(function(err, files) {

      //with out partials object, parse the docs files
      var partials = JSON.parse(files[0].contents)

      gulp.src(paths.docs)
        .pipe(frontMatter({
          property: 'data',
          remove: true
        }))
        .pipe(markdown({}))
        //use replace to avoid: https://github.com/chjj/marked/issues/269
        .pipe(replace(/&gt;/g, ">"))
        .pipe(mustache({
          partials: partials
        }))
        .pipe(gulp.dest(paths.serveBase))
        .pipe(connect.reload());
    }));
});

gulp.task('serve:clean', function() {
  return del(paths.serveBase);
});

gulp.task('connect', function() {
  connect.server({
    root: paths.serveBase,
    livereload: true,
    port: config.port
  });
});

gulp.task('open', function(){
  gulp.src(paths.serveBase + '/index.html')
    .pipe(open('', {
      url: 'http://localhost:' + config.port,
    }));
});

gulp.task('watch', function () {
  gulp.watch([paths.templates], ['html']);
  gulp.watch([paths.docs], ['html']);
  gulp.watch([paths.scripts], ['serve:js']);
  gulp.watch([paths.scripts], ['serve:css']);
});

gulp.task('serve', function() {
  runSequence('serve:clean', ['serve:css', 'serve:js', 'html'], 'connect', ['open','watch']);
});

gulp.task('test', ['jshint', 'jscs', 'jasmine']);

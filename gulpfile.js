var karma = require('gulp-karma');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');

var scripts = [
  'lib/**/*.js',
  'test/**/*.js'
];

gulp.task('jasmine', function() {
  return gulp.src(scripts)
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
  return gulp.src(scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish')) //output in a pretty format
    .pipe(jshint.reporter('fail')) //fail the build on hint error
});

//jscs is concerned with rules relating to code style
gulp.task('jscs', function() {
  return gulp.src(scripts)
    .pipe(jscs());
});

//Master test task
gulp.task('test', ['jshint', 'jscs', 'jasmine']);

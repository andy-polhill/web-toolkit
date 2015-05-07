var gulp = require('gulp');
var karma = require('gulp-karma');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var connect = require('gulp-connect');
var markdown = require('gulp-markdown');
var runSequence = require('run-sequence');

var paths = {
  docs: './docs/**/*.md'
};

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

gulp.task('connect', function() {
  connect.server({
    root: '.tmp',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src(paths.docs)
    .pipe(markdown())
    .pipe(gulp.dest('.tmp'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch([paths.docs], ['html']);
});

//Master test task
gulp.task('serve', function() {
  runSequence('html', 'connect', 'watch');
});

gulp.task('test', ['jshint', 'jscs', 'jasmine']);

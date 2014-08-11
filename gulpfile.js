var gulp = require('gulp'); 
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var rimraf = require('gulp-rimraf');

gulp.task('copy-html-files', function() {
  gulp.src(['./app/**/*.html', '!./app/index.html'], {base: './app'})
    .pipe(gulp.dest('build/'));
});

gulp.task('copy-img-folder', function(){
  gulp.src(['./app/img/*.*'], {base: './app'}).pipe(gulp.dest('build/assets/'));
});

gulp.task('usemin', function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat', rev()],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'app/'
  });
});

gulp.task('runbuild', function(){
  connect.server({
    root: 'build/'
  });
});

// Default Task
gulp.task('default', ['connect']);
gulp.task('build', ['copy-html-files', 'copy-img-folder', 'usemin']);

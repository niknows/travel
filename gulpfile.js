//selected modules
var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/style.css')
  .pipe(browserSync.stream());
});

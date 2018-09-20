//selected modules
var gulp = require('gulp'),
    browserSync = require('browser-sync').create();
//gulp needs a default task to start working
//task name + what this task does
gulp.task('default',function(){
	console.log("Hello, this is a  gulp task");
});

gulp.task("html",function(){
	console.log("Hello world");
});

gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/style.css')
  .pipe(browserSync.stream());
});

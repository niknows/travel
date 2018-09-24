/*WATCH TASKS*/
var gulp = require('gulp'),
watch = require('gulp-watch'), //monitor files and directories
browserSync = require('browser-sync').create();

//watches for changes in index.html
gulp.task('watch', function(){

  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });

	watch('./app/index.html', function(){
		browserSync.reload();
	});
//watches for any css file changes from any directory within /styles
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
  });
});
gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/style.css')
  .pipe(browserSync.stream());
});

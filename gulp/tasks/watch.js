watch = require('gulp-watch'), //monitor files and directories

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

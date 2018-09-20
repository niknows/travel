//selected modules
var gulp = require('gulp'),
    watch = require('gulp-watch'), //monitor files and directories
    postcss = require('gulp-postcss'), //css preprocessor
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'), //css variables support
    nested = require('postcss-nested'), //enables nested css syntax
    cssImport = require('postcss-import'), //watches for @import flag and injects the model content inside the main css file
    browserSync = require('browser-sync').create();
//gulp needs a default task to start working
//task name + what this task does
gulp.task('default',function(){
	console.log("Hello, this is a  gulp task");
});

gulp.task("html",function(){
	console.log("Hello world");
});


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

//selected modules
var gulp = require('gulp'),
    watch = require('gulp-watch'), //monitor files and directories
    postcss = require('gulp-postcss'), //css preprocessor
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'), //css variables support
    nested = require('postcss-nested'), //enables nested css syntax
    cssImport = require('postcss-import'); //watches for @import flag and injects the model content inside the main css file

//gulp needs a default task to start working
//task name + what this task does
gulp.task('default',function(){
	console.log("Hello, this is a  gulp task");
});

gulp.task("html",function(){
	console.log("Hello world");
});

gulp.task("styles", function(){
  //get info from file
	return gulp.src('./app/assets/styles/style.css')
  //applies postcss filters
  .pipe(postcss([cssImport , cssvars, nested, autoprefixer])) //postcss modules
  //create a new file containing filtered data
  .pipe(gulp.dest('./app/temp/styles'));
});

//watches for changes in index.html
gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
//watches for any css file changes from any directory within /styles
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
});

});

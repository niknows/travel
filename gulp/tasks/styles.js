/*POST CSS FILTERS*/
var gulp = require('gulp'),
    postcss = require('gulp-postcss'), //css preprocessor
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'), //css variables support
    nested = require('postcss-nested'), //enables nested css syntax
    cssImport = require('postcss-import'), //watches for @import flag and injects the model content inside the main css file
    mixins = require('postcss-mixins');
gulp.task("styles", function(){
  //get info from file
	return gulp.src('./app/assets/styles/style.css')
  //applies postcss filters
  .pipe(postcss([cssImport , mixins, cssvars, nested, autoprefixer])) //postcss modules
  //create a new file containing filtered data
  .on('error',function(errorInfo){
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task("styles", function(){
  //get info from file
	return gulp.src('./app/assets/styles/style.css')
  //applies postcss filters
  .pipe(postcss([cssImport , cssvars, nested, autoprefixer])) //postcss modules
  //create a new file containing filtered data
  .pipe(gulp.dest('./app/temp/styles'));
});

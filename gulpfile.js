var gulp = require('gulp'),
    watch = require('gulp-watch');

//gulp needs a default task to start working
//task name + what this task does
gulp.task('default',function(){
	console.log("Hello, this is a  gulp task");
});

gulp.task("html",function(){
	console.log("Hello world");
});

gulp.task("styles", function(){
	console.log("CSS TASK");
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('html');	
});

});

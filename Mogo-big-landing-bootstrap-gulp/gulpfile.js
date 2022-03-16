const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
	return gulp.src('./style/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function (){
	gulp.watch('./style/**/*.scss', ['sass']);
});



var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');

gulp.task('html', function() {
	console.log("not too useful html");
});


gulp.task('styles', function() {
	return gulp.src('./assets/styles/index.css')
		.pipe(postcss([cssImport, nested, autoprefixer]))
		.pipe(gulp.dest('./src/temp/styles/'));
});

gulp.task('watch', function() {

    watch('./public/index.html', function() {
		gulp.start('html');
	});
	watch('./assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});
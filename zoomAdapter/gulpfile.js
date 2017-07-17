var gulp = require('gulp'),
		postcss = require('gulp-postcss'),
		autoprefixer = require('autoprefixer'),
		cssnano = require('cssnano'),
		rename = require('gulp-rename'),
		plumber = require('gulp-plumber');

gulp.task('css', function(){
	return gulp.src('./css/main.css')
		//.pipe(plumber())
		.pipe(postcss([
			autoprefixer(),
			cssnano
			]))
		.on('error', function(err){
			console.log(err.name, err.reason, err.line, err.column);
			this.emit('end');
		})
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
	gulp.watch('css/main.css', ['css']);
});

gulp.task('default', ['css', 'watch']);

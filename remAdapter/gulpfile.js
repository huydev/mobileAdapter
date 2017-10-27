var gulp = require('gulp');
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem');
var connect = require('gulp-connect');
var rename = require('gulp-rename');

//创建watch任务去检测html文件,其定义了当html改动之后，去调用一个Gulp的Task
gulp.task('watch', function () {
  gulp.watch(['./index.html'], ['html']);
  gulp.watch(['./css/main.css'], ['css']);
});
//使用postcss px2rem 得到rem
gulp.task('css', function() {
    var processors = [px2rem({remUnit: 64})];
    return gulp.src('./css/main.css')
        .pipe(postcss(processors))
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest('./css'));
});
//使用connect启动一个Web服务器
gulp.task('connect',function(){
	connect.server({
		root:'./',
		port:'8000',
		livereload: true
	})
});
//html任务
gulp.task('html',function(){
	gulp.src('./index.html')
	.pipe(connect.reload());
});

//运行gulp 默认的Task
gulp.task('default',['css', 'connect','watch'])
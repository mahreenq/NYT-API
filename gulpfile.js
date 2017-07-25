var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglifycss = require('gulp-uglifycss');

var uglify = require('gulp-uglify');
 var pump = require('pump');





gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./*').on('change', browserSync.reload);

});



gulp.task('sass', function () {
  return gulp.src('comp/scssfiles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('./dist'));
});


gulp.task('compress', function (cb) {

    return gulp.src('comp/javascriptfiles/*.js')
    .pipe(concat('main.js'))
    .pipe (uglify())
    .pipe(gulp.dest('./dist'));

});

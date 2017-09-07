var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    jsmin = require('gulp-jsmin');

gulp.task('less', function () {

    return gulp.src('./src/*.less')
        .pipe(less().on('error', function (err) {
            console.log(err);
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(gulp.dest('./docs/app/angular-virtual-select'))
        .pipe(cssmin().on('error', function(err) {
            console.log(err);
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'))
        .pipe(gulp.dest('./docs/app/angular-virtual-select'));
});

gulp.task('js', function () {
    gulp.src('src/*.js')
        .pipe(gulp.dest('./dist/'))
        .pipe(gulp.dest('./docs/app/angular-virtual-select'))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'))
        .pipe(gulp.dest('./docs/app/angular-virtual-select'));
});

gulp.task('default', ['less', 'js']);
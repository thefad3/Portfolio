var gulp = require('gulp'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint');


gulp.task('default', function() {
});

gulp.task('start', function () {
    nodemon({
        script: 'app.js'
        , ext: 'js html handlebars'
        , env: { 'NODE_ENV': 'development' }
    })
});


gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
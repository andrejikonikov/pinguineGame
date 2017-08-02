var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
        livereload: true
    });
});
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default', ['webserver'], function() {
    gulp.watch('sass/**/*.scss',['styles']);
} );

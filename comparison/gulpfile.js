const gulp = require('gulp');
const shell = require('shelljs');

gulp.task('clean', () => shell.rm('-rf', 'dest'));

gulp.task('copy', ['clean'], () => {
    return gulp.src('epubs/**')
        .pipe(gulp.dest('dest/'));
});

gulp.task('default', ['copy']);
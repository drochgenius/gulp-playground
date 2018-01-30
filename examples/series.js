const gulp = require('gulp');
const { promisify } = require('util');
require('gulp-graph')(gulp);


const sleep = promisify(setTimeout);

gulp.task('init', () => {
});

gulp.task('A', ['init'], async () => {
    await sleep(2000);
});

gulp.task('B', ['A'], async () => {
    await sleep(1000);
});


gulp.task('C', ['B'], async () => {
    await sleep(1500);
});


gulp.task('D', ['C'], async () => {
    await sleep(500);
});


gulp.task('E', ['D'], async () => {
    await sleep(100);
});


gulp.task('default', ['E']);
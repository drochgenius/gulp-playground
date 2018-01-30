const gulp = require('gulp');
const { promisify } = require('util');
require('gulp-graph')(gulp);


const sleep = promisify(setTimeout);


const someArrayOfParams = [1, 2, 3, 4, 5, 6, 7, 8];

gulp.task('init', () => {
});

gulp.task('A', ['init'], async () => {
    await sleep(2000);
});

gulp.task('B', ['A'], async () => {
    await sleep(1000);
});


someArrayOfParams.forEach(param => {
    gulp.task(`C-${param}`, ['B'], async () => {
        console.log('p', param);
        await sleep(1500);
    });
});


gulp.task('D', someArrayOfParams.map(p => `C-${p}`), async () => {
    await sleep(500);
});


gulp.task('E', ['D'], async () => {
    await sleep(100);
});


gulp.task('default', ['E']);
const gulp = require('gulp');
const { promisify } = require('util');

const sleep = promisify(setTimeout);

gulp.task('A', async () =>{
    await sleep(2000);
});

gulp.task('B', async () =>{
    await sleep(1000);
});


gulp.task('C', async () =>{
    await sleep(1500);
});


gulp.task('D', async () =>{
    await sleep(500);
});


gulp.task('E', async () =>{
    await sleep(100);
});


gulp.task('default', ['A','B','C','D','E']);

var gulp = require('gulp');
// npm i browser-sync
/*实时监测 浏览器实时变化*/
var browserSync = require('browser-sync');
gulp.task('browser-sync', function() {
    var files = [
        'demo/**/*.html',
        'demo/style/**/*.css',
        'demo/js/**/*.js',
        'demo/images/**/*.{png,jpg,jpeg,svg,gif,ico}'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './demo/'
        }
    });
});

gulp.task('browser-sync-2', function() {
    var files = [
        'old/**/*.html',
        'old/css/**/*.css',
        'old/js/**/*.js',
        'old/images/**/*.{png,jpg,jpeg,svg,gif,ico}'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './old/'
        }
    });
});

// gulp.task('html', function() {
//     return gulp.src('./*.html')
//         //.pipe(gulp.dest('dist'))
//         .pipe(browserSync.reload({
//             stream: true
//         }));
// });
// gulp.watch("./*.html", ['html']);


// gulp.task('css', function() {
//     return gulp.src('./css/*.css')
//         //.pipe(gulp.dest('dist'))
//         .pipe(browserSync.reload({
//             stream: true
//         }));
// });
// gulp.watch("./*.html", ['html']);


gulp.task('default',['browser-sync']);
gulp.task('dev',['browser-sync-2']);

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('MainStyle', defaultTask);

function defaultTask(done) {
    gulp.src('css/MainStyle.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('prefixer'))
    done();
}


'use strict';

const
  gulp = require('gulp'),
  sass = require('gulp-sass');


gulp.task('styles', () => {
  gulp.src('sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/'));
});

gulp.task('default', () => gulp.watch('sass/*.sass',['styles']));

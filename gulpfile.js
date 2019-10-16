const gulp = require('gulp');
const scssCombine = require('gulp-scss-combine');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const libName = require('./package.json').style[0];

gulp.task('default', () => {
  return gulp.src(`./src/scss/${libName}`)
  .pipe(concat(`${libName.slice(1)}`))
  .pipe(scssCombine())
  .pipe(rename(libName))
  .pipe(gulp.dest('./dist'))
});

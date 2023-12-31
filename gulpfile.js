const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const minify = require('gulp-minify');

function styles(){
  return gulp.src("./src/styles/*.scss")
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(gulp.dest("./dist/css"))
}

function images(){
  return gulp.src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"))
}

function minjs(){
  return gulp.src('./src/scripts/*.js')
    .pipe(minify())
    .pipe(gulp.dest('./dist/scripts'))
}

exports.default = gulp.parallel(styles,images,minjs);
exports.watch = function(){
  gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
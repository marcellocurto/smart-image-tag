// Load Gulp
let gulp = require('gulp');

// CSS related plugins
let sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

// JS related plugins
let concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  stripDebug = require('gulp-strip-debug');

// Utility plugins
// gulp --production for production ready JS, without console log
let rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  options = require('gulp-options'),
  gulpif = require('gulp-if');

// Project related variables
let dist = './assets/',
  styleSRC = './src/scss/smartimagetag.scss',
  scriptPath = './src/js/',
  scriptSRC = [
    scriptPath + 'image-upload.js',
    scriptPath + 'namethatcolor.js',
  ],
  styleWatch = './src/scss/**/*.scss',
  scriptWatch = './src/js/**/*.js';

function css(cb) {
  gulp.src(styleSRC)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed',
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dist));
  cb();
};

function javascript(cb) {
  gulp.src(scriptSRC)
    .pipe(concat('smartimagetag.min.js'))
    .pipe(gulpif(options.has('production'), stripDebug()))
    // .pipe(uglify())
    .pipe(gulp.dest(dist));
  cb();
};

function watch(cb) {
  gulp.watch(styleWatch, css);
  gulp.watch(scriptWatch, javascript);
  cb();
};

exports.css = css;
exports.javascript = javascript;
exports.watch = watch;

let build = gulp.parallel([watch, css, javascript]);
gulp.task('default', build);

"use strict";

// load plugins
const browsersync = require('browser-sync').create();
const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./_site/"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// clean
function clean() {
  return del(['dist']);
}

const paths = {
  css: {
    src: 'scss/*.scss',
    dest: 'css/'
  }
};

// CSS task
function css() {
  return gulp
    .src(paths.css.src, { sourcemaps: true })
    .pipe(sass())
    .pipe(gulp.dest(paths.css.dest))
    .pipe(browsersync.stream());
}

// watch files
function watchFiles() {
  gulp.watch(paths.css.src, css);
}

// define complex tasks
const build = gulp.series(clean, css);
const watch = gulp.parallel(watchFiles, browserSync);

// export tasks
exports.css = css;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = build;

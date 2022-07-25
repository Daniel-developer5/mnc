const
  gulp = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  browserSync = require('browser-sync').create()

const style = () => {
  return gulp.src('./scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

const watch = () => {
  browserSync.init({
    server: {
      baseDir: './',
    }
  })

  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch

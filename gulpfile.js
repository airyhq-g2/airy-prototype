const gulp = require('gulp')
const browserSync = require('browser-sync')

const reload = browserSync.reload

gulp.task('server', () => {
  browserSync({ server: { baseDir: 'src' } })
  gulp.watch(['*.html', 'static/css/*.css'], { cwd: 'src' }, reload)
})

gulp.task('default', ['server'])
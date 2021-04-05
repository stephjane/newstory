let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
 
gulp.task('css', done => {
  gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
  done();
});

gulp.task('default', gulp.parallel(
      'css'
)
);
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

var paths = {
  less: './less/main.less',
  css: './css'
};

gulp.task('less', function () {
  return gulp.src(paths.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function(){
  gulp.watch(paths.less, ['less']);
});

gulp.task('default', ['watch']);

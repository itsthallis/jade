var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('templates', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./lib/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['templates']);
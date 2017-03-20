var gulp = require('gulp');

gulp.task('scripts', function(){
  return { src: [
     'node_modules/angular2/bundles/angular2-polyfills.js', 
     'node_modules/parse/dist/parse.min.js'] 
   };
});

gulp.task('default', ['scripts']);
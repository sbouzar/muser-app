var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');

// SERVER
gulp.task('clean', function() {
  return del('dist')
});

gulp.task('build:server', function() {
  var tsProject = ts.createProject('server/tsconfig.json');
  var tsResult = gulp.src('server/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(tsProject())
  return tsResult.js
    //.pipe(concat('server.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
});

// MOMENT
gulp.task('build:moment', function () {
  return gulp.src('typings/browser/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      out: 'moment.js'
    }))
    .pipe(gulp.dest('dist/libs'));
});

// CLIENT

/*
  jsNPMDependencies, sometimes order matters here! so becareful!
*/
var jsNPMDependencies = [
  'moment/moment.js',
  'systemjs/dist/system.src.js',
  'rxjs/bundles/Rx.js',
  'ng2-bootstrap/bundles/ng2-bootstrap.min.js'
]

gulp.task('build:index', function() {
  var mappedPaths = jsNPMDependencies.map(file => {
    return path.resolve('node_modules', file)
  })

  //Let's copy our head dependencies into a dist/libs
  var copyJsNPMDependencies = gulp.src(mappedPaths, {
      base: 'node_modules'
    })
    .pipe(gulp.dest('dist/libs'))

  //Let's copy our index into dist   
  var copyIndex = gulp.src('client/index.html')
    .pipe(gulp.dest('dist'))
  var copyStyles = gulp.src('client/app/css/*.css')
    .pipe(gulp.dest('dist/app/css'))
  var copyFonts = gulp.src('client/app/fonts/*')
    .pipe(gulp.dest('dist/app/fonts'))
  var copyImages = gulp.src('client/app/images/*')
    .pipe(gulp.dest('dist/app/images'))
  var copyViews = gulp.src('client/app/components/views/*.html')
    .pipe(gulp.dest('dist/app/components/views'))

  return [copyJsNPMDependencies, copyIndex, copyStyles, copyFonts, copyImages, copyViews];
});

gulp.task('build:app', function() {
  var tsProject = ts.createProject('client/tsconfig.json');
  var tsResult = gulp.src('client/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(tsProject())
  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
});


gulp.task('build', function(callback) {
  runSequence('clean', 'build:server', 'build:moment', 'build:index', 'build:app', callback);
});

gulp.task('default', ['build']);
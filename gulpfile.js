var gulp = require('gulp');
var fs = require("fs");
var browserify = require("browserify");
gulp.task('default', function() {
  // place code for your default task here
    return   browserify("./source/main.js").transform("babelify", {presets: ["es2015", "react"]})
            .bundle()
            .pipe(fs.createWriteStream("./bundle.js"));
});

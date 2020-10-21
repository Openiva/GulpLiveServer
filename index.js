var gulp = require("gulp"); 

function processHTML() {
    return gulp.src("src/html/**/*.html")
        .pipe(gulp.dest("dist/"))
        .pipe(connect.reload()); 
}
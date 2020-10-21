var sass = require("gulp-sass"); //imports sass

function processSass() { //chews through sass and prints out css(task function)
    return gulp.src("src/sass/**/*.scss") //returns a promise and looks in all folders under sass
        .pipe(sass()) //preprocessor
        .pipe(cleanCss({
            compatibility: "ie8"
        })) //minify css
        .pipe(gulp.dest("dist/assets/css")) //prints to css
        .pipe(connect.reload()); //reloads liveserver 
}
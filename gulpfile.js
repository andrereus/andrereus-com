var gulp = require("gulp"),
    del = require("del"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    rename = require("gulp-rename"),
    cleancss = require("gulp-clean-css"),
    sourcemaps = require("gulp-sourcemaps"),
    browsersync = require("browser-sync").create(),
    tasklisting = require("gulp-task-listing");

// Build tasks

gulp.task("clean:build", function () {
    return del("docs/**/*");
});

gulp.task("build:css", function () {
    return gulp.src("app/code/scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({browsers: ["IE >= 9"]}))
    .pipe(gulp.dest("app/code/css"))
    .pipe(rename({suffix: ".min"}))
    .pipe(cleancss({compatibility: "*"}))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("app/code/css"));
});

gulp.task("build", ["clean:build", "build:css"], function () {
    return gulp.src(["app/**", "!app/code/{scss,scss/**}"])
    .pipe(gulp.dest("docs"));
});

// Serve tasks

gulp.task("reload:css", ["build:css"], function (done) {
    browsersync.reload();
    done();
});

gulp.task("serve:build", function () {
    browsersync.init({
        server: {
            baseDir: "docs"
        },
        notify: false
    });
});

gulp.task("serve", ["build:css"], function () {
    browsersync.init({
        server: {
            baseDir: "app"
        },
        notify: false
    });

    gulp.watch("app/code/scss/**/*.scss", ["reload:css"]);
    gulp.watch(["**/*", "!node_modules/**", "!app/code/scss/**/*.scss"])
    .on("change", browsersync.reload);
});

// Default task

gulp.task("default", tasklisting);

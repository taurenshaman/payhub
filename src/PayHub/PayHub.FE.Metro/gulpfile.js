"use strict";

// 1. https://www.meziantou.net/compiling-typescript-using-gulp-in-visual-studio.htm
// 2. terser is better for gulp-uglify or gulp-uglify-es:
// https://stackoverflow.com/questions/38886840/how-to-solve-this-minification-error-on-gulp/38886965#38886965

const { watch, src, dest, series } = require('gulp');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const ts = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');

var tsProject;

// gulp v3: https://www.meziantou.net/compiling-typescript-using-gulp-in-visual-studio.htm
//function compileTS() {
//    if (!tsProject) {
//        tsProject = ts.createProject("tsconfig.json");
//    }

//    var reporter = ts.reporter.fullReporter();
//    var tsResult = tsProject.src()
//        .pipe(sourcemaps.init())
//        .pipe(tsProject(reporter));

//    return tsResult.js
//        .pipe(sourcemaps.write())
//        .pipe(dest("./"));
//}

function minify(cb) {
    //var contact = src(["wwwroot/js/contact.js"])
    //    .pipe(uglify())
    //    .pipe(concat("contact.min.js"))
    //    .pipe(dest("wwwroot/lib/site"));
    //var site = src(["wwwroot/js/*.js", '!wwwroot/js/tour*.js', '!wwwroot/js/contact.js'])
    //    .pipe(uglify())
    //    .pipe(concat("wilderblog.min.js"))
    //    .pipe(dest("wwwroot/lib/site"));
    //return merge(site, contact);

    var site = src(["./js/payhub.js"])
        .pipe(terser())
        //.pipe(concat("wilderblog.min.js"))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest("./js"));
    return site;
}

//exports.compileTS = compileTS;
//exports.clean = clean;
exports.minify = minify;
exports.default = function () {
    //watch('src/*.css', css);
    watch(["./js/payhub.js"], series(minify));
};

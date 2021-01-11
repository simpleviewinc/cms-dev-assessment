const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const uglifysass = require('gulp-uglifycss');
const del = require('del');
const fs = require('fs');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const register = require('@babel/register');
const mode = require('gulp-mode')({
    modes: ['production', 'development'],
    default: 'development',
    verbose: false
});
const rename = require('gulp-rename');
const polyfill = 'node_modules/@babel/polyfill/dist/polyfill.min.js';

const config = {
    bundleSrc: [polyfill, 'src/scripts/dependencies/*.js', 'src/scripts/sources/libs/*.js', 'src/scripts/sources/bundle/*.js'],
    perPageScripts: 'src/scripts/sources/',
    sassBundleSrc: 'src/sass/**/*.scss',
};

const watchSource = {
    bundle: ['src/scripts/dependencies/*.js', 'src/scripts/sources/libs/*.js', 'src/scripts/sources/bundle/*.js'],
    pageScripts: ['src/scripts/sources/*/*.js', '!src/scripts/sources/libs/*.js', '!src/scripts/sources/bundle/*.js'],
    sass: config.sassBundleSrc
};

const delConfig = {
    all: ['dist/scripts/*.js', 'dist/styles/*.css'],
    bundle: 'dist/scripts/bundle.min.js',
    pageScripts: ['dist/scripts/*.js', '!dist/scripts/bundle.min.js'],
    sass: 'dist/styles/bundle.min.css'
};

const build = gulp.series(cleanAll(), gulp.parallel(buildBundle, buildPageScripts, buildSass), cb => {
    console.log('----- Build finished -----');

    cb();
});

function cleanBundle() {
    return del(delConfig.bundle);
}

function cleanPageScripts() {
    return del(delConfig.pageScripts);
}

function cleanSass() {
    return del(delConfig.sass);
}

function cleanAll() {
    return gulp.parallel(
        cleanBundle,
        cleanPageScripts,
        cleanSass
    );    
}

function buildBundle() {
    return gulp.src(config.bundleSrc)
        .pipe(babel())
        .on('error', console.error.bind(console))
        .pipe(mode.production(uglify()))
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest('dist/scripts'));
}

function buildPageScripts(cb) {
    let gulpStreams = [];
    
    fs.readdir(config.perPageScripts, function (err, items) {
        items.map(function (item) {
            if (fs.lstatSync(`${config.perPageScripts}${item}`).isDirectory()) {
                if (item !== 'bundle' && item !== 'themes' && item !== 'libs') {
                    gulp.src(`${config.perPageScripts}${item}/*.js`)
                        .pipe(babel())
                        .on('error', console.error.bind(console))
                        .pipe(mode.production(uglify()))
                        .pipe(rename(path => {
                            path.dirname = '';
                        }))
                        .pipe(gulp.dest('dist/scripts'));
                }

            } else {
                gulp.src(`${config.perPageScripts}${item}`)
                    .pipe(babel())
                    .on('error', console.error.bind(console))
                    .pipe(mode.production(uglify()))
                    .pipe(gulp.dest('dist/scripts'));
            }
        });
    });

    Promise.all(gulpStreams).then(streams => { cb(); });
}

function buildSass() {
    return gulp.src(config.sassBundleSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(mode.production(uglifysass({
            "uglyComments": true
        })))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(concat('bundle.min.css'))
        .pipe(gulp.dest('dist/styles'));
}

function complete(cb) {
    console.log('----- task complete -----');

    cb();
}

function watch() {
    // watch scripts bundle
    gulp.watch(watchSource.bundle, gulp.series(cleanBundle, buildBundle, complete));

    // watch page scripts
    gulp.watch(watchSource.pageScripts, gulp.series(cleanPageScripts, buildPageScripts, complete));

    // watch sass
    gulp.watch(watchSource.sass, gulp.series(cleanSass, buildSass, complete))
}

exports.clean = cleanAll();
exports.build = build;
exports.watch = watch;

// default task
exports.default = build;
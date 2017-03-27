var gulp = require('gulp')
    stylus = require('gulp-stylus')
    sourcemaps = require('gulp-sourcemaps')
    debug = require('gulp-debug')
    notify = require('gulp-notify')
    autoprefixer = require('gulp-autoprefixer')
    browserSync = require('browser-sync').create()
    pug = require('gulp-pug')
    concat = require('gulp-concat') // Подключаем gulp-concat (для конкатенации файлов)
    uglify = require('gulp-uglifyjs') // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano = require('gulp-cssnano') // Подключаем пакет для минификации CSS
    rename = require('gulp-rename') // Подключаем библиотеку для переименования файлов
    del = require('del') // Подключаем библиотеку для удаления файлов и папок
    imagemin = require('gulp-imagemin') // Подключаем библиотеку для работы с изображениями
    pngquant = require('imagemin-pngquant') // Подключаем библиотеку для работы с png
    cache = require('gulp-cache') // Подключаем библиотеку кеширования
    newer = require('gulp-newer') // смотрит за файлом, и пропускает его дальше, только если он изменен

gulp.task('stylus', function(){
  return gulp.src('app/stylus/*.styl', {since: gulp.lastRun('stylus')})
    .pipe(debug({title: 'src'}))
    .pipe(sourcemaps.init()) 
    .pipe(stylus({
        'include css': true
        }))
    .pipe(debug({title: 'stylus'}))
    .on('error', notify.onError(function(err) {
            return {
                title: 'Styles',
                message: err.message
            };
    }))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })).pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/css'))
});

gulp.task('libcss', function(){
    return gulp.src('app/libs/magnific-popup/dist/magnific-popup.css', {since: gulp.lastRun('libcss')})
        .pipe(debug({titile: 'libcss_src'}))
        .pipe(cssnano())
        .pipe(rename('libs.min.css'))
        .pipe(gulp.dest('dist'))
})

gulp.task('css-min', gulp.series('stylus', function() {
    return gulp.src(['!app/css/*.min.css', 'app/css/*.css'], {since: gulp.lastRun('css-min')}) // Выбираем файл для минификации
        .pipe(debug({title: 'min-src'}))
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(newer('dist'))      
        .pipe(debug({title: 'rename'}))
        .pipe(gulp.dest('dist')); // Выгружаем в папку app/css
}));


gulp.task('pug', function buildHTML(){
    return gulp.src('app/pug/index.pug', {since: gulp.lastRun('pug')})
        .pipe(debug({title: 'src'}))
        .pipe(pug({
            pretty: true,
        }))
        .pipe(debug({title: 'dist'}))
        .pipe(gulp.dest('dist'))
});

gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
        'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js' // Берем Magnific Popup
        ], {since: gulp.lastRun('scripts')})
        .pipe(debug({title: 'script'}))
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(debug({title: 'dist'}))
        .pipe(gulp.dest('dist')); // Выгружаем в папку app/js
});

gulp.task('jscript', function() {
    return gulp.src('app/js', {since: gulp.lastRun('jscript')})
        .pipe(newer('dist/js'))
        .pipe(debug({title: 'js_src'}))
        .pipe(uglify())    
        .pipe(gulp.dest('dist/js'))
})

gulp.task('img', function() {
    return gulp.src('app/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(debug({title: 'copy_img'}))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('build', function() {

    var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(newer('dist/fonts'))
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('clear', function () {
    return cache.clearAll();
})

gulp.task('browser-sync', function(){
    browserSync.init({
        server: 'app'
        });
    browserSync.watch('app/**/*.*').on('change', browserSync.reload)
});

gulp.task('watch', function() { // включаем brsync,stylus до выполнения watch
    gulp.watch('app/stylus/**/*.styl', gulp.series('css-min')); // наблюдение за stylus файлами
    gulp.watch('app/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('app/js/**/*.*', gulp.series('jscript'))
    gulp.watch(['app/fonts/**/*.*','app/js/**/*.*'], gulp.series('build'))
    gulp.watch('app/img/**/*.*', gulp.series('img'))

});

gulp.task('preload', gulp.parallel('clear', 'clean', 'libcss', 'scripts'))

gulp.task('default',
    gulp.series('preload', 'build', gulp.parallel('watch', 'browser-sync')))





const { src,dest,watch } = require("gulp")
const sass = require("gulp-sass")

function watchBuildScssTask(cb){
    console.log("启动Scss转CSS的监听...")
    watch(['src/**/*.scss'],{}, buildScssTask);
}

function buildScssTask(cb) {   
    return src('src/**/*.scss')
        .pipe(sass())
        .pipe(dest('./../../dist/css/'))
}

exports.dev = watchBuildScssTask
exports.default = buildScssTask
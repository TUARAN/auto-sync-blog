const fs = require('fs');
const BASE_DATA = require("../common/base"); // 静态变量
const {
    downloadLocalFile,
    mkdirsSync,
} = require('../common/FileUtils');

// 创建 README 文件
const initREADME = (readmeRes) => {
    fs.writeFileSync(BASE_DATA.README_FILE_PATH, readmeRes, (err) => { // 重写该文档（appendFile是追加并不存在就直接创建）
        if (err) throw err;
        console.log('写入成功' + BASE_DATA.README_FILE_PATH);
    })
}

// 创建 config 文件
const initConfig = (finalData) => {
    fs.writeFileSync(BASE_DATA.CONFIG_FILE_PATH, finalData, (err) => { // 重写该文档（appendFile是追加并不存在就直接创建）
        if (err) throw err;
        console.log('写入成功' + filePath);
    })

}
const init = (vuepressInfo) => {
    var isMkdir = mkdirsSync(BASE_DATA.VUEPRESS_PUBLIC_PATH); // 先把文件夹创建好
    if (!isMkdir) {
        console.log('新建文件夹有误！');
        return;
    }
    const {
        config,
        readME,
    } = vuepressInfo;
    initConfig(config);
    initREADME(readME);
}

module.exports = {
    init,
}
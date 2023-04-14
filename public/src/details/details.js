/** 
 * 解析模块
 */

const JUEJIN = require("./juejin/utils");
const VUEPRESS = require("./vuepress/utils");

function voidDetailsWork() {
    var {
        JUEJIN_ARTICLE_LIST, // 用户所有文章
        JUEJIN_COLUMN_MAP, // 用户所有专栏（key 专栏信息，value 对应文章列表）
        JUEJIN_USER_INFO, // 用户信息
        JUEJIN_HOT_COLUMN_MAP, // 获取强力推荐的专栏
    } = global;

    // 文章数据
    var articleMap = JUEJIN.getArticleMap(JUEJIN_ARTICLE_LIST);

    // 解析用户数据
    var userBean = JUEJIN.getUserInfo(JUEJIN_USER_INFO);

    // 专栏数据
    var articleColumnList = JUEJIN.getArticleColumnList(JUEJIN_COLUMN_MAP);

    // 推荐专栏
    // console.log("JUEJIN_HOT_COLUMN_MAP", JUEJIN_HOT_COLUMN_MAP)
    
    var articleHotColumnList = JUEJIN.getArticleColumnList(JUEJIN_HOT_COLUMN_MAP);
    // return
    // 统计数据
    var countMap = JUEJIN.getCountArticles(JUEJIN_ARTICLE_LIST, articleMap);

    // vuepressInfo
    var vuepressInfo = VUEPRESS.getVuepressInfo(userBean, articleMap, );

    // 存入全局
    global.JUEJIN_ARTICLE_YYYYMM_MAP = articleMap; // 所有文章（yymm分类）
    global.JUEJIN_USER_INFO = userBean; // 用户信息
    global.JUEJIN_ALL_COUNT_MAP = countMap; // 添加统计放全局
    global.JUEJIN_COLUMN_LIST = articleColumnList; // 用户所有专栏list（包括所有文章和统计文章数据情况）
    global.JUEJIN_HOT_COLUMN_LIST = articleHotColumnList; // 推荐专栏list（包括所有文章和统计文章数据情况）
    global.VUEPRESS_INFO = vuepressInfo; // vuepress 相关配置
}

module.exports = {
    voidDetailsWork,
}
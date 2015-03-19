/**
 * Created by Lorenzo on 2015/3/19.
 */

var tagChoice="title1";// 初始界面
// 点击标签 变色 加载图标
function tagClick(tag) {
    // tab背景样式改变
    $("#" + tagChoice).removeClass("selected");
    tagChoice = tag;
    $("#" + tagChoice).addClass("selected");
}
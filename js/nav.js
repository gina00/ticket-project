$(document).ready(function () {
    slide_menu();
});

function slide_menu() {
    var userUlClickIndex = 0;
    $("#slide_menu").click(function () {
        userUlClickIndex++;
        if (userUlClickIndex % 2 !== 0) {
            $(".left-nav").css("width", "70px");
            $(".page-content").css("width", "calc(100% - 71px)");
            $(".layui-nav-item a i[class^='icon-']").show().nextAll().hide();
            $(".layui-nav-child a").addClass("layui-reset-a");

            $("#slide_menu i").removeClass("layui-icon-shrink-right");
            $("#slide_menu i").addClass("layui-icon-spread-left");
        } else {
            $(".left-nav").css("width", "");
            $(".page-content").css("left", "");
            $(".page-content").css("width", "");
            $(".layui-nav-item a i[class^='icon-']").siblings().show();
            $(".layui-nav-child a").removeClass("layui-reset-a");

            $("#slide_menu i").removeClass("layui-icon-spread-left");
            $("#slide_menu i").addClass("layui-icon-shrink-right");
        }
    })
}
// iframe自适应高度
window.onresize = function () {
    reinitIframe();
}

function reinitIframe() {
    var iframe = document.getElementById("menuFrame");
    try {
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
        var height = Math.min(bHeight, dHeight);
        iframe.height = height;
        // console.log(iframe.height);
    } catch (ex) {}
}
// 定时触发
window.setInterval("reinitIframe()", 200);
$(document).ready(function () {
    slide_menu();
    hasChoose();
    showDownList()
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
    var iframe = document.getElementsByClassName("menuFrame");
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

function hasChoose() {
    var userUlClickIndex = 0;
    $(".hasChoose-ul li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    })
    $(".hasChoose-smallcheck-ul li").click(function () {
        userUlClickIndex++;
        if (userUlClickIndex % 2 !== 0) {
            $(this).addClass("selected");
        } else {
            $(this).removeClass("selected");
        }
    })
}

// 下拉列表
function showDownList() {
    var userUlClickIndex = 0;
    $('#downBtn').click(function (event) {
        //取消事件冒泡  
        event.stopPropagation();
        userUlClickIndex++;
        if (userUlClickIndex % 2 !== 0) {
            $(this).addClass("icon-up");
            $('#downlistPanel').show();
        } else {
            $(this).removeClass("icon-up");
            $('#downlistPanel').hide();
        }
        return false;
    });
    //点击空白处隐藏弹出层
    $(document).click(function (event) {
        var _con = $('#downlistPanel'); // 设置目标区域
        if (!_con.is(event.target) && _con.has(event.target).length === 0) {
            $("#downBtn").removeClass("icon-up");
            $('#downlistPanel').hide(); //淡出消失
        }
    });
}
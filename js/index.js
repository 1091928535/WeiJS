$(function() {

    //工具提示的初始化，自动生成的div继承了父亲的宽高，应该吧父元素的宽高设置为100%
    $('[data-toggle="tooltip"]').tooltip();
    // 当页面小于768时属于移动端，大于时属于非移动端
    //获取item的元素
    var items = $(".carousel-inner .item");
    //监听屏幕的大小
    $(window).on("resize", function() {
        var width = $(window).width();
        // console.log(width);
        if (width <= 768) {
            items.each(function(index, ele) {
                var item = $(this);
                var data = item.data("smallImage");
                item.html("<a href='javascript:;' class='mobileImg'> <img src='" + data + "' alt=''></a>")
            })
        } else {
            items.each(function(index, ele) {
                var item = $(this);
                var data = item.data("bigImage");
                item.html("<a href='javascript:;' class='pcImg'> <img src='" + data + "' alt=''></a>")
            })
        }
        //每次打开页面自动执行监听一次，不会让页面出现空白
    }).trigger("resize");

    //实现滑动操作
    var startX, endX, countX;
    var carousel = $(".carousel");
    //获取需要滑动的元素然后调用
    var carousel_inner = $(".carousel-inner");
    carousel_inner.on("touchstart", function(e) {
            startX = e.targetTouches[0].pageX;
        })
        //结束后没有手指，需要用changed
    carousel_inner.on("touchend", function(e) {
        endX = e.changedTouches[0].pageX;
        countX = endX - startX;
        if (countX > 0) {
            carousel.carousel('prev');
        } else {
            carousel.carousel('next');
        }
    })

    //获取li的值，把li的宽高给ul 
    var pNavUl = $(".nav-tabs");
    var pNavLi = pNavUl.find("li");
    var ulWidth = 0;
    pNavLi.each(function(index, ele) {
        ulWidth = ulWidth + $(ele).outerWidth(true);
    })
    pNavUl.width(ulWidth);

    //使用iscroll插件，让ul的父盒子实现滑动操作
    var myScroll = new IScroll('.wjs_pNav', {
        scrollX: true,
        scrollY: false
    });
});
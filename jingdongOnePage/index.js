$('#swiper').sliderImg({
    image: ['./image/pic1.jpg', './image/pic2.jpg', './image/pic3.jpg'],
    interVal: 2000,
});
$('#location').areaList({
    items: [
        { name: '北京', href: '#' },
        { name: '上海', href: '#' },
        { name: '杭州', href: '#' },
        { name: '广州', href: '#' },
        { name: '深圳', href: '#' },
        { name: '香港', href: '#' },
        { name: '澳门', href: '#' },
        { name: '云南', href: '#' },
        { name: '天津', href: '#' },
        { name: '河北', href: '#' },
        { name: '河南', href: '#' },
        { name: '江西', href: '#' },
        { name: '四川', href: '#' },
        { name: '武汉', href: '#' },
        { name: '湖南', href: '#' }
    ],
    rowNum: 5,//每一行显示数量
    nowItem: '北京',
    nowItemImg: './image/local.jpg'
})
//行
// $('#hang').dropList({

// });
//列
$('#lie').dropList({
    dirction: 'y',
    colNum: 2,
    LorR:'left',
    menuList: [{
        title: '找那个',
        items: [{ href: '#', name: '待处理订单' },
        { href: '#', name: '消息' },
        { href: '#', name: '返修退换货' },
        { href: '#', name: '我的问答' },
        { href: '#', name: '降价商品' },
        { href: '#', name: '我的关注' }]
    }, {
        title: '',
        items: [{ href: '#', name: '我的京豆' },
        { href: '#', name: '我的优惠券' },
        { href: '#', name: '我的白条' },
        { href: '#', name: '我的理财' }]
    }]
})
$('#hang').dropList({
    dirction: 'x',
    colNum: 2,
    LorR:'left',
    menuList: [{
        title: '',
        items: [{ href: '#', name: '待处理订单' },
        { href: '#', name: '消息' },
        { href: '#', name: '返修退换货' },
        { href: '#', name: '我的问答' },
        { href: '#', name: '降价商品' },
        { href: '#', name: '我的关注' }]
    }, {
        title: '',
        items: [{ href: '#', name: '我的京豆' },
        { href: '#', name: '我的优惠券' },
        { href: '#', name: '我的白条' },
        { href: '#', name: '我的理财' }]
    }]
})



var index;
$('.cate_menu_item').hover(function () {
    $('.showmenu').css('display', 'block');
    index = $(this).attr('data-index');
    $('#cate_item' + index).css('display', 'block');
}, function () {
    $('.showmenu').css('display', 'none');
    $('#cate_item' + index).css('display', 'none');
})
//滑动动画
var t;
var flag = true;
$('.last ul .row1').hover(function () {
    var id = $(this).attr('id');
    $('.services_content .header .active').removeClass('active');
    $('.services_content .header .' + id + '_tab').addClass('active');
    if ((id == 'youxi' && flag == true) || id != 'youxi') {
        $('.bar').slideUp();
        $('.services_content').slideDown();
        $('.services_content .header .' + id + '_content').css('display', 'block');
        $('.' + $(this).attr('data') + '_content').show().siblings('.content').hide();
    }
}, function () {
    flag = true;
})
$('.services_content .header span').hover(function () {
    $('.services_content .header .active').removeClass('active');
    $(this).addClass('active');
    $('.' + $(this).attr('data') + '_content').show().siblings('.content').hide();
})
$('.close').on('click', function () {
    $('.bar').slideDown();
    $('.services_content').slideUp();
    flag = false;
})
(function () {
    var obj = {
        init: function (options) {
            this.items = options.items;
            this.father = options.father;
            this.rowNum = options.rowNum || 5;
            this.nowItem = options.nowItem || this.items[0].name || "";
            this.nowItemImg = options.nowItemImg || '';
            this.creatDom();
            this.bindEvent();
        },
        creatDom: function () {
            var wrap = $('<div class="areaContent"></div>');
            var nowArea = $('<div class="nowArea"></div>');
            var itemList = $('<div class="itemList"></div>');
            if (this.nowItemImg) {
                var img = new Image;
                img.src = this.nowItemImg;
                img.onload = function () {
                    $(img).prependTo(nowArea);
                }
            }
            var str = ""
            $('<span class="item_name"></span>').html(this.nowItem).prependTo(nowArea);
            this.items.forEach(function (ele) {
                str = str + '<div class="item"><a href="' + ele.href + '">' + ele.name + '</a></div>'
            });
            $(wrap).append(nowArea);
            $(this.father).append(wrap);
            $(wrap).append(itemList.html(str));
            $(this.father).append(wrap);
            $('.itemList').css({
                'width': $('.item').innerWidth() * this.rowNum + "px"
            })
        },
        bindEvent: function () {
            $('.itemList').on('click', '.item', function () {
                $('.itemList .item').removeClass('active');
                $(this).addClass('active');
                $('.item_name').html($(this).html());
            })
        }
    }

    $.fn.extend({
        areaList: function (opt) {
            opt.father = this;
            obj.init(opt);
        }
    })


})()
(function () {
    function Index(option) {
        this.parent = option.parent;
        this.dir = option.dirction || 'x';
        this.colNum = option.colNum || 2;
        this.menuList = option.menuList || [];
        this.LorR = option.LorR;
        this.len = this.menuList.length || 0;
        this.createDom();
        this.bindEvent();
        console.log(this.parent);
    }
    Index.prototype.createDom = function () {
        
        var wrap = $('<div class="wrap"></div>').css('display','none');
        var wrap_box = $('<div class="wrap_box"></div>');
        this.menuList.forEach(function (ele) {
            var items_list = $('<div class="items_list"></div>');
            if (ele.title) {
                var title_item = $('<div class="title_item"></div>').html(ele.title)

                items_list.append(title_item).css('text-align', 'left');
            }
            ele.items.forEach(function (ele2) {
                var strA = '<a href="' + ele2.href + '">' + ele2.name + '</a>';
                var item = $('<div class="item"></div>').html(strA).css({
                    'display': 'inline-block',
                    'width': '100px',
                });
                items_list.append(item);
            })
            wrap_box.append(items_list);
        });
        
        wrap.append(wrap_box).appendTo(this.parent);
        this.addCss();
        //控制排列方向
        if (this.dir == 'x') {
            $('.wrap_box', this.parent).css({
                'width': $('.items_list', this.parent).innerWidth() * this.len + 2 + 'px'
            })
            $('.items_list', this.parent).css({
                'vertical-align': 'top',
                'border-right': '1px dashed #ddd',
                'display': 'inline-block',
                'padding': '10px',
                'width': $('.item', this.parent).width() * this.colNum + 'px'
            })
        } else {
            $('.items_list', this.parent).css({
                'border-bottom': '1px dashed #ddd',
                'display': 'block',
                'padding': '10px',
                'width': $('.item', this.parent).width() * this.colNum + 'px'
            })
        }
    }
    Index.prototype.addCss = function () {
        var self = this;
        if (this.LorR == 'right') {
            $('.wrap', this.parent).css({
                'left': 0,
            })
        } else {
            $('.wrap', this.parent).css({
                'right': 0,
            })
        }
        this.parent.css({
            'z-index': '999999',
            'position': 'relative',
        });
        $('.wrap', this.parent).css({
            'position': 'absolute',
            'background': '#fff',
            'box-shadow': '5px 5px 10px #999'
        })

        //这块不明白为什么42 43行写在css里面不好使
        $('.items_list', this.parent).css({
            'padding': '10px',
            'width': $('.item', this.parent).width() * this.colNum + 'px'
        })
        //这个也不咋好使
        $('#lie .items_list .item').css({
            'width': '100px',
            'display': 'inline-block'
        })
    }
    Index.prototype.bindEvent = function () {
        var self = this;
        this.parent.hover(function () {
            console.log(this);
            console.log(self);
            $(this).css({
                'background': '#fff',
            })
            $('.wrap',this).show()
        }, function () {
            $('.wrap',this).hide();
            var color = self.parent.parent().css('background-color');
            self.parent.css('background-color',color)
        })
    }
    $.fn.extend({
        dropList: function (option) {
            option.parent = this;
            new Index(option);
        }
    })
})()
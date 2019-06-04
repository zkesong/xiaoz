Component({
    externalClass: ["i-navbar"],
    data: {
        tabs: ["推荐", "网络", "软件", "运维", "大数据"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 2,
        sliderWidth: 0,
        postLists:[
            [],
            [],
            [],
            [],
            []
        ]
    },
    pageLifetimes: {
        show: function () {
            var that = this;
            wx.getSystemInfo({
                success: function (res) {
                    that.setData({
                        sliderWidth: res.windowWidth / that.data.tabs.length - 2 * that.data.sliderLeft,
                        sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                    });
                }
            });
        }
    },
    methods: {
        tabClick: function (e) {
            this.setData({
                sliderOffset: e.currentTarget.offsetLeft,
                activeIndex: e.currentTarget.id
            });
            var myEventDetail = { id: e.currentTarget.id } // detail对象，提供给事件监听函数
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('tagChange', myEventDetail, myEventOption)
        }
    }
});
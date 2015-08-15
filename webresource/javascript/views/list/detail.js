define(['backbone'], function () {
    var View = Backbone.View.extend({
        el: '.m-detail',

        initialize: function (options) {
            this.els = {
                listContainer: this.$el.find('#detailContainer'),
                listTpl: $('#detail_tpl')
            };
            this.render();
        },

        events: {
            'click ul li': 'itemAction'
        },

        itemAction: function () {
            alert('去个人中心')
        },

        render: function () {
            var itemTemplate = _.template(this.els.listTpl.text());
            var mackData = {
                code:200,
                data: {
                    description: '找学JAVA的人，一起报入门培训课程,主要针对水平在入门级的同学',
                    creator: {name: '金正恩'},
                    price: 100,
                    maxprice: 200,
                    minprice: 20,
                    count: 20,
                    maxcount: 200,
                    mincount: 20,
                    starttime: new Date().getTime(),
                    endtime: new Date().getTime(),
                    address: '广州番禺区  中山大学图书馆3楼701',
                    summary: '基于丰富的海外项目经验，将国内成熟的移动互联网项目移植海外。目前已经覆盖东南亚预计在美洲上线，覆盖西班牙语系；2016年3月，预计在印和孟加拉上线。覆盖20亿人口。海外秀场，视频社区。',
                    about: '基于丰富的海外项目经验，将国内成熟的移动互联网项目移植海外。目前已经覆盖东南亚预计在美洲上线，覆盖西班牙语系；2016年3月，预计在印和孟加拉上线。覆盖20亿人口。海外秀场，视频社区。',
                    other: '基于丰富的海外项目经验，将国内成熟的移动互联网项目移植海外。',
                    member: [{
                        name: '奥爸妈',
                        image: '#',
                        time: new Date().getTime()
                    }]
                }
            };
            this.$el.html(itemTemplate(mackData));
        }
    });
    return View;
});
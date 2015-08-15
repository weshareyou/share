define(['backbone'], function () {
    var View = Backbone.View.extend({
        el: '.m-list',

        initialize: function (options) {
            this.els = {
                listContainer: this.$el.find('#listContainer'),
                listTpl: $('#list_tpl')
            };
            this.render();
        },

        events: {
            'click ul li': 'itemAction'
        },

        itemAction: function () {
            alert('去详情页')
        },

        render: function () {
            var itemTemplate = _.template(this.els.listTpl.text());
            var mockData = {
                code: 200,
                data: [{
                    count: _.random(1, 100),
                    price: _.random(10, 1000),
                    minprice: 10
                }, {
                    count: _.random(1, 100),
                    price: _.random(10, 1000),
                    minprice: 10
                }, {
                    count: _.random(1, 100),
                    price: _.random(10, 1000),
                    minprice: 10
                }, {
                    count: _.random(1, 100),
                    price: _.random(10, 1000),
                    minprice: 10
                }, {
                    count: _.random(1, 100),
                    price: _.random(10, 1000),
                    minprice: 10
                }, {
                    count: _.random(1, 100),
                    price: _.random(10, 1000),
                    minprice: 10
                }]
            };
            this.els.listContainer.html(itemTemplate(mockData));
        }
    });
    return View;
});
define(['backbone'], function () {
    var View = Backbone.View.extend({
        el: '.m-login',

        initialize: function (options) {

        },

        events: {
            'blur #phone': 'onBlur',
            'click #pwd': 'onBlur',
            'click #ok': 'onOk'
        },

        onOk: function (e) {
            e.preventDefault();
            console.log('onOk 需要验证密码两个是否一样，并且是否符合规范');
        },

        onBlur: function (e) {
            console.log('onBlur 验证密码格式');
        }
    });
    return View;
});
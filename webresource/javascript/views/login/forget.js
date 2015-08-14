define(['backbone'], function () {
    var View = Backbone.View.extend({
        el: '.m-login',

        initialize: function (options) {

        },

        events: {
            'blur #phone': 'onBlur',
            'click #ok': 'onOk',
            'click #getcode': 'onGetCode',
            'click #invalid': 'onInvalid'
        },

        onOk: function (e) {
            e.preventDefault();
            console.log('onOk');
        },

        onBlur: function (e) {
            console.log('onBlur');
        },

        onGetCode: function (e) {
            console.log('获取验证码')
        },

        onInvalid: function (e) {
            e.preventDefault();
            console.log('电话号码无效')
        },

        onForget: function (e) {
            e.preventDefault();
            console.log('onForget');
        },

        onLogin: function (e) {
            e.preventDefault();
            alert('调用登录接口');
        }

    });
    return View;
});
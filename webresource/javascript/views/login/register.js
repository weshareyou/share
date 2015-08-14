define(['backbone'], function () {
    var View = Backbone.View.extend({
        el: '.m-login',

        initialize: function (options) {

        },

        events: {
            'blur #phone': 'onBlur',
            'click #register': 'onRegister',
            'click #getcode': 'onGetCode',
            'click #invalid': 'onInvalid'
        },

        onRegister: function (e) {
            e.preventDefault();
            console.log('onOk');
        },

        onBlur: function (e) {
            console.log('onBlur');
        },

        onGetCode: function (e) {
            e.preventDefault();
            console.log('获取验证码')
        },

        onInvalid: function (e) {
            e.preventDefault();
            console.log('电话号码无效')
        }
    });
    return View;
});
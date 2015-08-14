define(['backbone'], function () {
    var View = Backbone.View.extend({
        el: '.m-login',

        initialize: function (options) {

        },

        events: {
            'blur #phone': 'onBlur',
            'click #forget': 'onForget',
            'click #login': 'onLogin',
            'click #register': 'onRegister'
        },

        onBlur: function (e) {
            console.log('onBlur');
        },

        onForget: function (e) {
            e.preventDefault();
            console.log('onForget');
        },

        onLogin: function (e) {
            e.preventDefault();
            alert('调用登录接口');
        },

        onRegister: function (e) {
            e.preventDefault();
            location.href = 'http://localhost:63342/share/webresource/views/register.html';
        },


        render: function () {

        }
    });
    return View;
});
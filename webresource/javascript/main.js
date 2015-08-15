/**
 * Created by jiangzuoyu on 15/8/12.
 */
(function (win) {
    //配置baseUrl
    var baseUrl = document.getElementById('main').getAttribute('data-baseurl');
    /*
     * 文件依赖
     */
    var config = {
        baseUrl: baseUrl,
        paths: {
            zepto: 'bower_components/zepto/zepto.min',
            jquery: 'bower_components/jquery/dist/jquery.min',
            underscore: 'bower_components/underscore/underscore',
            backbone: 'bower_components/backbone/backbone',

            login: 'webresource/javascript/views/login/login',
            forget: 'webresource/javascript/views/login/forget',
            reset: 'webresource/javascript/views/login/reset',
            register: 'webresource/javascript/views/login/register',

            list:'webresource/javascript/views/list/list',
            detail:'webresource/javascript/views/list/detail'
        },
        shim: {
            'underscore': {
                exports: '_'
            },
            'jquery': {
                exports: '$'
            },
            //'zepto': {
            //    exports: '$'
            //},
            'backbone': {
                deps: ['underscore', 'zepto'],
                exports: 'Backbone'
            }
        }
    };

    require.config(config);
    var viewName = document.getElementById('main').getAttribute('data-view');
    require([viewName], function (view) {

        new view();

        //var Router = Backbone.Router.extend({
        //    routes: {
        //        "view1": 'view1'
        //    },
        //    view1: function () {
        //
        //    }
        //});
        //Backbone.history.start();
    });

})(window);
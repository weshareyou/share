var appRoute = Backbone.Router.extend({
    initialize: function () {
        console.log('Route initialize');
    },
    routes: {
        "view1": 'view1',
        "view2": 'view2',
        "view3": 'view3'
    },

    view1: function () {
        console.log('view1')
    },
    view2: function () {
        console.log('view2')
    }
});


new appRoute();
Backbone.history.start();

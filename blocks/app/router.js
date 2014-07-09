import Ember from 'ember';

var routes = [
        'employment'
    ]
    ,Router = Ember.Router.extend({
        location: BlocksENV.locationType
    })

Router.map(function() {
    var that = this

    // this.resource('', {
    //     path: ""
    // })

    routes.map(function(route) {
        // map the routes
        that.resource(route.pluralize(), function() {
            this.resource(route, {
                path: '/:' + route + '_id'
            }, function() {
                this.route('edit')
            })
        })
    })
})

export default Router

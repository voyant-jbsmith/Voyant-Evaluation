export default Ember.Route.extend({
    model: function find() {
        return this.store.find(this.optional.name)
    }
    ,setupController: function(controller, model) {
        controller.set('content', model)
    }
})

export default Ember.Route.extend({
    model: function model() {
        return this.modelFor(this.optional.name)
    }
    ,contextDidChange: function() {

    }
    ,actions: {
        willTransition: function(transition) {
            
        }
    }
})  

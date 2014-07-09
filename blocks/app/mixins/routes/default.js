export default Ember.Route.extend({
    model: function model() {
        return this.store.find(this.optional.name)
    }
    ,actions:{
        willTransition: function(transition) {
           
        }
    }
})

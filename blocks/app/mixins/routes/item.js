export default Ember.Route.extend({
    model: function find(params) {
        if ( !!params[this.optional.name + '_id']) {
            return this.store.find(this.optional.name, params[this.optional.name + '_id'])
        } else {
            return this.store.createRecord(this.optional.name, {})
        }
    }
})

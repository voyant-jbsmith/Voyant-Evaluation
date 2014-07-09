// adapters/application.js

var DefaultAdapter = DS.FixtureAdapter.extend({
     /**
     @method generateIdForRecord
     @param {DS.Store} store
     @param {DS.Model} record
     @return {String} id
     */
    generateIdForRecord: function(store) {
        return Ember.uuid()
    }
})


export default DefaultAdapter
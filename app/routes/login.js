import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {
        if (this.get('session.isAuthenticated')) {
            console.log("Autenticado");
            this.transitionTo('inicio');
        }
    }
});

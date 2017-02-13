import Ember from 'ember';

export default Ember.Route.extend({
    session: Ember.inject.service('session'),
    beforeModel() {
        if (!this.get('session.isAuthenticated')) {
            console.log("Não autenticado");
            this.transitionTo('login');
        } else {
            this.transitionTo('inicio');
        }
    }
});
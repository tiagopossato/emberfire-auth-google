import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel: function () {
    return this.get('session').fetch().catch(function () { });
  },
  actions: {
    login: function () {
      console.log(this.get);
      this.get('session').open('firebase', { provider: 'google' }).then(function (data) {
        console.log(data.currentUser);
        this.transitionTo('inicio');
      }.bind(this));
    },
    logout: function () {
      try {
        this.get('session').close().then(function () {
          this.transitionTo('index');
        }.bind(this));
      } catch (e) {
        console.log(e)
      }

    }
  }
});
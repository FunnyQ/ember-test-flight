import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('invitation')
  },

  actions: {
    saveInvitation(newInvitation) {
      newInvitation.save().then((response) => {
        this.controller.set('responseMessage', `感謝您，我們已經保留了您的聯絡方式。您的編號是：${response.get('id')}`)
        this.controller.set('model', this.model())
      })
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});

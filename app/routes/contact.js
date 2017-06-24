import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('contact')
  },

  actions: {
    sendMessage(newContact) {
      var responseMessage = `To: ${newContact.get('email')}, Message: ${newContact.get('message')}`

      newContact.save().then((response) => {
        this.controller.set('model', this.model())
        this.controller.set('responseMessage', responseMessage)
      })
    }
  }
});

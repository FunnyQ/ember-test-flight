import Ember from 'ember';

export default Ember.Controller.extend({
  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation() {
      const email = this.get('emailAddress');
      const newInvitation = this.store.createRecord('invitation', { email: email });

      newInvitation.save().then((response) => {
        this.set('responseMessage', `感謝您，我們已經保留了您的聯絡方式。您的編號是：${response.get('id')}`);
        this.set('emailAddress', '');
      });
    }
  }
});

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
      newInvitation.save();

      this.set('responseMessage', `感謝您，我們已經保留了您的聯絡方式。我們會將最新消息送到 ${email}`);
      this.set('emailAddress', '');
    }
  }
});

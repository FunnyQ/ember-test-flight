import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actualEmailAddress: Ember.computed('emailAddress', function() { 
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),
  emailAddressChanged: Ember.observer('emailAddress', function() { 
    console.log('observer is called', this.get('emailAddress')); 
  }),

  actions: {
    saveInvitation() {
      console.log(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `感謝您，您的 Email：${this.get('emailAddress')} 已經加入邀請等候名單！`);
      this.set('emailAddress', '');
    }
  }
});

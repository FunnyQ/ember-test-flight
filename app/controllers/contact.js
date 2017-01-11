import Ember from 'ember';

export default Ember.Controller.extend({

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: Ember.computed.gte('contactMessage.length', 5),
  isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),

  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage: function(){
      var email = this.get('emailAddress');
      var message = this.get('contactMessage');
      var responseMessage = `To: ${email}, Message: ${message}`;

      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('contactMessage', '');
    }
  }
});

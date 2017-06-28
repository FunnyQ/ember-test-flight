import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  // validations
  isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  isMessageEnoughLong: Ember.computed.gte('message.length', 5),

  // states
  isValid: Ember.computed.and('isValidEmail', 'isMessageEnoughLong'),
  isDisabled: Ember.computed.not('isValid')
});

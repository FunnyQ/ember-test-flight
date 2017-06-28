import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),

  // validation
  isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),

  // state
  isDisabled: Ember.computed.not('isValidEmail')
});

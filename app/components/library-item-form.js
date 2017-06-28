import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: '儲存',

  actions: {
    buttonClicked(param) {
      this.sendAction('action', param);
    }
  }
});

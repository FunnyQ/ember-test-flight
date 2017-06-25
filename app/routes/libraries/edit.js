import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('library', params.id)
  },

  actions: {
    saveLibrary(library) {
      library.save().then(() => this.transitionTo('libraries'))
    },
    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("有變更尚未儲存，確定要離開頁面？");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});

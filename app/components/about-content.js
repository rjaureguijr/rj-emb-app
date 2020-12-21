import Ember from 'ember';

export default Ember.Component.extend({
  aboutTest: true,
  actions: {
    testConsole() {
      this.set('aboutTest', false);
      console.log('rentals ' + this.get('aboutTest'));
    },
    testConsoleNext() {
      this.set('aboutTest', true);
      console.info('status ' + this.get('aboutTest'));
    }
  }
});

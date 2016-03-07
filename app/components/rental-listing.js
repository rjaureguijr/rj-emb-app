import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
      this.get('rentals.id');
      console.log(this.isImageShowing);
    },
    imageHide() {
      this.set('isImageShowing', false);
      this.get('rentals.id');
      console.log(this.isImageShowing);
    }
  }
});

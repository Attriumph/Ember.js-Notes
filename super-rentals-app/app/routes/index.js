import Route from '@ember/routing/route';

export default Route.extend({
  // redirect is route lifecycle hook
  redirect() {
    this.transitionTo('rentals');
  }
});

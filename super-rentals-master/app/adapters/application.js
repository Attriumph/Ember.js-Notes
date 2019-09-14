import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // our application to default to making requests to the namespace of /api
  namespace: 'api'
});

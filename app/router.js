import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('teams', function() {
    this.route('show', {path: '/teams/:team_id'});
  });
});

export default Router;

'use strict';

const Reflux = require('reflux');
const SubredditsAction = require('../actions/subreddits');
const Client = require('../utils/client');

module.exports = Reflux.createStore({
  displayName: 'Subreddits Store',

  data: {},

  init: function() {
    this.listenTo(SubredditsAction.requestPopularSubreddits, this.getPopularSubreddits);
    this.listenTo(SubredditsAction.storeSubreddits, this.setSubreddits);

    // Add
    this.listenTo(SubredditsAction.setCurrentName, this.setCurrentName);
  },

  getInitialState: function() {
    return this.data;
  },

  getPopularSubreddits: function() {
    Client.getPopularSubreddits();
  },

  setSubreddits: function(subreddits) {
    this.data.subreddits = subreddits;
    this.trigger(this.data);
  },

  // Add key/val pair
  setCurrentName: function (name) {
    this.data.currentName = name;
    document.title = name + ' - ' + document.title;
    this.trigger(this.data);
  },

});

var app = app || {};

// create a Backbone Model constructor inside the app object named Show
// assign the following defaults:
// coverImage: 'img/placeholder.png',
// title: 'Unknown',
// genre: 'Unknown',
// stars: '★'
app.Show = Backbone.Model.extend({

  defaults: function() {
    return {
      coverImage: 'img/placeholder.png',
      title: 'No title',
      genre: 'No genre',
      stars: '★'
    }
  }
});

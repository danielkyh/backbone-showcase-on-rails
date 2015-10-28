var app = app || {};

app.ShowcaseView = Backbone.View.extend({
  el: '#shows',

  events: {
    'click #add': 'addShow'
  },

  // fill in with your collection setup
  initialize: function() {
    this.collection = new app.Showcase;
    this.collection.fetch({reset: true}); // fetch reads the collection from the persistent data store
    this.renderShow(); // show the main section once this is ready

//     // have the view listen to events on the collection.
//     // Backbone.Collection comes with 'add' and 'reset' events
//     // 'add' is triggered when a model is added to the collection.
//     // 'reset' is triggered when we reset the contents of the collection (we do it on 81 via fetch)
    this.listenTo(this.collection, 'add', this.renderOne);
    // this.listenTo(this.collection, 'reset', this.renderShow);

  },

  // fill in
  renderOne: function(show) {
    var view = new app.ShowView({model: show})
    $('#shows').append(view.render().el);
  },

  // fill in
  renderShow: function() {
    this.collection.each(function(show){
      this.renderOne(show)
    }, this)
  },

  // fill in
  addShow: function(event) {
    event.preventDefault(); // cancel the submit event's actions
    var data = {}; // where we will store the form data


    // capture the information from the form into the data variable
    $('#addShow').children().each(function(index, input) {
      var $input = $(input);
      var validInput = input.localName !== 'input';
      if (validInput || input.type === 'submit') { return true; } // return true goes to the next entry in each, like next in Ruby
      if ($input.val() !== '') {
        data[input.name] = $input.val(); // set the keys and values for the data object
        // console.log(data[input.name])
      }
    });

    this.collection.create(data); // create a new model in the collection with the attributes from data
  }
})

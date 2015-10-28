var app = app || {};

app.ShowView = Backbone.View.extend({
  tagName: 'div',
  className: 'showContainer',
  // fill in the template property for the #showTemplate
  template: _.template($('#showTemplate').html()),
  // fill in the click events for delete and update buttons
  events: {
    'submit #addShow': 'addShow',
    'click .delete': 'deleteShow'
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  // fill in
  deleteShow: function() {
    this.model.destroy();
    this.remove();
  },

  // EDITING A SHOW: IMPLEMENTATION CONSIDERATIONS
  // - The view needs a way to know whether it's in editing mode or not
  // - Based on this information, the template should show a form or text content
  // - The buttons on the series should be different based on whether the form is showing
  // - You can use <% if(statement) %> in Underscore. You need to close with <% } %>
  // - Write a function to serialize the update form
  // - In that function, save your updated data using the set function on models
  // - Don't forget to save and render the view again with the updated info
});

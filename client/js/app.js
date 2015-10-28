var app = app || {};

// constructor for our Post model
// app.Show = Backbone.Model.extend({

//   defaults: function() {
//     return {
//       title: 'No title',
//       genre: 'No genre',
//       stars: 3
//     }
//   }
// });

// this is our collection of Post models
// app.Shows = Backbone.Collection.extend({
//   // specify the type of model in this collection
//   model: app.Show,

//   // location of persistent data store.
//   localStorage: new Backbone.LocalStorage('show-case')
// });

// // Backbone View for the Post model.
// // Every view has an el which corresponds to the HTML associated with the view
// // In this case, a new article tag with a class of post is created when this view is rendered
// // <article class="post"></article>
// // The contents of this tag will be the Underscore template applied to the model's data
// app.ShowView = Backbone.View.extend({
//   // details for this view's el
//   tagName: 'div',
//   className: 'showContainer',

//   // // the events within this view's el that we should listen to and the function we should call when the event happens
//   // events: {
//   //   'click .delete': 'deletePost'
//   // },

//   // this is called when the view is created
//   initialize: function() {
//     // set the template for creating HTML. You can find the template in the tag with id "postTemplate" in index.html
//     this.template = _.template($('#showTemplate').html());
//     // we want the view to show up on the page once initialized. render is defined within the view
//     this.render();
//   },

//   render: function() {
//     // take the el, replace its html with the template applied to the model's attribute.
//     // this.model is set when the view is initialized. this.model.attributes is a JS object of the model's attributes
//     this.$el.html(this.template(this.model.attributes));
//     // We return the view for convenience in situations where we render views within views.
//     // That situation happens in the PostsView
//     return this;
//   },

//   // // when we press the delete button, remove this model
//   // // then remove the view for the model
//   // deletePost: function() {
//   //   this.model.destroy(); // removes it from persistent data store
//   //   this.remove(); // deletes the view
//   // }
// });


// app.ShowsView = Backbone.View.extend({
//   // you can specify the el for a view if it already exists on the DOM
//   // our el here will be the existing <main> tag
//   el: '#shows',

//   // when a submit action occurs on the post_form, we call the addPost function in this view
//   events: {
//     'submit #addShow': 'addShow'
//   },

//   initialize: function() {
//     // this view will manage a collection instead of a single model
//     this.collection = new app.Shows(); // create the new collection
//     this.collection.fetch({reset: true}); // fetch reads the collection from the persistent data store
//     this.render(); // show the main section once this is ready

//     // have the view listen to events on the collection.
//     // Backbone.Collection comes with 'add' and 'reset' events
//     // 'add' is triggered when a model is added to the collection.
//     // 'reset' is triggered when we reset the contents of the collection (we do it on 81 via fetch)
//     this.listenTo(this.collection, 'add', this.renderShow);
//     this.listenTo(this.collection, 'reset', this.render);
//   },

//   // we define a helper function to render a single post
//   // this is where the PostView view is created. We pass in a model to the view constructor
//   renderShow: function(show) {
//     var view = new app.ShowView({model: show});
//     // show the HTML from the Post view on the page
//     // because we returned "this" from render() in the PostView on line 55, we can simply access the el property in one line
//     this.$('.showContainer').append(view.render().el);
//   },

//   render: function() {
//     // rendering the PostsView means rendering each individual post
//     this.collection.each(function(show) {
//       this.renderShow(show)
//     }, this)
//   },

//   // manual form serialization to create a new post
//   addShow: function(event) {
//     event.preventDefault(); // cancel the submit event's actions
//     var data = {}; // where we will store the form data


//     // capture the information from the form into the data variable
//     $('#addShow').children().each(function(index, input) {
//       // console.log(index, input)
//       var $input = $(input);
//       var validInput = input.localName !== 'input';
//       if (validInput || input.type === 'submit') { return true; } // return true goes to the next entry in each, like next in Ruby
//       if ($input.val() !== '') {
//         data[input.name] = $input.val(); // set the keys and values for the data object
//         // console.log(data[input.name])
//       }
//     });

//     this.collection.create(data); // create a new model in the collection with the attributes from data
//   }
// });

$(function() {
  new app.ShowcaseView(); // instantiate the master view and run our app
});


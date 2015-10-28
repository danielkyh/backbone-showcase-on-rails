var app = app || {};

app.Showcase = Backbone.Collection.extend({
  model: app.Show,
  // localStorage: new Backbone.LocalStorage('showcase')
  // fill in the url property
  url: 'http://localhost:3000/shows'
});


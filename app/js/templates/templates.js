define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["hello/show/hello"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2>Hello World!</h2>\n";
  });

return this["JST"];

});
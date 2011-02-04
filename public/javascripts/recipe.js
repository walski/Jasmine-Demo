var Recipe = function(attributes) {
  this.attributes = attributes || {};
  this.ingredients = this.attributes.ingredients || [];  
};

Recipe.prototype.price = function() {
  var price = 0;
  for (var i = this.ingredients.length - 1; i >= 0; i--){
    price += this.ingredients[i].price;
  };
  return price;
}
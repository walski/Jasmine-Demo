describe("Recipe", function() {
  var recipe;
  
  describe("An empty Recipe", function() {
    beforeEach(function() {
      recipe = new Recipe();
    });
    
    it("has no ingredients", function() {
      expect(recipe.ingredients.length).toEqual(0);
    });
    
    it("costs nothing", function() {
      expect(recipe.price()).toEqual(0);
    });
  });
  
  describe("Making a lasagne", function() {    
    var data;
    
    beforeEach(function() {
      data = {
       "ingredients": [
        {
          "name": "Onion",
          "price": 1
        },
        {
          "name": "Cheese",
          "price": 5
        },
        {
          "name": "Noodle",
          "price": 4
        }
       ] 
      };
      recipe = new Recipe(data);
    });
    
    it("costs a little", function() {
      expect(recipe.price()).toEqual(10);
    });
    
  });
});
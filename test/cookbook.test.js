const { Cookbook } = require('../src/cookbook'); //we don't need to write ".js" if we are importing from one to another

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const myCookbook = new Cookbook();

      myCookbook.addRecipe('cookie', ['egg', 'flour', 'sugar', 'chocolate']);
       expect(myCookbook.recipes).toEqual({cookie: ['egg', 'flour', 'sugar', 'chocolate']});

       //a test that fails (my ref):
      // myCookbook.addRecipe("Toby's cookie", ['egg', 'flour', 'sugar', 'chocolate']);
      // expect(myCookbook.recipes).toEqual({cookie: ['mystery dough', 'pecans']});


    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {

      const myCookbook = new Cookbook();
      myCookbook.addRecipe('hotdog', ['meat', 'bread']);

      const myRecipes = myCookbook.listRecipes();
      expect(myRecipes).toEqual(['hotdog']);

       
    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      
      const myCookbook = new Cookbook();
      myCookbook.addRecipe('coxinha (brazilian croquette)', ['chicken', 'flour', 'panko breadcrumbs', 'cheese', 'love']);

      const getRecipe = myCookbook.getRecipe('coxinha (brazilian croquette)');
      expect(getRecipe).toEqual(['chicken', 'flour', 'panko breadcrumbs', 'cheese', 'love']);



      
    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

      const myCookbook = new Cookbook;
      myCookbook.addRecipe('reeses squares', ['peanut butter', 'chocolate chips', 'sugar', 'butter']);
      myCookbook.addRecipe('nachos', ['tortilla chips', 'salsa', 'cheese', 'guacamole']);
      myCookbook.addRecipe('tomato bruschetta', ['tomato', 'baguette', 'garlic', 'chesse', 'basil']);
      myCookbook.addRecipe('cinnamon cake', ['flour', 'milk', 'sugar', 'cinammon', 'baking powder']);
   
      myCookbook.removeRecipe('nachos');
      
      const myRecipes = myCookbook.listRecipes();
      expect(myRecipes).toEqual([ 'reeses squares', 'tomato bruschetta', 'cinnamon cake' ]
      );

    });
  });
});

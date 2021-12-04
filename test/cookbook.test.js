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
      
      
    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

    });
  });
});

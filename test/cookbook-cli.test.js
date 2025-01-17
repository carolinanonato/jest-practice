const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {

      
  const myCookbook = new Cookbook();
  const myCookbookCli = new CookbookCli(myCookbook);

  const message = myCookbookCli.add('hotdog', ['meat', 'bread']);

  expect(message).toEqual('Successfully added the following recipe: hotdog')

    
    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {

      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add('hotdog', ['meat', 'bread']);
      myCookbookCli.add('chocolate brownies', ['flour', 'chocolate', 'butter']);

      const message = myCookbookCli.list();

      expect(message).toEqual(`You have the following recipes: hotdog,chocolate brownies`)

    

    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {

      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add('strawberry shortcake', ['strawberry', 'flour', 'sugar', 'eggs', 'vanila'])

      const message = myCookbookCli.get('strawberry shortcake');

      expect(message).toEqual(`The ingredients for strawberry shortcake are: strawberry,flour,sugar,eggs,vanila`);
    
    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {

      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add('stuffed mushrooms', ['mushrooms', 'garlic', 'cream cheese', 'parmesan cheese', 'cayene pepper']);

      const message = myCookbookCli.remove('stuffed mushrooms');

      expect(message).toEqual(`Successfully removed the following recipe: stuffed mushrooms`);

    });
  });
});

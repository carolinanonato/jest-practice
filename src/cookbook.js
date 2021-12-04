class Cookbook {
  constructor() {
    this.recipes = {};
  }

  addRecipe(name, ingredients) {
    this.recipes[name] = ingredients;
  }

  listRecipes() {
    return Object.keys(this.recipes);
  };

  getRecipe(name) {
    return this.recipes[name];
  }

  removeRecipe(name) {
    delete this.recipes[name];
  }
}

module.exports = { Cookbook };


// *** Just a test to see the code working for my easy reference later 
// const myCookbook = new Cookbook();

// console.log(`logging out the cookbook`)

// myCookbook.addRecipe('Hotdog', ['mystery meat 1', 'bread', 'ketchup']);
// myCookbook.addRecipe('Pizza', ['tomato', 'dough', 'cheese']);

// console.log(myCookbook.listRecipes());
// console.log(myCookbook.getRecipe('Pizza'));
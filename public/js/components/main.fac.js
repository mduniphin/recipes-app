(function() {
  'use strict';

  angular
    .module('recipesApp')
    .factory('recipesFactory', recipesFac);

  function recipesFac($http) {

    var factory = {};

    factory.getRecipes = getRecipes;

    function getRecipes() {
      return [{
       "title" : "Guajillo Chilaquiles"
      	, "author" : "Rick Bayless"
      	, "ingredients" : ["8medium (2 ounces total)dried guajillo chiles, stemmed, seeded and torn into flat pieces",
      		"114.5-ounce can diced tomatoes in juice (preferably fire-roasted), drained",
      		"4large garlic cloves, peeled and roughly chopped",
      		"2 1/2tablespoons vegetable oil (divided use)",
      		"3 cups chicken broth",
      		"1/4 tsp sugar",
      		"Salt",
      		"8 ounces (8 to 12 loosely packed cups, depending on thickness) thick homemade-style corn tortilla chips (such as the ones you buy at a Mexican grocery)",
      		"4 eggs",
      		"1 small white onion, thinly sliced","About 1/3cupMexican crema, créme fraiche or store-bought sour cream thinned out with a little milk",
      		"1/2 cupMexican queso añejo or other dry grating cheese such as Romano or Parmesan"]
      	, "instructions" : ["Toast the chile pieces a few at a time in a dry heavy skillet or on a griddle heated over medium, pressing them flat against the hot surface with a metal spatula until they are aromatic, about 19 seconds per side. \n \nIn a bowl, rehydrate the chiles for 20 minutes in hot tap water to cover; place a small place on the top to keep the chiles submerged.",
      "Use a pair of tongs to transfer the rehydrated chiles to a food processor or blender. Measure in 1 cup of water, add the tomatoes and garlic and process to a smooth puree. Press through a medium-mesh sieve into a bowl.",
      "Heat 1 1/2 tablespoons of the oil in a medium (4- to 5-quart) pot or Dutch oven or a large (12-inch) deep skillet over medium-high heat—you’ll need a lid for whichever vessel you choose. When hot, add the chile puree and stir until nearly constantly until reduced to the consistency of tomato paste, about 7 minutes. Add the broth, partially cover and simmer over medium-low heat for 20 minutes. Season with sugar and salt, usually about 1 scant teaspoon. You should have about a generous 4 cups of brothy sauce.",
      "Just before finishing the chilaquiles, heat the remaining 1 tablespoon of the oil in a large skillet over medium. Add the eggs and cook on one side just until set, sunny-side up.",
      "Raise the heat under the seasoned sauce to medium-high. Stir in the chips, coating all of them well. Let return to a rolling boil, cover and turn off the heat. Let stand for 5 minutes (no longer).",
      "Uncover the pot and check that the chips have softened nicely—they should be a little chewy, definitely not mushy. Spoon onto warm plates. Drizzle with the crema (or its stand-in), strew with the sliced onion and dust generously with the cheese. Transfer an egg to each portion and serve right away."]
      	, "date" : "2014-05-20T18:25:00.511Z"
      	, "categories" : ["breakfast","Mexican"]
      },
      	{ "title" : "Ultimate Chocolate Chip Cookies"
      	, "author" : "Betty Crocker"
      	, "ingredients" : ["3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "1 cup butter or margarine, softened",
      "1 teaspoon vanilla",
      "1 egg",
      "2 1/4 cups Gold Medal™ all-purpose flour",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "1 cup coarsely chopped nuts",
      "1 package (12 ounces) semisweet chocolate chips (2 cups)"]
      	, "instructions" : ["Heat oven to 375ºF.",
      "Mix sugars, butter, vanilla and egg in large bowl. Stir in flour, baking soda and salt (dough will be stiff). Stir in nuts and chocolate chips.",
      "Drop dough by rounded tablespoonfuls about 2 inches apart onto ungreased cookie sheet.",
      "Bake 8 to 10 minutes or until light brown (centers will be soft). Cool slightly; remove from cookie sheet. Cool on wire rack"]
      	, "date" : "2012-04-23T18:25:43.511Z"
      	, "is_active" : true
      },
      {	 "title" : "rosalee.fleming@enron.com"
      	, "author" :"lizard_ar@yahoo.com"
      	, "ingredients" : ["2 tablespoons extra-virgin olive oil",
      "1 medium onion, chopped",
      "3 garlic cloves, minced",
      "2 medium carrots, cut diagonally into 1/2-inch-thick slices",
      "2 celery ribs, halved lengthwise, and cut into 1/2-inch-thick slices",
      "4 fresh thyme sprigs",
      "1 bay leaf",
      "2 quarts chicken stock, recipe follows",
      "8 ounces dried wide egg noodles",
      "1 1/2 cups shredded cooked chicken",
      "Kosher salt and freshly ground black pepper",
      "1 handful fresh flat-leaf parsley, finely chopped"]
      	, "instructions" : ["Place a soup pot over medium heat and coat with the oil.", "Add the onion, garlic, carrots, celery, thyme and bay leaf.", "Cook and stir for about 6 minutes, until the vegetables are softened but not browned. ", "Pour in the chicken stock and bring the liquid to a boil.","Add the noodles and simmer for 5 minutes until tender. ", "Fold in the chicken, and continue to simmer for another couple of minutes to heat through.", " Season with salt and pepper to taste, and sprinkle with chopped parsley before serving."]
      	, "date" : "2000-04-23T18:25:00.511Z"
      	, "is_active" : true
      }
      ]
    }

    return factory;
  }
}());

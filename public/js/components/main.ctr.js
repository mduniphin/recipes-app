(function() {
  'use strict';

  angular
    .module('recipesApp')
    .controller('mainController', mainCtrl);

  function mainCtrl( recipesFactory) {
    var vm = this;

    vm.recipes = recipesFactory.getRecipes();

  }

}());

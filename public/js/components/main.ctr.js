(function() {
  'use strict';

  angular
    .module('recipesApp')
    .controller('mainCtrl', mainCtrl);


  function mainCtrl () {
    var vm = this;

    vm.message = "You're at the recipes app!";
  }
}());

(function() {
  'use strict';

  angular
    .module('recipesApp')
    .controller('mainController', mainCtrl);

  function mainCtrl() {
    var vm = this;

    vm.message = "You're connected!";
  }

}());

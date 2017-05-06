'use strict';

var injections = ['ui.router'];

angular
  .module('recipesApp', injections)
  .config(config);

function config ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/',
      template: "<h1>{{ main.message }}</h1>",
      controller: mainCtrl,
      controllerAs: "main"
    });

}

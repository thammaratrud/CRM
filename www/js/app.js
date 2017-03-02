// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic', 'LocalStorageModule', 'ngCordova'])

myApp.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .constant('config', {
    serviceBase: 'https://cybercrm.herokuapp.com/'
    //https://thamapp.herokuapp.com/      for production
    //https://thamapptest.herokuapp.com/  for heroku test
    //http://localhost:3000/              for local
  })
myApp.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider
    .state('home', {
      url: '/templates/home',
      templateUrl: 'templates/home.html'

    })
    .state('dash', {
      url: '/templates/dash',
      templateUrl: 'templates/dash.html'

    })

    .state('map', {
      url: '/templates/map',
      templateUrl: 'templates/map.html'


    })

    .state('homeLogin', {
      url: '/templates/auth/homeLogin',
      templateUrl: 'templates/auth/homeLogin.html'

    })
    .state('login', {
      url: '/templates/auth/login',
      templateUrl: 'templates/auth/login.html',
      controller: 'register'

    })
    .state('register-contactInfo', {
      url: '/templates/auth/register-contactInfo',
      templateUrl: 'templates/auth/register-contactInfo.html',
      controller: 'register'

    })
    .state('register-loginInfo', {
      url: '/templates/auth/register-loginInfogister-contactInfo',
      templateUrl: 'templates/auth/register-loginInfo.html',
      controller: 'register'

    })

    .state('activities', {
      url: '/templates/activities/activities',
      templateUrl: 'templates/activities/activities.html'

    })
    .state('calendar', {
      url: '/templates/calendar/calendar',
      templateUrl: 'templates/calendar/calendar.html'

    })
    .state('accounts', {
      url: '/templates/accounts/accounts',
      templateUrl: 'templates/accounts/accounts.html',
      controller: 'accountsController'

    })
    .state('accounts-info', {
      url: '/templates/accounts/accounts-info',
      templateUrl: 'templates/accounts/accounts-info.html',
      controller: 'accountsController'

    })


    .state('contacts', {
      url: '/templates/contacts/contacts',
      templateUrl: 'templates/contacts/contacts.html'

    })
    .state('contactsForm', {
      url: '/templates/contacts/contactsForm.html',
      templateUrl: 'templates/contacts/contactsForm.html'

    })

    .state('leads', {
      url: '/templates/leads/leads',
      templateUrl: 'templates/leads/leads.html'

    })

    .state('leadsForm', {
      url: '/templates/leads/leadsForm',
      templateUrl: 'templates/leads/leadsForm.html'

    })
    .state('opportunities', {
      url: '/templates/opportunities/opportunities',
      templateUrl: 'templates/opportunities/opportunities.html'

    })
    .state('quotes', {
      url: '/templates/quotes/quotes',
      templateUrl: 'templates/quotes/quotes.html'

    })
    .state('orders', {
      url: '/templates/orders/orders',
      templateUrl: 'templates/orders/orders.html'

    })
    .state('invoices', {
      url: '/templates/invoices/invoices',
      templateUrl: 'templates/invoices/invoices.html'

    })
    .state('products', {
      url: '/templates/products/products',
      templateUrl: 'templates/products/products.html'

    })
    .state('cases', {
      url: '/templates/cases/cases',
      templateUrl: 'templates/cases/cases.html'

    })
    .state('casesList', {
      url: '/templates/cases/casesList.html',
      templateUrl: 'templates/cases/casesList.html'

    })
    .state('callimport', {
      url: '/templates/callimport',
      templateUrl: 'templates/callimport.html'

    })
    .state('setup', {
      url: '/templates/setup',
      templateUrl: 'templates/setup.html'

    })
    .state('about', {
      url: '/templates/about',
      templateUrl: 'templates/about.html'

    })


  // Each tab has its own nav history stack:

  // .state('tab.dash', {
  //   url: '/dash',
  //   views: {
  //     'tab-dash': {
  //       templateUrl: 'templates/tab-dash.html',
  //       controller: 'DashCtrl'
  //     }
  //   }
  // })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/templates/home');
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.tabs.style('standard');
});

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.platform.android.tabs.position("bottom");
  $ionicConfigProvider.platform.android.tabs.style("standard");
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('home', {
    url: '/home',
    controller: 'HomeCtrl',
    templateUrl: 'templates/home.html'
  })
  .state('screen1', {
    url: '/screen1/:uid',
    controller: 'Screen1Ctrl',
    templateUrl: 'templates/screen1.html'
  })

  .state('screen2', {
    url: '/screen2',
    controller: 'Screen2Ctrl',
    templateUrl: 'templates/screen2.html'
  })

  .state('screen3', {
    url: '/screen3',
    controller: 'Screen3Ctrl',
    templateUrl: 'templates/screen3.html'
  })

  .state('screen4', {
    url: '/screen4',
    controller: 'Screen4Ctrl',
    templateUrl: 'templates/screen4.html'
  })

  .state('screen5', {
    url: '/screen5',
    controller: 'Screen5Ctrl',
    templateUrl: 'templates/screen5.html'
  })
  
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.invite', {
    url: '/invite',
    views: {
      'tab-invite': {
        templateUrl: 'templates/tab-invite.html',
        controller: 'InviteCtrl'
      }
    }
  })


  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('tab.matches', {
    url: '/matches',
    views: {
      'tab-matches': {
        templateUrl: 'templates/tab-matches.html',
        controller: 'MatchesCtrl'
      }
    }
  })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});

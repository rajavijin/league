angular.module('starter.controllers', [])

.controller('InviteCtrl', function($scope) {

})

.controller('ProfileCtrl', function($scope) {

})

.controller('EditProfileCtrl', function($scope) {
  $scope.next = function() {
    $state.go('screen1', {});
  }
})


.controller('MatchesCtrl', function($scope) {

})

.controller('ChatsCtrl', function($scope) {

})

.controller('AccountCtrl', function($scope) {

})

.controller('HomeCtrl', function($scope, $state) {
  $scope.next = function() {
    $state.go('screen1', {});
  }
})

.controller('Screen1Ctrl', function($scope, $state) {
  $scope.next = function() {
    $state.go('screen2', {});
  }
})

.controller('Screen2Ctrl', function($scope, $state) {
  $scope.next = function() {
    $state.go('screen3', {});
  }
})

.controller('Screen3Ctrl', function($scope, $state) {
  $scope.next = function() {
    $state.go('screen4', {});
  }
})

.controller('Screen4Ctrl', function($scope, $state) {
  $scope.next = function() {
    $state.go('screen5', {});
  }
})

.controller('Screen5Ctrl', function($scope, $state) {
  $scope.next = function() {
    $state.go('tab.invite', {});
  }
})
;

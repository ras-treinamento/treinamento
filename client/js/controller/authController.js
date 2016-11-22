'use strict';

app.controller('AuthController', ['$scope', '$localStorage', '$state', 'AuthService',
  function ($scope, $localStorage, $state, AuthService) {

	var init = function () {
	};

	$scope.login = function(username, password) {
		AuthService.login(username, password)
			.then(function(data) {
				if (data.token) {
               $localStorage.currentUser = { profile: data.profile, token: data.token };
               goToIndex();
            }
			})
          .catch(function(e) {
          	console.log(e);
			})
	};

	var goToIndex = function() {
		$state.go('app.java.start');
	}

  	init();

}]);
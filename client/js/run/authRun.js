app.run(['$rootScope', '$state', '$localStorage', '$http', 
    function ($rootScope, $state, $localStorage, $http) {
    
    if ($localStorage.currentUser) {
        // $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    }

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        if(toState.name !== 'auth.login') {
            if (!$localStorage.currentUser) {
                event.preventDefault(); 
                $state.go('auth.login');
            } else {
                $rootScope.currentUser = $localStorage.currentUser;
            }
        } 
    });

}]);
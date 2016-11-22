'use strict';

app.factory('AuthService', ['$http', 'PromiseService', 
    function($http, PromiseService) {

    return {

        login: function(email, password) {
            return PromiseService.execute(
                    $http.post("http://localhost:3000/auth/local", 
                        { email: email, password: password }));
        }

    }

}]);
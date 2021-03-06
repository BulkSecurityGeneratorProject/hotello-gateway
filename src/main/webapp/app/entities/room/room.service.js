(function() {
    'use strict';
    angular
        .module('housekeepinguiApp')
        .factory('Room', Room);

    Room.$inject = ['$resource'];

    function Room ($resource) {
        var resourceUrl =  'backendapi/' + 'api/rooms/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();

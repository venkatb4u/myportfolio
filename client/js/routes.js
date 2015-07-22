define(['app'], function (app) {
    'use strict';

    return app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/viewAddressBook', { templateUrl: 'partials/viewAddressBook.html', controller: 'viewAddressBookCtrl' });
            $routeProvider.when('/editAddressBook/:id', { templateUrl: 'partials/editAddressBook.html', controller: 'editAddressBookCtrl' });
            $routeProvider.when('/newAddressBook', { templateUrl: 'partials/newAddressBook.html', controller: 'newAddressBookCtrl' });
            $routeProvider.otherwise({ redirectTo: '/viewAddressBook' });
        }]);
});

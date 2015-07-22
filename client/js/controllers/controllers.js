define([
    'angular',
    'controllers/viewAddressBookCtrl',
    'controllers/editAddressBookCtrl',
    'controllers/newAddressBookCtrl'
    ], function (angular, viewAddressBookCtrl, editAddressBookCtrl, newAddressBookCtrl) {
        'use strict';
        var controllers = angular.module('App.controllers', []);
        controllers.controller('viewAddressBookCtrl', viewAddressBookCtrl);
        controllers.controller('editAddressBookCtrl', editAddressBookCtrl);
        controllers.controller('newAddressBookCtrl', newAddressBookCtrl);
        return controllers;
    });


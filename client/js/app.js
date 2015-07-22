define(['angular', 'angular-route', 'angular-cookie'], function (angular) {
    'use strict';

    // Declare app level module which depends on filters, and services
    return angular.module('App', [
		'ngRoute',
		'ngCookies',
		'App.services',
		'App.controllers'
	]);
});

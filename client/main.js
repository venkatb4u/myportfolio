requirejs.config({

    paths: {
        underscore: 'lib/underscore/underscore',
        angular: 'lib/angular/angular',
        'angular-cookie': 'lib/angular-cookies/angular-cookies',
        'angular-route': 'lib/angular-route/angular-route',
        'controllers': 'js/controllers',
        'services': 'js/services',
        'providers': 'js/providers',
        'filters': 'js/filters',
        'directives': 'js/directives',
        'app': 'js/app'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        'angular': {
            exports: 'angular'
        },
        'states': {
            deps: ['angular'],
            exports: 'states'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-cookie': {
            deps: ['angular']
        }
    },
    priority: [
		'angular'
	]
});

requirejs(['angular',
            'app',
            'underscore',
            'js/routes',
            'lib/jquery/jquery',
            'services/services',
            'controllers/controllers'
           ], function (angular, app, _) {
               angular.element(document).ready(function () {
                   angular.bootstrap(document, ['App']);
                   document.getElementsByTagName('html')[0].dataset.ngApp = 'App';
               });

           });

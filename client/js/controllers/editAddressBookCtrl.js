define([], function () {
    'use strict';

    var editAddressBookCtrl = function ($scope,$rootScope,$routeParams,$location,ContactService) {
        $scope.viewName = "Edit AddressBook";
        $rootScope.ngView1Active = '';
        $rootScope.ngView2Active = 'active';
        $rootScope.ngView3Active = '';


        var routeObj = $routeParams;
        var findId = {"id":parseInt(routeObj.id)};
        var editContactDetails = _.findWhere(ContactService.contacts, findId);

        $scope.newcontact = editContactDetails;
        $scope.saved = false;

        $scope.saveContact = function () {
            var result = ContactService.save($scope.newcontact);
            $scope.showMsg = false;
            if(result==="added"){
            	$scope.successMsg = result;
            	$scope.showMsg = true;

            } else if (result==="saved"){
            	$scope.successMsg = result;
            	$scope.showMsg = true;
            }
            $scope.saved = true;
            $scope.newcontact = {};
        };

        $scope.delete = function (id) {
            ContactService.delete(id);
            if ($scope.newcontact.id == id) $scope.newcontact = {};
        };

        $scope.edit = function (id) {
            $scope.newcontact = angular.copy(ContactService.get(id));
        };

        $scope.goToView = function(){
        	$location.path('/viewAddressBook');
        };

    };

    return editAddressBookCtrl;
});
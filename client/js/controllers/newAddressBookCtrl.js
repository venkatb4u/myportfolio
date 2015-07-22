define([], function () {
    'use strict';

    var newRecordController = function ($scope,$rootScope,$routeParams,$location,ContactService) {
        $scope.viewName = "Add New AddressBook";
        $rootScope.ngView1Active = '';
        $rootScope.ngView2Active = '';
        $rootScope.ngView3Active = 'active';


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

        $scope.goToView = function(){
        	$location.path('/viewAddressBook');
        };

    };

    return newRecordController;
});
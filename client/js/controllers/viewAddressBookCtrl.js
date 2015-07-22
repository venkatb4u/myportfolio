define([], function () {
    'use strict';

    var viewAddressBookCtrl = function ($scope, $rootScope,$location,$timeout,ContactService) {
        $scope.viewName = "Address Book";
        $rootScope.ngView1Active = 'active';
        $rootScope.ngView2Active = '';
        $rootScope.ngView3Active = '';

        // LIST OUT OF CONTACT LIST
        $scope.contacts = ContactService.list();
        $scope.showMsg = false;

        $scope.goToEdit = function(id){
        	$location.path("editAddressBook/"+id);
        };

        $scope.delete = function (id) {
            var obj = ContactService.get(id);
            var ques = "Do you want delete '"+obj.name+"' record?";
            if(confirm(ques)){
                ContactService.delete(id);
                $scope.showMsg = true;
                $timeout(function(){$scope.showMsg = false}, 3000);
            } else {
                $location.path("viewAddressBook/");
            }

        };

        $scope.goToNewRecord = function(){
        	$location.path("/newAddressBook");
        };

    };
    return viewAddressBookCtrl;
});
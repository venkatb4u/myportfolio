define(['angular','angular-cookie'], function (angular, ngCookies) {
    'use strict';

    var services = angular.module('App.services', ['ngCookies'])
                            .value('version', '0.1');

    services.service('ContactService', ['$cookies', '$cookieStore', function ($cookies, $cookieStore) {
        var that = this;

        // Retrieving a cookie
        var myAddressBook = $cookies.myAddressBook;

        //contacts array to hold list of all contacts
        that.contacts = ((typeof $cookieStore.get('myAddressBook') !=='undefined')?$cookieStore.get('myAddressBook'):[] );
        if(that.contacts.length===0){
            that.contacts = [{
                id: 0,
                'name': 'Viral',
                'address': 'Chennai',
                'email': 'hello@gmail.com',
                'phone': '123234344'
            },{
                id: 1,
                'name': 'Dinesh',
                'address': 'Mumbai',
                'email': 'kumar@gmail.com',
                'phone': '9994336648'
            },{
                id: 2,
                'name': 'Anand',
                'address': 'Tokiyo',
                'email': 'babu@gmail.com',
                'phone': '123234344'
            },{
                id: 3,
                'name': 'Jaga',
                'address': 'Londan',
                'email': 'Jaga@gmail.com',
                'phone': '123234344'
            },{
                id: 4,
                'name': 'Arun',
                'address': 'San fancisco',
                'email': 'Arun@gmail.com',
                'phone': '123234344'
            },{
                id: 5,
                'name': 'Mullai',
                'address': 'Dubai',
                'email': 'Mullai@gmail.com',
                'phone': '123234344'
            }];
        }

        //to create unique contact id
        var uid = parseInt(that.contacts.length+1);

        // Setting a cookie
        $cookieStore.put('myAddressBook', that.contacts);

        //save method create a new contact if not already exists
        //else update the existing object
        that.save = function (contact) {
            if (contact.id == null) {
                //if this is new contact, add it in contacts array
                contact.id = uid++;
                that.contacts.push(contact);

                $cookieStore.put('myAddressBook', that.contacts);

                return 'added';
            } else {
                //for existing contact, find this contact using id
                //and update it.
                _.each(that.contacts, function(value, i, list){
                    if (that.contacts[i].id == contact.id) {
                        that.contacts[i] = contact;
                    }
                });

                $cookieStore.put('myAddressBook', that.contacts);

                return 'saved';
            }

        };

        //simply search contacts list for given id
        //and returns the contact object if found
        that.get = function (id) {
        	var findId = { "id": id};
        	return _.findWhere(that.contacts, findId);
        };

        //iterate through contacts list and delete
        //contact if found
        that.delete = function (id) {
            _.each(that.contacts, function(value, i, list){
                if (that.contacts[i].id == id) {
                    that.contacts.splice(i, 1);
                }
            });

            $cookieStore.put('myAddressBook', that.contacts);
        };

        //simply returns the contacts list
        that.list = function () {
            return that.contacts;
        };
    }]);
    return services;
});



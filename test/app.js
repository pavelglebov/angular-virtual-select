import filter from 'lodash/filter';

angular.module('TestApp', ['angular-virtual-select'])
	.controller('TestAppController', function($scope) {
		let listLength = 1000;
		this.list = [];
		for (let i = 0; i < listLength; i++) {
			let obj = {
				label: 'User_#' + Math.round(Math.random()*100000000),
				name: 'John' + Math.round(Math.random()*100000000),
				age: Math.round(Math.random()*100)
			};

			this.list.push(obj);
		}
		
		setInterval(()=> {
			console.log(this);
		}, 1000);

		this.cb = function(reply) {
			console.log(reply);
		}

		this.activate = function(par) {
			$scope.$broadcast('virtualScrollActivate', par);
		}
	})
	.filter('byAge', function() {
		return function(items, limit) {
			let filtered = filter(items, function(item) {
				return item.age <= limit;
			});
			return filtered;
		}
	});
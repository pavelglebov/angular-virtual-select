angular.module('TestApp', ['angular-virtual-select'])
	.controller('TestAppController', function() {
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
	});
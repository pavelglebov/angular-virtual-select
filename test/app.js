angular.module('TestApp', ['angular-virtual-select'])
	.controller('TestAppController', function() {
		let listLength = 1000;
		this.list = [];
		for (let i = 0; i < listLength; i++) {
			this.list.push('User_#' + Math.round(Math.random()*100000000));
		}
	});
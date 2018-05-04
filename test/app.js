import filter from 'lodash/filter';
import 'ui-select';

angular.module('TestApp', ['angular-virtual-select', 'ui.select'])
	.controller('TestAppController', function($scope) {
		this.listLength = 5000;

		this.composeList = function(size) {
			size = size || this.listLength;

			this.list = [];

			for (let i = 0; i < this.listLength; i++) {
				let obj = {
					label: 'User_#' + Math.round(Math.random()*this.listLength*10),
					name: 'John' + Math.round(Math.random()*this.listLength*10),
					age: Math.round(Math.random()*100)
				};

				this.list.push(obj);
			};
		}

		this.activate = function(par) {
			$scope.$broadcast('virtualScrollActivate', par);
		};

		this.changeArraySize = function(size) {
			this.listLength = size;
			this.selected = null;
			this.selected2 = null;
			this.selected3 = null;

			this.composeList(size);
		};

		this.trustAsHtml = function(value) {
			return $sce.trustAsHtml(value);
		};

		this.composeList();
	})
	.filter('byAge', function() {
		return function(items, limit) {
			let filtered = filter(items, function(item) {
				return item.age <= limit;
			});
			return filtered;
		}
	})
	.filter('propsFilter', function() {
		return function(items, props) {
			var out = [];
			if (angular.isArray(items)) {
				items.forEach(function(item) {
					var itemMatches = false;

					var keys = Object.keys(props);
					for (var i = 0; i < keys.length; i++) {
						var prop = keys[i];
						var text = props[prop].toLowerCase();
						if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
							itemMatches = true;
							break;
						}
					}

					if (itemMatches) {
						out.push(item);
					}
				});
			} else {
				// Let the output be the input untouched
				out = items;
			}

			return out;
		}
	});
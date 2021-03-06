/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_virtual_select_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _angular_virtual_select_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_virtual_select_less__WEBPACK_IMPORTED_MODULE_0__);


(function(window, angular, _) {
	'use strict';

	let virtualSelectModule = angular.module('angular-virtual-select', ['vs-repeat'])
		.directive('virtualSelect', ['$filter', '$document', '$timeout', function($filter, $document, $timeout) {
			return {
				restrict: 'AE',
				replace: true,
				scope: {
					ngModel: '=',
					choicesRepeat: '=',
					filterBy: '=',
					placeholder: '=',
					displayProperty: '=',
					coreProperty: '=',
					singleselect: '=',
					multiselect: '=',
					limit: '=',
					onInputChange: '&',
					dynamicChoices: '=',
					allowCustom: '=',
					selectName: '=',
					localizeDisplayProperty: '=',
					blockModelUpdate: '='
				},
				template: `<div class="virtual-select ui-select-container ui-select-multiple ui-select-bootstrap">
						<div class="ui-select-match">
							<span ng-repeat="item in selected track by $index">
								<span class="ui-select-match-item btn btn-primary btn-xs btn-sm">
									<span class="close ui-select-match-close" ng-click="removeItem(item)">&nbsp;&times;</span>
									<span>{{display(item)}}</span>
								</span>
							</span>
							<input type="text" class="ui-select-search" ng-model="searchText" ng-click="activate()" placeholder="{{ selected.length ? '' : placeholder}}">
						</div>
						<ul ng-if="opened && list.length" class="virtual-select-list-container ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu">
							<li class="virtual-scroll-container ui-select-choices-group" vs-repeat>
								<div class="ui-select-choices-row btn-sm" ng-repeat="choice in list | virtualSelectfilterSelected:choice:selected track by $index" ng-click="itemClick(choice)">
									<a class="virtual-scroll-list-item ui-select-choices-row-inner"> <!-- ui-select layout -->
										<span>
											{{display(choice)}}
										</span>
									</a>
								</div>
							</li>
						</ul>
					</div>`,
				link: function (scope, element, attrs) {
					let singleselect = attrs.singleselect != null;
					let multiselect = attrs.multiselect != null;
					let dynamicChoices = attrs.dynamicChoices != null;
					let allowCustom = attrs.allowCustom != null;

					let inputChangeFunctionProvided = attrs.onInputChange;

					let jsonsify = function (target) {
						let jsonsified = target;

						if (target && typeof target == 'object') {
							jsonsified = JSON.parse(angular.toJson(jsonsified));
						}

						return jsonsified;
					};

					if (!singleselect && !multiselect) {
						multiselect = true;
					}

					let initialList;

					let initialize = function () {
						initialList = angular.copy(scope.choicesRepeat);
						initialList = jsonsify(initialList);

						scope.list = angular.copy(initialList);
					};

					initialize();

					let applyFilters = function () {
						if (scope.filterBy) {
							let haveSomeFilters = _.some(scope.filterBy, function (val) {
								return !_.isUndefined(val);
							});

							let newVal;

							if (haveSomeFilters) {
								newVal = angular.copy(initialList);
							}

							_.each(scope.filterBy, function (filterValue, filterName) {
								if (filterValue) {
									newVal = $filter(filterName)(newVal, filterValue);
								}
							});

							if (haveSomeFilters) {
								scope.list = newVal;
								initialList = scope.list;
							}
						}
					};

					scope.$watchCollection('choicesRepeat', function () {

						initialize();

						applyFilters();
						filterBySearchText(scope.searchText);

						if (!scope.blockModelUpdate) {
							restoreSelectedValues();
						}
					}, true);

					let restoreSelectedValues = function () {
						if (typeof scope.selected != 'undefined') {
							let newSelected = [];
							let foundOne = false;

							_.each(scope.selected, function (value) {

								if (scope.coreProperty) {
									foundOne = _.find(scope.list, function (obj) {
										return _.isEqual(jsonsify(obj[scope.coreProperty]), jsonsify(value[scope.coreProperty]));
									});
								}
								else {
									foundOne = _.find(scope.list, function (obj) {
										return _.isEqual(jsonsify(obj), jsonsify(value));
									});
								}

								if (foundOne) {
									newSelected.push(foundOne);
								}
							});

							scope.selected = newSelected;
							updateModel();
						}
					};

					scope.$watchCollection('filterBy', function(newValue, oldValue) {
						if (newValue) {
							if (!_.isEqual(newValue, oldValue)) {
								applyFilters();
							}
						}
					}, true);

					let convert = function (model) {
						let result = [];

						if (typeof model != 'object') {
							let candidate = _.find(initialList, function (item) {
								let target = scope.coreProperty ? item[scope.coreProperty] : item;
								if (typeof target == 'object') {
									target = jsonsify(target);
								}

								return _.isEqual(target, model);
							});

							if (candidate != null) result.push(candidate);
						}
						else if (typeof model == 'object') {
							_.each(model, function (value) {
								let candidate = _.find(initialList, function (item) {
									let target = scope.coreProperty ? item[scope.coreProperty] : item;
									if (typeof target == 'object') {
										target = jsonsify(target);
									}

									return _.isEqual(target, value);
								});

								if (candidate != null) result.push(candidate);
							});
						}

						return result;
					};

					let convertDynamic = function (model) {
						let result = [];

						if (typeof model == 'string') {
							result.push(model);
						}
						else if (typeof model == 'object') {
							_.each(model, function (value) {
								result.push(value);
							});
						}

						return result;
					};

					scope.display = function (item) {
						if (item != null) {
							let result = item;

							if (scope.displayProperty) {
								result = item[scope.displayProperty];
							}
							if (attrs.localizeDisplayProperty != null) {
								result = $filter('i18n')(result, scope.localizeDisplayProperty);
							}

							return result;
						}
						return null;
					};

					let updateModel = function () {
						let result = null;

						if (scope.selected && scope.selected.length) {
							if (scope.coreProperty) {
								result = scope.selected.map(el => el[scope.coreProperty]);
							}
							else {
								result = scope.selected;
							}
						}

						scope.ngModel = result;
					};

					scope.activate = function () {
						if (singleselect && scope.selected && scope.selected.length) {
							return;
						}
						if (multiselect && scope.limit && scope.selected && (scope.limit <= scope.selected.length)) {
							return;
						}

						scope.opened = true;

						$timeout(function () {
							scope.$digest();
						}, 0);
					};

					scope.$on('virtualScrollActivate', function (event, name) {
						if ((name == scope.selectName) && (name != null)) {
							scope.activate();
						}
						else if (name != scope.selectName) {
							disposeElement();
						}
					});

					scope.$watch('opened', function (newVal, oldVal) {
						if (scope.selectName) {
							scope.$emit('vsSpecificOpenStateChange', {name: scope.selectName, val: newVal});
						}
					});

					scope.itemClick = function (choice) {

						let alreadySelected = _.find(scope.selected, function (item) {
							return _.isEqual(item, choice);
						});

						if (!alreadySelected) {
							if (singleselect && scope.selected && !scope.selected.length) {
								scope.selected.push(choice);
								updateModel();
							}
							else if (multiselect) {
								if (!scope.limit || (scope.limit && scope.selected && (+scope.limit > scope.selected.length))) {
									scope.selected.push(choice);
									updateModel();
								}
							}
						}

						if (!multiselect) {
							scope.opened = false;
						}

						if (!allowCustom || (scope.selected && scope.selected.length)) {
							scope.searchText = '';
						}
					};

					scope.removeItem = function (choice) {

						let ind = scope.selected && scope.selected.indexOf(choice);

						if (ind > -1) {
							scope.selected.splice(ind, 1);
							updateModel();
						}

						if (inputChangeFunctionProvided) {
							scope.onInputChange({text: ''});
						}
					};

					let disposeElement = function () {
						scope.opened = false;

						if (!allowCustom || (scope.selected && scope.selected.length)) {
							scope.searchText = '';
						}

						$timeout(function () {
							scope.$digest();
						}, 0);
					};

					let onDocumentClick = function (event) {
						if (!element[0].contains(event.target)) {
							disposeElement();
						}
					};

					scope.$watch('opened', function (newVal, oldVal) {
						if (newVal) {
							document.addEventListener('click', onDocumentClick, true);
						}
						else if (!_.isUndefined(newVal)) {
							document.removeEventListener('click', onDocumentClick, true);
						}
					});

					scope.$watch('ngModel', function (newVal, oldVal) {
						if (newVal && !(typeof newVal == 'object' && !newVal.length)) {
							if (!dynamicChoices && !allowCustom) {
								scope.selected = convert(jsonsify(newVal));
							}
							else {
								if (typeof newVal == 'string') {
									scope.searchText = newVal;
								}
								else {
									scope.selected = newVal;
								}
							}
						}
						else {
							scope.selected = [];
							scope.searchText = '';
						}
					});

					scope.$watch('searchText', function (newVal, oldVal) { // filter by search text
						filterBySearchText(newVal, oldVal);
					});

					let filterBySearchText = function (newVal, oldVal) {
						if (inputChangeFunctionProvided) {
							scope.onInputChange({text: newVal});
						}
						else if (newVal) {
							if (newVal != oldVal) {
								scope.list = _.filter(initialList, function (item) {
									let target = scope.displayProperty ? item[scope.displayProperty] : item;

									return target && target.toLowerCase().indexOf(newVal.toLowerCase()) != -1;
								});
							}
						}
						else {
							scope.list = initialList;
						}

						if (newVal && allowCustom) {
							if (!scope.selected || !scope.selected.length) {
								scope.ngModel = newVal;
							}
						}

						let scrollContainer = document.getElementsByClassName('virtual-scroll-container') && document.getElementsByClassName('virtual-scroll-container')[0];
						if (scrollContainer) {
							scrollContainer.scrollTo(0, 0); // fix issue with vs-repeat scroll
						}

						$timeout(function () {
							scope.$digest();
						}, 0);
					};


					scope.$on('$destroy', function() {
						$document.off('click', onDocumentClick);
					});
				}
			};
		}]).filter('virtualSelectfilterSelected', function() {
			return function(items, item, selected) {
				if (!selected || !selected.length) {
					return items;
				}
				else {
					return _.difference(items, selected);
				}
			};
		});

})(window, window.angular, window._);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
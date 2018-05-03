import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import _ from 'underscore';
window._ = _;

angular.module('TestApp', ['angular-virtual-select'])
  .controller('TestAppController', function() {
  	this.list = new Array(10).fill('John');
  });
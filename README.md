# Angular-virtual-select

Select with virtualization that imitates ui-select behavior and uses bootstrap styles

Based on https://github.com/kamilkp/angular-vs-repeat

<!-- ### Example

#ToDo -->

### Installing

Dependencies:

- [AngularJS 1.x](http://angularjs.org/ "Angular")
- [Angular-vs-repeat](http://github.com/kamilkp/angular-vs-repeat "angular-vs-repeat")
- [Bootstrap 3+](http://getbootstrap.com/ "Bootstrap") (**CSS only**)
- [Underscore](http://underscorejs.org/ "Underscore")

```
npm install angular-virtual-select --save
```

You will then need to include the JS and CSS files for the plugin:
```
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"> (*Just example, Bootstrap version 3 is also OK*)
<link href="node_modules/angular-virtual-select/dist/angular-virtual-select.min.css" rel="stylesheet">
<script src="node_modules/angular-virtual-select/dist/angular-virtual-select.js.min.js"></script>
```

Add the module dependency in your AngularJS app:
```
angular.module('myApp', ['angular-virtual-select']);
```
## Usage

```
<virtual-select choices-repeat="list" ng-model="selected"></virtual-select>
```
**choices-repeat** - *required* Pass an array of elements
**ng-model** - *required* Array, result will be put here

<!-- ### Break down into end to end tests -->

<!-- Explain what these tests test and why -->

<!-- ``` -->
<!-- Give an example -->
<!-- ``` -->

<!-- ### And coding style tests -->

<!-- Explain what these tests test and why -->

<!-- ``` -->
<!-- Give an example -->
<!-- ``` -->

<!-- ## Deployment -->

<!-- Add additional notes about how to deploy this on a live system -->

## Built With

* [Angular-virtual-select](https://github.com/kamilkp/angular-vs-repeat) - Virtualization for ng-repeat

<!-- ## Contributing -->

<!-- Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

<!-- ## Versioning -->

<!-- We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). -->

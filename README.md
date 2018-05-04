# Angular-virtual-select

Select with virtualization that imitates ui-select behavior and uses bootstrap styles

![](https://github.com/pavelglebov/angular-virtual-select/blob/master/example.gif)

Based on https://github.com/kamilkp/angular-vs-repeat

<!-- ### Example

#ToDo -->

## Installing

Dependencies:

- [Angular-vs-repeat](http://github.com/kamilkp/angular-vs-repeat "angular-vs-repeat")
- [Lodash](http://lodash.com "Lodash") (Underscore is also valid)

You can also add Bootstrap.css styles that will override angular-virtual-select basic styles
- [Bootstrap 3+](http://getbootstrap.com "Bootstrap") (CSS only)

```
npm install angular-virtual-select --save
```

Include JS and CSS files:
```html
<!-- Dependencies -->
<script src="node_modules/angular/angular.js"></script>
<script src="node_modules/angular-vs-repeat/dist/angular-vs-repeat.js"></script>
<script src="node_modules/lodash/lodash.js"></script>
<link href="node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet">
<!-- End of Dependencies -->

<!-- Angular-virtual-select -->
<script src="node_modules/angular-virtual-select/dist/angular-virtual-select.min.js"></script>
<link href="node_modules/angular-virtual-select/dist/angular-virtual-select.min.css" rel="stylesheet">
<!-- End of Angular-virtual-select -->
```

Or you can use min file bundles with dependencies:
```html
<script src="node_modules/angular-virtual-select/dist/angular-virtual-select-with-dependecies.min.js"></script>
<link href="node_modules/angular-virtual-select/dist/angular-virtual-select.min.css" rel="stylesheet">
```

Add module dependency to your AngularJS app:
```
angular.module('myApp', ['angular-virtual-select']);
```
## Usage

```html
<virtual-select choices-repeat="myApp.list" ng-model="myApp.selected"></virtual-select>
```

### Options

##### Required Options:

- `choices-repeat` - Array: Pass an array of options
- `ng-model` - Array: Rresult will be put here

##### Additional Options:

- `placeholder` - String: Placeholder `... placeholder="'Select a User'" ...`
- `display-property` - String: In case you pass array of objects, and want to display on UI a particular field `... display-property="'label'" ...`
- `core-property` - String: In case you pass array of objects, and want to pass to ng-model a particular field `... core-property="'name'" ...`
- `singleselect` - Attribute: Only one option can be selected. If `singleselect` is not passed, select defaults to multiselect `... singleselect>`
- `multiselect` - Attribute: Enables multiselect, is default `... multiselect>`
- `limit` - Number: Limit of selected options `... limit="3" ...`
- `filterBy` - Object: Provide a set of filters which will be applied on input list. E.g. `filter-by="{byAge: 18}"`
- `selectName` - String: Used with Events described below `... select-name="'firstVsSelect'" ...`

##### Events:

- `virtualScrollActivate` - Event: Triggers particular select opening. Broadcasted from parent.
- `vsSpecificOpenStateChange` - Event: Tells parent that select open state was changed. Emmitted from virtual-select.

Events could be used to decorate virtual-select into bigger component.

```html
<virtual-select choices-repeat="myApp.list" ng-model="myApp.selected" display-property="'label'" placeholder="'Select a User'" limit="10" multiselect filter-by="{byAge: 18}" select-name="'firstVsSelect'"></virtual-select>
```

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

* [Angular-vs-repeat](https://github.com/kamilkp/angular-vs-repeat) - Virtualization for ng-repeat

<!-- ## Contributing -->

<!-- Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

<!-- ## Versioning -->

<!-- We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). -->

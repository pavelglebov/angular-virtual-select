# Virtual-select

Select with virtualization with bootstrap-like behavior

### Installing

Select has a few dependencies, these are as follows, and must be included before this libraries files:

- [AngularJS 1.x](http://angularjs.org/ "Angular")
- [Bootstrap 3+](http://getbootstrap.com/ "Bootstrap") (CSS only)
- [Underscore](http://underscorejs.org/ "Underscore")
- [Angular-vs-repeat](http://github.com/kamilkp/angular-vs-repeat "angular-vs-repeat")

You can install through npm:
```
npm install virtual-select --save
```

You will then need to include the JS and CSS files for the plugin:
```
<link href="node_modules/virtual-select/dist/angular-virtual-select.min.css" rel="stylesheet">
<script src="node_modules/virtual-select/dist/angular-virtual-select.js.min.js"></script>
```

And finally add the module dependency in your AngularJS app (you can remove ui.bootstrap if you don't want the extra dependency - it is only required for collapse animations and tooltips):
```
angular.module('myApp', ['angular-virtual-select']);
```

## Documentation

#ToDo

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

<!-- ## Built With -->

<!-- * [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used -->
<!-- * [Maven](https://maven.apache.org/) - Dependency Management -->
<!-- * [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds -->

<!-- ## Contributing -->

<!-- Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

<!-- ## Versioning -->

<!-- We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). -->

# Random-Contrast-Compliant
A SCSS helper to generate a Random Color that is Compliant with your specified WCAG contrast guidelines. Import into your SASS/SCSS files and use!

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* An existing functional SASS/SCSS project.
* A functional import process.
  * You’ll need to add Bourbon to your node-sass `includePaths` option. This project should be imported from `dist/_random-contrast-compliant.scss`. How you do this depends on how node-sass is integrated into your project.


### Installing
Install with `NPM` or `Yarn`

```
npm i -D @tabuckner/random-contrast-compliant
```

```
yarn add -D @tabuckner/random-contrast-compliant
```

## Running the tests
Tests are handled by [True](https://www.oddbird.net/true/) and [Jest](https://jestjs.io/).
```
yarn test
```
or...
```
yarn test --watch
```

### And coding style tests
Style Linting can be handled with:
```
yarn lint
```

## Deployment
Add additional notes about how to deploy this on a live system

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors
* **Taylor Buckner** - *Initial work* - [tabuckner](https://github.com/tabuckner)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
* [Sergio Gomes](https://medium.com/@sergiomdgomes) - [WCAG Contrast in SASS](https://medium.com/dev-channel/using-sass-to-automatically-pick-text-colors-4ba7645d2796)

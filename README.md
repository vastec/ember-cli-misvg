[![npm version](https://badge.fury.io/js/ember-cli-misvg.svg)](https://badge.fury.io/js/ember-cli-misvg)
[![Build Status](https://travis-ci.org/vastec/ember-cli-misvg.svg?branch=master)](https://travis-ci.org/vastec/ember-cli-misvg)
![ember-cli version](https://img.shields.io/badge/ember--cli-3.1.4-orange.svg)

# `ember-cli-misvg`

Ember addon to combine SVG files into one JS file and inject it through dedicated component into application. It makes maintenance of SVGs easy and deliver the best possible interaction with SVGs.

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-misvg
```

Usage
------------------------------------------------------------------------------

### Configuration

Define where your SVG icons are in `public` directory (`sourceDirs` param) and where the output 
should be placed (`outputFile` param). Like this:

```javascript
// ember-cli-build.js

let app = new EmberApp(defaults, {
  misvg: {
    files: {
      sourceDirs: 'public/img/svg-icon',
      outputFile: '/assets/svg-sprites.js'
    },
    misvgOptions: {
      indent: 2
    }
  }
});
```

Optionally you can also pass [misvg](https://github.com/vastec/misvg) configuration options via `misvgOptions` property.

### Adding to project

Add generated script file that contains sprites to your project:

```html
// index.html
<script src="{{rootURL}}assets/svg-sprites.js"></script>
```

### Usage via component

Use `misvg-icon` component with the `name` of SVG icon (in align with the filename). You can also scale it via `width`
and `height` params.

```hbs
{{misvg-icon name="star" width=20 height=20}}
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https://github.com/vastec/misvg.git`
* `cd ember-cli-misvg`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

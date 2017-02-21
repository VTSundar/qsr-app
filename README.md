Ionic 2 App Base
=====================

This is the base template for Ionic 2 starter apps.

## Using this project

You'll need the Ionic CLI with support for v2 apps:

```bash
$ npm install -g ionic
```

Then run:

```bash
$ ionic start myApp
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/docs/v2/getting-started/) page.

Initial setup and run app
==========================
1) Install node modules npm install
2) Install cordova plugins
# Only install all plugins
ionic state restore --plugins
# or
cordova state restore --plugins

# Only remove all installed plugins
ionic state clear -- plugins

# Remove all then Install all plugins in package.json
ionic state reset -- plugins

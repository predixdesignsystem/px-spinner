# px-spinner [![Build Status](https://travis-ci.org/predixdesignsystem/px-spinner.svg?branch=master)](https://travis-ci.org/predixdesignsystem/px-spinner)

## Overview

`Px-spinner` is a Predix UI component used to visually indicate that work is being done for an indefinite period of time, e.g. when data is being loaded, or a view is changing.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm, and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line:

```
bower install px-spinner --save
```

Second, import the component in your application with the following tag in your head:

```
<link rel="import" href="/bower_components/px-spinner/px-spinner.html"/>
```

Finally, use the component in your application:

SHOW the spinner by default when the page loads
```
<px-spinner></px-spinner>
```

HIDE the spinner by default when the page loads
```
<px-spinner finished></px-spinner>
```

### Layout

The `px-spinner` centers itself vertically and horizontally within its parent element.

## Documentation

Read the full API and view the demo [here](https://www.predix-ui.com/#/elements/px-spinner).

## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

From the component's directory, to start a local server run:

```
$ gulp serve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.




### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/predixdesignsystem/px-spinner/issues) to submit any bugs you might find.

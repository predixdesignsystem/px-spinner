Px-Spinner [![Build Status](https://travis-ci.org/PredixDev/px-spinner.svg?branch=master)](https://travis-ci.org/PredixDev/px-spinner)
-----------------------------------------------

## Overview

Px-Spinner is a Predix Experience ('Px') component used to indicate when data is being loaded, a view is changing, or any place a visual indication is needed to show that work is being done for an indefinite period of time.

## documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-spinner).

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line.

```
bower install px-spinner --save
```

Second, import the component to your application with the following tag in your head.

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

The spinner centers itself vertically and horizontally within it's parent element.

## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ grunt sass
```

From the component's directory, to start a local server run:

```
$ grunt depserve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.


### DevMode
Devmode runs `grunt depserve` and `grunt watch` concurrently so that when you make a change to your source files and save them, your preview will be updated in any browsers you have opened and turned on LiveReload.
From the component's directory run:

```
$ grunt devmode
```

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-spinner/issues) to submit any bugs you might find.

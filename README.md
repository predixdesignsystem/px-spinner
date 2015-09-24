Px-Spinner
-----------------------------------------------

## Overview

Px-Spinner is a Predix Experience ('Px') component used to indicate when data is being loaded, a view is changing, or any place a visual indication is needed to show that work is being done for an indefinite period of time.

### Attributes

**finished**
A spinner that has 'finished', is hidden. Use this attribute to hide the spinner by default.

**size**
The size, in pixels, of the spinner. Refers to the inner dimension of the circle - no units necessary.

### Function Calls

**show**
What it says on the tin.

**hide**
What it says on the tin x2

### Examples

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

### Known Issues

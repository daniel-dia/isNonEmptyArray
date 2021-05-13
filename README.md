# _isNonEmptyArray_

helper to define is arg Array and has some values.

# _examples_

```
const isNonEmptyArray = require('is-non-empty-array');

isNonEmptyArray([ "some value" ]); // returns true

isNonEmptyArray([]); // returns false
isNonEmptyArray({}); // returns false
isNonEmptyArray(null); // returns false
isNonEmptyArray(undefined); // returns false
isNonEmptyArray('some string'); // returns false

```

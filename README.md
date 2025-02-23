# JavaScript: Unexpected Addition Behavior with undefined and null

This repository demonstrates an uncommon, yet potentially problematic, behavior in JavaScript's addition operator when dealing with `undefined` and `null` values.

The core issue lies in how JavaScript handles type coercion during addition.  `undefined` results in `NaN` (Not a Number), while `null` is coerced to `0`.

This can lead to unexpected results and potential bugs if not handled carefully.

## Bug Report

The `bug.js` file showcases the unexpected behavior:

- Adding `undefined` to a number results in `NaN`.
- Adding `null` to a number results in the number itself (as `null` is treated as 0).

## Solution

The `bugSolution.js` file provides a solution involving explicit type checking and handling to mitigate the unexpected behavior.
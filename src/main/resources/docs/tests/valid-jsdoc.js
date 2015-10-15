//#Patterns: valid-jsdoc
//#Issue: {"severity": "Info", "line": 6, "patternId": "valid-jsdoc"}
//#Issue: {"severity": "Info", "line": 15, "patternId": "valid-jsdoc"}
//#Issue: {"severity": "Info", "line": 23, "patternId": "valid-jsdoc"}

/**                                 //error Missing JSDoc parameter description for 'num1'.
 * A description
 * @param {int} num1
 * @returns {void}
 */
function foo(num1) {
  // ...
}

/**                                 //error Missing JSDoc return description.
 * A description
 * @returns {int}
 */
function foo() {
  // ...
}

/**                                 //error JSDoc syntax error.
 * A description
 * @returns Something awesome
 */
function foo() {
  // ...
}

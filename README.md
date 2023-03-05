# Challenge: Convert to numbers

## Objective

Given an array of items of any data type, return an array of numbers in the same order based on the following rules:

- Actual numbers (`1`,`2`,`3`, etc.) should be kept.
- Strings containing numerals (`"1"`,`"2"`, etc.) should converted to numbers.
- Strings containing words for numerals other than zero (`"one"`, `"two"`, etc.) should be converted to the appropriate number.
- _Any other_ value must be, like, a word or something else way cooler than any number between `1` and `9`. These values should be converted to `10`.

## Instructions

Write your code inside the `convertToNumbers` function in `index.js`.

The test case and expected result are stored in the `testCase` and `expectedResult` variables in that file. Feel free to peek!

Run `node index.js` to test your function and get feedback!

## Resources

- [MDN:`parseInt` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [MDN: `Number` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)
- [MDN: `NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

If you think you need something like this but don't want to type it out, feel free to steal this code snippet:

```js
    const numberWords = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
```

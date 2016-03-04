# Roman Numerals TDD Kata

The goal of this code kata is to learn or practice Test Driven Development on a small problem: converting numbers to [roman numeral](http://en.wikipedia.org/wiki/Roman_numerals) strings.


## Roman Numerals

The seven symbols used in Roman numerals are:

* `I` = 1
* `V` = 5
* `X` = 10
* `L` = 50
* `C` = 100
* `D` = 500
* `M` = 1000

Numeric values are created by combining symbols using the largest values possible until you reach the desired value.
For example, `VII` equals 7 and `XXVI` equals 26.

However, there are a few specific cases where a subtractive notation is used:

* `IV` = 4
* `IX` = 9
* `XL` = 40
* `XC` = 90
* `CD` = 400
* `CM` = 900

So for example, `XCV` equals 95 and `MMXIV` equals 2014.


## Test Driven Development

The basics of TDD can be summed up by describing a single flow known as "red, green, refactor". There are 3 steps:

1. Write a failing (red) test
2. Make the test pass (green)
3. Refactor your code as needed to keep it clean while keeping the tests passing

To "test drive" this kata, just repeat those 3 steps over and over until you've got a working solution.


## Getting Started

This repository is set up to practice the kata in [Node.js](https://nodejs.org) using the [mocha](https://mochajs.org/) test framework.

If you don't have Node.js installed, you'll need to do that first. Then in the root directory of this repository, run `npm install` to install mocha.

Then run `npm test` to start the test framework.

Now you can begin writing your first test in the `test/roman-tests.js` folder. For example, you might start by adding this test within the `describe` block:

```
it('should convert 1 to I', function () {
  var result = roman.toRoman(1);
  assert.equal(result, 'I');
});
```

Then make it pass by editing `roman.js` so it returns `'I'`

At this point there won't be much to refactor, so you can write the next failing test and continue with the red, green, refactor steps.


## Example Solution

The `solution` branch of this repository contains a step-by-step history of going through this kata following the red, green, refactor pattern.

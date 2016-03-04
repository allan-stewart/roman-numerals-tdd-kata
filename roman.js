exports.toRoman = function (input) {
  var mapping = [
    {numeral: 'XL', value: 40},
    {numeral: 'X', value: 10},
    {numeral: 'IX', value: 9},
    {numeral: 'V', value: 5},
    {numeral: 'IV', value: 4},
    {numeral: 'I', value: 1},
  ];
  var output = '';
  var repeatResult;

  mapping.forEach(function (item) {
    repeatResult = repeatNumerals(input, item.value, item.numeral);
    output += repeatResult.numerals;
    input -= repeatResult.subtracted;
  });

  return output;
};

function repeatNumerals(input, numeralValue, numeral) {
  var output = { numerals: '', subtracted: 0};
  while (input >= numeralValue) {
    output.numerals += numeral;
    output.subtracted += numeralValue;
    input -= numeralValue;
  }
  return output;
}

exports.toRoman = function (input) {
  var mapping = [
    {numeral: 'XL', value: 40}
  ];
  var output = '';
  var repeatResult;

  mapping.forEach(function (item) {
    repeatResult = repeatNumerals(input, item.value, item.numeral);
    output += repeatResult.numerals;
    input -= repeatResult.subtracted;
  });

  repeatResult = repeatNumerals(input, 10, 'X');
  output += repeatResult.numerals;
  input -= repeatResult.subtracted;

  repeatResult = repeatNumerals(input, 9, 'IX');
  output += repeatResult.numerals;
  input -= repeatResult.subtracted;

  repeatResult = repeatNumerals(input, 5, 'V');
  output += repeatResult.numerals;
  input -= repeatResult.subtracted;

  repeatResult = repeatNumerals(input, 4, 'IV');
  output += repeatResult.numerals;
  input -= repeatResult.subtracted;

  repeatResult = repeatNumerals(input, 1, 'I');
  output += repeatResult.numerals;
  input -= repeatResult.subtracted;

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

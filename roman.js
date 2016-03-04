exports.toRoman = function (input) {
  var output = '';
  if (input >= 40) {
    output += 'XL';
    input -= 40;
  }
  while (input >= 10) {
    output += 'X';
    input -= 10;
  }
  if (input == 9) {
    output += 'IX';
    input -= 9;
  }
  if (input >= 5) {
    output += 'V';
    input -= 5;
  }
  if (input >= 4) {
    output += 'IV';
    input -= 4;
  }
  var repeatResult = repeatNumerals(input, 1, 'I');
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

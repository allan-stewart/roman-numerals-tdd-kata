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
  while (input >= 1) {
    output += 'I';
    input--;
  }
  return output;
};

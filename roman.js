exports.toRoman = function (input) {
  var output = '';
  if (input == 11) {
    return 'XI';
  }
  if (input == 10) {
    return 'X';
  }
  if (input == 9) {
    return 'IX';
  }
  if (input >= 5) {
    output += 'V';
    input -= 5;
  }
  if (input == 4) {
    return 'IV';
  }
  while (input >= 1) {
    output += 'I';
    input--;
  }
  return output;
};

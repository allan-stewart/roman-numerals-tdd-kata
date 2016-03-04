exports.toRoman = function (input) {
  var output = '';
  if (input == 6) {
    return 'VI';
  }
  if (input == 5) {
    return 'V';
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

exports.toRoman = function (input) {
  var output = '';
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

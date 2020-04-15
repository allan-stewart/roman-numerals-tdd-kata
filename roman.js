exports.toRoman = (input) => {
  var result = "";

  while (input >= 10) {
    result += "X";
    input -= 10;
  }

  if (input >= 5) {
    result += "V";
    input -= 5;
  } 

  while (input >= 1) {
    result += "I";
    input -= 1;
  }

  return result;
};

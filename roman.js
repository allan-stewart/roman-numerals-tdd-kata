exports.toRoman = (input) => {
  let result = "";

  if (input >= 50) {
    result += "L";
    input -= 50;
  }

  if (input === 49) {
    result += "IL";
    input -= 49;
  }

  if (input === 44) {
    result += "XLIV";
    input -= 44;
  }

  if (input === 40) {
    result += "XL";
    input -= 40;
  }

  while (canUseX(input)) {
    result += "X";
    input -= 10;
  }

  if (canUseIX(input)) {
    result += "IX";
    input -= 9;
  }

  if (canUseV(input)) {
    result += "V";
    input -= 5;
  }

  if (canUseIV(input)) {
    result += "IV";
    input -= 4;
  }

  while (canUseI(input)) {
    result += "I";
    input -= 1;
  }

  return result;
};

const canUseI = (input) => {
  return input >= 1;
};

function canUseIV(input) {
  return input === 4;
}

function canUseIX(input) {
  return input === 9;
}

function canUseX(input) {
  return input >= 10;
}

function canUseV(input) {
  return input >= 5;
}

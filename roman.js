exports.toRoman = (input) => {
  let result = "";

  const romanCases = [
    { condition: canUseM, symbol: "M", value: 1000 },
    { condition: canUseCM, symbol: "CM", value: 900 },
    { condition: canUseD, symbol: "D", value: 500 },
    { condition: canUseCD, symbol: "CD", value: 400 },
    { condition: canUseC, symbol: "C", value: 100 },
    { condition: canUseXC, symbol: "XC", value: 90 },
    { condition: canUseL, symbol: "L", value: 50 },
    { condition: canUseXL, symbol: "XL", value: 40 },
    { condition: canUseX, symbol: "X", value: 10 },
    { condition: canUseIX, symbol: "IX", value: 9 },
    { condition: canUseV, symbol: "V", value: 5 },
    { condition: canUseIV, symbol: "IV", value: 4 },
    { condition: canUseI, symbol: "I", value: 1 },
  ];
  romanCases.forEach((romanCase) => {
    while (romanCase.condition(input)) {
      result += romanCase.symbol;
      input -= romanCase.value;
    }
  });

  return result;
};

function canUseM(input) {
  return input >= 1000;
}

function canUseD(input) {
  return input >= 500;
}

function canUseC(input) {
  return input >= 100;
}

function canUseL(input) {
  return input >= 50;
}

function canUseX(input) {
  return input >= 10;
}

function canUseV(input) {
  return input >= 5;
}

function canUseI(input) {
  return input >= 1;
}

// multiple character

function canUseCM(input) {
  return input >= 900;
}

function canUseCD(input) {
  return input >= 400;
}

function canUseXC(input) {
  return input >= 90;
}

function canUseXL(input) {
  return input >= 40;
}

function canUseIX(input) {
  return input === 9;
}

function canUseIV(input) {
  return input === 4;
}
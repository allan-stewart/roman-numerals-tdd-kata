exports.toRoman = (input) => {
  let result = "";

  const romanCases = [
    { condition: canUseC, symbol: "C", value: 100 },
    { condition: canUseXC, symbol: "XC", value: 90 },
    { condition: canUseL, symbol: "L", value: 50 },
    { condition: canUseIL, symbol: "IL", value: 49 },
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

function canUseXC(input) {
  return input >= 90;
}

function canUseXL(input) {
  return input >= 40;
}

function canUseIL(input) {
  return input >= 49;
}

function canUseIX(input) {
  return input === 9;
}

function canUseIV(input) {
  return input === 4;
}
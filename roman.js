exports.toRoman = (input) => {
  let result = "";

  const romanCases = [
    { condition: canUseL, symbol: "L", value: 50 },
    { condition: caseIL, symbol: "IL", value: 49 },
    { condition: caseXLIV, symbol: "XLIV", value: 44 },
    { condition: caseXL, symbol: "XL", value: 40 },
    { condition: canUseX, symbol: "X", value: 10 },
    { condition: caseIX, symbol: "IX", value: 9 },
    { condition: canUseV, symbol: "V", value: 5 },
    { condition: caseIV, symbol: "IV", value: 4 },
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

const canUseI = (input) => {
  return input >= 1;
};

function caseXL(input) {
  return input === 40;
}

function caseXLIV(input) {
  return input === 44;
}

function caseIL(input) {
  return input === 49;
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

function caseIV(input) {
  return input === 4;
}

function caseIX(input) {
  return input === 9;
}

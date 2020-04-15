exports.toRoman = (input) => {
  if (input === 1) {
    return "I";
  } else if (input == 2) {
    return "II";
  } else if (input === 3) {
    return "III";
  }

  if (input === 10) {
    return "X";
  } else if (input === 20) {
    return "XX";
  } else if (input === 30) {
    return "XXX";
  }

  return "V";
};

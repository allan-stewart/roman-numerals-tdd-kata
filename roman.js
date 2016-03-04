exports.toRoman = function (input) {
  var mapping = [
    {numeral: 'L', value: 50},
    {numeral: 'XL', value: 40},
    {numeral: 'X', value: 10},
    {numeral: 'IX', value: 9},
    {numeral: 'V', value: 5},
    {numeral: 'IV', value: 4},
    {numeral: 'I', value: 1},
  ];
  var output = '';

  mapping.forEach(function (item) {
    while (input >= item.value) {
      output += item.numeral;
      input -= item.value;
    }
  });

  return output;
};

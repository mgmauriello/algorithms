var romanToInt = function (s) {
  const numerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let sum = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let current = numerals[s[i]], prev = numerals[s[i + 1]];

    if (prev && current < prev) {
      sum -= current;
    } else {
      sum += current;
    }
  }

  /* return result */
  return sum;
};

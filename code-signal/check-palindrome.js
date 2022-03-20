function checkPalindrome(input) {
  input = input.split(' ').join('');

  var newStr = '';
  for (var i = input.length - 1; i >= 0; i--) {
    newStr += input[i];
  }
  return newStr === input;
}

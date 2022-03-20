function solution(inputString) {
  inputString = inputString.split(' ').join('');

  var newStr = '';
  for (var i = inputString.length - 1; i >= 0; i--) {
    newStr += inputString[i];
  }
  return newStr === inputString;
}

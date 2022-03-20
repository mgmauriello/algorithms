function adjacentElements(inputArr) {
  var cb, i;
  for (i = 1; i < inputArr.length; i++) {
    if (i === 1 || inputArr[i - 1] * inputArr[i] > cb) {
      cb = inputArr[i - 1] * inputArr[i];
    }
  }
  return cb;
}

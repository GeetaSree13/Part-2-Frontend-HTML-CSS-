function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    // Recursive case: return an array with startNum followed by the recursive call
    return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
  }
};

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
return arr.reduce((product, subArray) => {
    return product * subArray.reduce((subProduct, num) => subProduct * num, 1);
  }, 1);
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

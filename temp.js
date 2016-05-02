function getProductsOfAllIntsExceptAtIndex(arr) {
  var ret = [];
  var rest = [];
  for (var i = 0; i < arr.length; i++) {
    var rest = arr.slice();
    rest.splice(i, 1);
    console.log(rest);
    var result = rest[0];
    if (rest.length === 1) {
      ret.push(result);
      return;
    }
    for (var j = 1; j < rest.length; j++) {
      result = result * rest[j];
    }
    ret.push(result);
  }
  return ret;
}

console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 0, 4]));

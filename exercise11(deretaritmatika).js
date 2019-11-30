function tentukanDeretAritmatika(arr) {
    var aritmatika = true
    var jarak = Math.abs(arr[0] - arr[1])
    for (var i=0; i < arr.length-1 && aritmatika === true; i++) {
        if (jarak !== Math.abs(arr[i] - arr[i+1])) {
            aritmatika=false
        }
    }
      return aritmatika  
}
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // fals
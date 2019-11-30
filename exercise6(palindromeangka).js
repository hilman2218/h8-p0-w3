function angkaPalindrome(num) {
    num ++;
    var strnum=String(num)
    var palnum= ''
    for (var i =strnum.length-1; i>=0; i--) {
        palnum += strnum[i]
    }
    if (strnum === palnum) {
        return num;
    }else {
        return angkaPalindrome(num)
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
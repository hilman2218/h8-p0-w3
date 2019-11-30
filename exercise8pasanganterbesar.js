function pasanganTerbesar(num) {
    var arr= []
    var konNum= String(num) 
    for (var i=0; i < konNum.length-1; i++) {
        arr.push(konNum[i] + konNum[i+1]) 
    }
    var terbesar = parseInt(arr[0]) 
    for (var j=1; j < arr.length; j++) {
        if (terbesar < parseInt(arr[j])) { //
            terbesar= parseInt(arr[j])
        }
    }
    return terbesar 
} 
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
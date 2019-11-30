var a = [25, 15, 18, 19, 10]
function bubleSort (a) {
    var swap;
    do {
        swap = false
        for (var i=0; i <a.length; i++ ) {
            // membandingkan nilai array
            if (a[i] > a[i+1]) {
            var temp = a[i] // penampungan sementara nilai perbandingan
             a[i] = a[i+1]
             a[i+1]= temp
            swap = true // pertukran dilakukan jika nilai swapp true
            }
        }    
    } while (swap)
}
bubleSort(a)
console.log(a)
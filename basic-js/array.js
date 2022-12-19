// var scores = [
//     [10, 20, 30], [15, 25, 35],[5, 7, 9]
// ];

// console.log(scores[2],[1]);

// contoh
// var angka = [1,2,3]
// var total = angka[0] * angka.length
// console.log(angka.length)

/** ================================================================ */

// Soal
// (Syarat lulus IPK minimum 3,0)
// Hasil
 /*
    1. Martin, IPK = 3.5, Lulus
    2. Udin, IPK = 3.0, Lulus
    3. Mamang, IPK = 2.1, Gagal
 */

var murid = [
    [1, "Martin", 3.5],
    [2, "Udin", 3.0],
    [3, "Mamang", 2.1]
];

for(var i = 0; i < murid.length; i++){
    if(murid[i][2] >= 3.0){
        console.log(murid[i][0] + ". " + murid[i][1] + 
        ", IPK = " + murid[i][2] + ", Lulus")
    }else{
        console.log(murid[i][0] + ". " + murid[i][1] + 
        ", IPK = " + murid[i][2] + ", Gagal")
    }
}
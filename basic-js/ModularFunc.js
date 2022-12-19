/*
    Buatlah 2 fungsi yang :
    1. Mengubah kalimat menjadi larik.
    2. Menghitung jumlah elemen pada larik.
    Contoh masukkan : "Hello selamat pagi" akan memberikan hasil 3
*/

function splitToArray(str){
    var tempArray = str.split(" "); // pisah pakai spasi
    return tempArray;
}

function jumlahKata(kalimat){
    var result = splitToArray(kalimat);
    var arrayLength = result.length;
    return arrayLength;
}

console.log(jumlahKata("Hello Selamat Pagi"));
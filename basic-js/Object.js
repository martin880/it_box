// Kumpulan nilai yang memiliki kunci
/*
var student = {
    name : "Martin",
    gpa : 3.01,
    isGraduated : true,
};

console.log(student.name);
console.log(student.gpa);
console.log(student["isGraduated"]); // bisa dipanggil seperti ini
*/

/** Latihan merubah array menjadi objek */

var buah = ["durian", 75000, true];

function changeToObject (array) {
    var result = {}
    result.jenis = array[0];
    result.harga = array[1];
    result.enak = array[2];
    return result;
}

console.log(changeToObject(buah));
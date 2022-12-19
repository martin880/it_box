/* hoisting => proses dimana sintaks akan diangkat/dijalankan 
terlebih dahulu meski urutannya tidak sesuai */

// masih bisa dijalankan
console.log(x);
var x;

// tidak bisa diakses sebelum diinisialisasikan
console.log(y);
let y;
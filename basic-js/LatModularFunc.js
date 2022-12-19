// Soal
/*
    Cek apakah panjang sebuah kata sandi di antara 5 dan 12.
    Buatlah function untuk :
    - Menghitung jumlah karakter
    - Cek apakah panjang karakter antara 5 dan 12

    Contoh :
    Kata sandi : 123
    // Masukkan karakter antara 5 dan 12
    Kata sandi : abcdefgh
    // Kata Sandi diterima
 */

function countLength(str){
    var countWord = str.length;
    return countWord;
}

function checkLength(str){
    var strLength = countLength(str);
    if(strLength >= 5 && strLength <= 12){
        return "Kata sandi diterima";
    }else{
        return "Masukkan karakter antara 5 dan 12";
    }
}

console.log(checkLength("123"));
console.log(checkLength("abcdefg"));

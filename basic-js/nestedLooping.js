/*Latihan => buatlah tampilan seperti berikut ini :
    1
    12
    123
    1234
    12345
*/


for(var i = 1; i <= 5; i++){
    var temp = ''; // variabel penampung sementara
    for( var j = 1; j <= i; j++){
        temp = temp + j;
    }
    console.log(temp);
}


// Latihan 2
var total = 0;
for(var i = 1; i <= 5; i++) {
total = total + i;
}
console.log(total)
// Logika nya dicetak angka 1 + 2 + 3 + 4 + 5
// Output 15

//Latihan 3 
for(var i = 0 ; i < 2; i+=2){
    console.log(i);
}
// output 0
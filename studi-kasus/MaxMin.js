// Mencari nilai terbesar dan terkecil
function nilaiMinMax(arrayAngka){
    var max = arrayAngka[0];
    var min = arrayAngka[0];

    for(var i = 0; i < arrayAngka.length; i++){
        if(max < arrayAngka[i]){
            max = arrayAngka[i];
        }
        if(min > arrayAngka[i]){
            min = arrayAngka[i];
        }
    }

    return{
        max : max,
        min : min
    }
}

console.log(nilaiMinMax([10,3,5,12,7]));
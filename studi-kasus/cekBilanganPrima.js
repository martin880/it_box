function cekBilanganPrima(angka){
    var flag = 0;
    for(var i = 1; i <= angka; i++){
        if(angka % i === 0){
            flag++;
        }
    }
    if(flag === 2){
        return true;
    }else{
        return false;
    }
};

console.log(cekBilanganPrima(10));

// Bilangan Prima : bilangan yang hanya memiliki 2 faktor, yaitu bilangan 1 dan bilangan itu sendiri
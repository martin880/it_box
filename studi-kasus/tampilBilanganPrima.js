function tampilBilanganPrima(){
    for(var i = 1; i <= 100; i++){
        var a = 0;
        for(var j = 1; j <= i; j++){
            if(i % j == 0){
                a++;
            }
        }
        if(a == 2){
            console.log(i);
        }
    }
}
tampilBilanganPrima();

// Bilangan Prima : bilangan yang hanya memiliki 2 faktor, yaitu bilangan 1 dan bilangan itu sendiri
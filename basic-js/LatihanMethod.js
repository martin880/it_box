var wanita = {
    Nama : "Caca",
    Berat : 45,
    Tinggi : 155,
    Hobi : ["Nonton","Makan"],

    showProfile : function(){
        console.log("Hobi",this.Nama); // this menunjuk ke objek itu sendiri
        for(var i = 0; i < this.Hobi.length; i++){
            console.log(i+1 + ". " + this.Hobi[i])
        }
    }
}

// Cara menampilkan objek method
wanita.showProfile();
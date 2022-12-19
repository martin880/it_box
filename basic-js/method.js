/* Method dalam objek -> fungsi yang berada dalam objek */

var mobil = {
    // key
    name : "Civic",
    Cc : 5000,

    // method
    startEngine : function() {
        console.log("Mesin nyala");
    }
}

mobil.startEngine();
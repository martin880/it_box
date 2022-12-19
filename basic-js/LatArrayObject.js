var items = [
    ["Asus", "Laptop", 7500000],
    ["Dell", "Laptop", 7000000],
    ["Corsair", "RAM", 1250000]
];

function changeToArrayOfObject (array2D) {
    var result = [];
    var tempObj = {};

    for(var i = 0; i < array2D.length; i++){
        tempObj.name = array2D[i][0];
        tempObj.type = array2D[i][1];
        tempObj.price = array2D[i][2];

        result.push(tempObj);
        tempObj = {};
    }
    return result;
}
console.log(changeToArrayOfObject(items));


var students = [
    ["Charlie", "A", 87],
    ["Berno", "A", 75],
    ["Andi", "B", 81],
    ["Ella", "B", 73]
]

function changeToArrayOfObject (array2D) {
    var result = [];
    var classA = {
        class : "A",
        students : [],
        scores : []
    }
    var classB = {
        class : "B",
        students : [],
        scores : []
    }

    for(var i = 0; i < array2D.length; i++){
       if(array2D[i][1] === "A"){
        classA.students.push(array2D[i][0]);
        classA.scores.push(array2D[i][2]);
       }else{
        classB.students.push(array2D[i][0]);
        classB.scores.push(array2D[i][2]);
       }
    }
    result.push(classA);
    result.push(classB);

    return result;
}
console.log(changeToArrayOfObject(students));

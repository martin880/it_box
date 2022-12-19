let numbers = [1,2,3];

// ES6
/*numbers.forEach(number => {
    console.log(number);
})
*/
/*let result = numbers.map(number => {
    return number*2;
})
*/

// Mempersingkat kodingan diatas
let result = numbers.map(number => number*2)
console.log(result)


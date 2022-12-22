// class Person {
//     constructor(name,age){
//     this.name = name;
//     this.age = age
//     }
//     born(){
//     console.log(2021 - this.age)
//     }
//     }
//     class Programmer extends Person {
//     constructor(name,age,skills){
//     super(name,age)
//     this.skills = skills || [];
//     }
//     }
//     const abc = new Programmer(null,null,[]);
//     console.log(abc);
const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const myFunction = arr =>{
    return arr.map(x => x + 3).filter(x => x < 7);
}
console.log(myFunction(myNumbers));
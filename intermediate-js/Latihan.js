/**Latihan Inheritance dan Encapsulation 
 * _ (underscore digunakan untuk private objek)
 *  Kelemahan Javascript tidak ada akses untuk private
*/

class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    set setName(name){
        this._name = name;
    }
    set setAge(age){
        this._age = age;
    }
}
class Programmer extends Person{
    constructor(name,age,skills){
        super(name,age);
        this._skills = skills;
    }
    get skills(){
        return this._skills;
    }
    set setSkills(skills){
        return this._skills = skills;
    }
}

class Students extends Person{
    constructor(name,age,scores){
        super(name,age);
        this._scores = scores;
    }
    get scores(){
        return this._scores;
    }
    set setscores(scores){
        return this._scores = scores;
    }
}

let person = new Person("Martin", 31);
let programmer = new Programmer("Iska", 28,["Js","PHP","Python"]);
let student = new Students("Theo",25,[90]);

console.log(person);
console.log(programmer.skills);
console.log(student.name);
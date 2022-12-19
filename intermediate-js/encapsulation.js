class Students {
    constructor(name, gpa){
        this._name = name;
        this._gpa = gpa;
    }
    get name(){
        return this._name;
    }
    get gpa(){
        return this._gpa;
    }
    set setName(name){
        this._name = name;
    }
    set setGpa(gpa){
        this._gpa = gpa;
    }
}

let student = new Students("Martin", 3.01);
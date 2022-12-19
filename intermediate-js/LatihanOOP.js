class Students{
    constructor(name, subjects,score){
        this.name = name;
        this.subjects = subjects;
        this.score = score;
    }

    sebutkanNama(){
        console.log("Nama : " + this.name);
    }

    sebutkanSubject(){
        console.log("Subject : " + this.subjects)
    }

}

let student = new Students("Martin",["Algoritma","Web Developer","Backend Developer"], 3.01);

student.sebutkanNama();
student.sebutkanSubject();
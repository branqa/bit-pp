
class Person{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    printPersonData(){
        console.log(`${this.name} ${this.surname}`)
    }
}


class Programmer extends Person {
    constructor(name, surname, ...languages){
        super(name, surname);
        this.languages = languages;
    }
    printProgrammerData(){
        super.printPersonData();
        console.log(`${this.languages}`)
    }

    learnedNewLanguage(l){
        this.languages.push(l);
    }
}

let p = new Programmer('Pera', 'Peric', 'JavaScript', 'Python');
let z = new Programmer('Zika', 'Zikic', 'Java', 'C#');
p.learnedNewLanguage('C++');
p.printProgrammerData();
z.learnedNewLanguage('Ruby');
z.printProgrammerData();

let person = {
    fName:'Manojit',
    lName:'Das',
    get fullName (){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

person.fullName = 'Hoen Morfe'
console.log(person.fullName);
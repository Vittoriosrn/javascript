'use strict'

const vittorio = {
    firstName: 'Vittorio',
    lastName: 'Mina',
    job: 'Programmer',
    birthYear: 2004,
    friends: ['Manelao','Wertin', 'Henriquens'],
    calcAge: function (){
        this.age =  2023 - this.birthYear; // 'this' refers to itself
        return this.age
    }
}

vittorio.calcAge()
// dot
console.log(vittorio.age)
// bracket notatio
console.log(vittorio['age'])
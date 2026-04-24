// Javascript Memory Mangement


/*
? Call Stack
! Prmitive Daa Type
* String, Number, BigInt, Boolean, Undifined, Null, Symbol, 
 */

let fullName = 'Mahmudul Hasan';
let programmer = fullName;
programmer = 'Atikul Islam'

// console.log(fullName);
// console.log(programmer);


/*
? Heap
! Non Prmitive Data Type
* Object, Array
 */

let student = {
    name: 'Mahmudul Hasan',
    age: 19,
}

let people = student;
// people = {
//     name: 'Atkul Islam',
//     age: 28,
// }

people.name = 'Norujjaman Gazi'
people.age = 22

console.log(student);
console.log(people);

let car = ['BMW', 'Audi'];
let newCar = car;
newCar[0] = 'Toyota';

console.log(car);
console.log(car);

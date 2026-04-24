//JavaScript variable
/*
 * JavaScript variable names are case-sensitive
 ! Variable names cannot contain spaces.
 * Variables cannot be the same as reserved keywords such as `if` or `const`.
 * By convention, JavaScript variable names are written in camelCase.
 * Variables should be given descriptive names that indicate their content and usage (e.g. `sellingPrice` and `costPrice` rather than `x` and `y`).
 * You can not add number first
 * _, $ is acceptable but - not accaptable
 */

/*
* var variable
you can re declare
You can re assign
Global Scooped
var is hosted
*/
var a = 10;
var a = 30
a = 'Bangladesh';
{
    var blocked = "30";
    console.log(a);
    console.log(blocked);
}
console.log(a);

let fristName;
let FristName;


let fruits = 'Mango'

var country = "Pakistan"
console.log(country);

// var countrys;
// console.log(countrys);
// countrys = 'Bangladesh';


console.log(`${fruits} is my Fav, ${fruits} i like to eat`);

/*
* let variable
! you can not re declare
You can re assign
? Block Scooped
! let is not hosted
*/
let b = 20;
b = 11;

{
    console.log(b);
}

// console.log(people);
// let people = "anyTime";

/*
* const variable
! you can not re declare
! You can not re assign
? Block Scooped
! const is not hosted
*/

const c = 90;
{
    const d = 30;
    console.log(c);
    console.log(d);
}


// console.log(serfurZone);
// const serfurZone = "Other";

const person = {
    fristName: 'Mahmudul Hasan',
    age: 20,
};
person.country = "Bangladesh";
person.age = 20;
console.log(person);

let fristName1 = 'Homain';
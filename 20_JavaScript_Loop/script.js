// JavaScript Loops
/*
? 01 For loops Arrays Print
*/
let institute = ['Higher Industry', 'Earning Zone', 'National IT', 'Higher Excelency', 'Programmer Hero', 'Future IT'];
institute.push('Procoder');
// console.log(institute[0]);
// console.log(institute[1]);
// for (let i = 0; i < institute.length; i++) {
//     console.log(institute[i]);
// }


/*
? 02 For in Loops Usses in Arrays. 
! Do not use for in over an array if the index order is important.
*/
const numbers = ['A1', 'B2', 'C3', 'D4', 'E5'];
for (const number in numbers) {
    console.log(numbers[number]);
}
/*
! 03 For in Loops Object Print
*/

// let student = {
//     name: 'Mahmudul Hasan',
//     age: 19,
//     department: 'Webeveloper',
//     country: 'Bangladesh',

// };

// for (let i in student) {
//     let capLetter = i.charAt(0).toUpperCase() + i.slice(1);
//     console.log(capLetter + ': ' + student[i]);
// }


/*
? for Each Method ShortCut Array Print
*/
// let institute2 = ['Higher Industry', 'Earning Zone', 'National IT', 'Higher Excelency', 'Programmer Hero', 'Future IT'];
// institute2.forEach(function (i) {
//     console.log(i);
// });

/*
? for of loops
*/
// let studentName = ['Rock', 'Mominul Islam', 'Shahriar', 'Nuhanur Rahman', 'Pritom Das', 'Mejba Uddin'];
// for (let i of studentName) {
//     console.log(i);
// }

/*
! for loop, Minuse Value
*/
let x = 10;
for (; ; x--) {
    if (x == 1) {
        break;
    } else {
        console.log(x);
    }
}

/*
! without condition 
*/
let xxl = 0;
for (; ; xxl++) {
    if (xxl > 10) {
        break;
    } else {
        console.log(xxl);
    }
}


// Optinal Loops and Multiple variable
// let num = 0,
//     cars = ['A', 'B', 'C', 'D', 'E', 'F'],
//     len = cars.length;
// for (; num < len; num++) {
//     console.log(cars[num]);
// }
/*

! While Loops
*/
// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// Basic Loops Notepad
// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// var num_x = [1, 2, 3, 4, 5, 6, 'Elias', 'Eamin', 'Homel'];
// for (var i = 0; i < num_x.length; i++) {
//     console.log(num_x[i]);
// };

// while loop Basic Stucture

let i = 0;
while (i < 5) {
    console.log('Earning CP Trianing Center');
    i++
}
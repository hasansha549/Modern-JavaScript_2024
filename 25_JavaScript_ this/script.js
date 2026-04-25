/*
This in JavaScript
*/

// 01____
// 'use strict';
console.log(this);                  // this is global Object // Refer in window

var fullName = 'Mahmudul Hasan';

function myFunction() {
    return this;
}

console.log(myFunction());


//02___Array Function in (this) use   // Refer in window
let myFun = () => {
    console.log(this);
}

/*
! 03___Event Handling (this) use 
*/
const clickBtn = document.querySelector('#btn');
clickBtn.addEventListener('click', function () {
    console.log(this);
});

/*
? 04___ (this) this Only object use 
*/
var firstName = 'Mehrima Jannat'
// let firstName = 'Mejba Uddin'
const student = {
    firstName: 'Tanvir Islam',
    info: function () {
        console.log(` I'm ${student.firstName}`);
        return ` I'm ${this.firstName}`;  // (Method Refer >>>- Object) Withaout only key (firstNmae) >>>>- Refer in globl (firstNmae) veriable. Method in (this.firstName) Refer in object key.
    },
    arrowFunc: () => {
        return ` I'm ${this.firstName}`; // Function Rfer >>>- Window/ Global. Only var verialble Keyword.
    }
}
console.log(student.info());
student.firstName = 'Shovo';
console.log(student.info());
console.log(student.arrowFunc());

/*
? Method Refer >>>- Object 
! Function Rfer >>>- Window/ Global
*/

/*
? 05___ (this) this is function use 
*/
// var office = 'MS. PowerPoint';
function microsot() {
    let office = 'MS. Excel';
    console.log(this.office);  //Refer in window/globl variable. and only veriable keyword (var)
}
microsot();

//06__More 
const earningZone = 'Computer Trainging Center';
function zoneBD() {
    return `The isntitue is ${earningZone}`;
}
console.log(zoneBD());

//07___ this method is Bind 
const institut = {
    iName: 'Higher Industry',
    zoneInfo: function () {
        console.log(`Programing Institut of ${this.iName}`);
    },
};

const programingInstitut = {
    iName: 'Procoder BD',
};
const bindInstitute = institut.zoneInfo.bind(programingInstitut);
console.log(institut.zoneInfo());

console.log(bindInstitute());


/*
JavaScript Scope
*/

let institute = 'Higher Industry';

console.log(institute);

if (true) {
    console.log(institute);
    let student = 'Programming';
    console.log(student);
    if (true) {
        let computer = 'PC'
        console.log(computer);
    }
    // console.log(computer);

}
// console.log(student);

function microsoft() {
    let msOffice = 'MS_Excel';
    msOffice = 'MS_Word'
    console.log(msOffice);
    console.log(institute);

    //Automatically Global Vaiable
    authorProgrammer = 'Mahmudul Hasan';
    console.log(authorProgrammer);
    function microsoft2() {
        let office = 'MS_Access';
        console.log(msOffice);
        console.log(office);
    }
    // console.log(office);
    microsoft2()

}
microsoft();
console.log(authorProgrammer);

let x = 100;// JavaScript Hoisting
// JavaScript Hoisting is 2 item
/*
? person = 'Tanvir Islam';
! console.log(typeof person);
*/

/*
? 01_________javaScript Variable Hoisting
*/

// Declaration 
var x

// Initialisatiob
x = 10;

// Usage
console.log(x);

/*
? let y = 132;
! console.log(y); 
*/


z = 20;
console.log(z);
var z;

/*
let game;
console.log(game);

game = 'cricket';
console.log(game);

*/
// game = 'cricket';
// console.log(game);
// let game;
const game = 'Dav';
console.log(game);


/*
? 02_________JavaScript Function Hoisting
*/
// 01__ Function Declaration
car('R15');
function car(Bike) {
    console.log(`I love to have a ${Bike}`);
}

// car('R15');   // Function Initialisation 


/*
! 02__let in function Declaration is not Hoisting
*/
// student('Mahmudul Hasan');       Let is not Hoisting
let student = function (fullName) {
    console.log(`I am ${fullName}`);
}
student('Mahmudul Hasan');





console.log(x);
function main() {
    let x = 10;
    console.log(x);
}
main()
console.log(x);
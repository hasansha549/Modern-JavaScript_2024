// JavaScript Functions

// 01 Code- Driven Invocation 
function myFunction(fullName, age, dateOfBirth = 1991) {
    console.log('Hello ' + fullName + ' Im age ' + age + ' My Date of birth ' + dateOfBirth);
}
myFunction('Mahmudul Hasan', 22, 2006);
myFunction('Tayebur Rahman', 23, true);

// 02 Event- Driven Invocation
function isSubscribed() {
    console.log('Subscribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);


/*
    ! 03 Automatic (Self-Invoked) Invocation
*/
(function (message) {
    console.log('I am Self- invoking Function',
        message);
})('Earning Zone');

/*
    ! 04 Function Expression
*/
// let maths = function (x, y) {
//     console.log('Testing if I am working of not');
//     return x * y
// }
// console.log(maths (3, 4));
// console.log(maths (4, 4));
let maths = function (x, y) {
    console.log('Testing if i am working of not');
    return (x * y);
}
console.log(maths(3, 4));
console.log(maths(2, 7));
console.log(maths(2, 5));

/*
! Function is Block Scope
*/
function newFun() {
    let firstName = 'Kamrul';
    console.log(firstName);
}
// console.log(firstName);     // Access error

newFun()

function newFuns() {
    let firstName = 'Mahmud';
    console.log(firstName);
}

newFuns()

/*
? End Amas Function/ Arrays Mathemeatical Square Value Rules is 01
*/
let numbers = [4, 5, 6, 7];
let sqNumber = numbers.map(function (number) {
    return number * number;
});
console.log(sqNumber);

/*
? Function Parameter, argument Mathemeatical Square Value Rules is 02
*/
console.log(sqNumber);

function sqNums(num) {
    return num * num;
}
console.log(sqNums(4));
/*
let add = function(x, y) {
    return x + y;
}
console.log(add(5, 6));
*/

// Array Function
let add = (x, y) => x + y;
console.log(add(8, 6));


// Nestted Function

function greet(firstName) {
    function sayHello() {
        alert('Hello ' + firstName);
    }
    return sayHello();
}

greet('Mahmud');

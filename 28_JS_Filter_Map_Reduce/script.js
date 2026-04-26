/*
JavaScript filter map and Reduse 
*/

const fruits = ['Mango', 'Banana', 'Orange', 'Lemon'];

const country = new Map([
    ['BN', 'Bangladesh'],
    ['IN', 'India'],
    ['PK', 'Pakistan'],
    ['USA', 'Unitet stadis of Amarica']
]);


country.set('BU', 'Bhutan');

// country.set('BN', 'Bangladesh');            //Same type is not second time input,
// for (const key of country) {
//     console.log(key);
// }


for (const [key, value] of country) {
    // console.log(key, ':', value);
}


/*
! Object data input using for of loop
*/
const myCountry = {
    'BN': 'Bangladesh',
    'IN': 'India',
    'PK': 'Pakistan',
    'USA': 'Unitet stadis of Amarica',
}


// for (const key of myCountry) {
//     console.log(key);
// }

// for (const key in myCountry) {
//     console.log(key, ':', myCountry[key]);
// }

for (const key of Object.keys(myCountry)) {
    // console.log(key);
}

for (const key in fruits) {
    // console.log(fruits[key]);
}

/*
! arrays data input using forEach Method
*/
fruits.forEach(function (i) {
    // console.log(i);
});

// fruits.forEach(i => {
//     console.log(i);
// });


// function myFruit(i) {
//     console.log(i);
// }

// fruits.forEach(myFruit)


fruits.forEach((i, index, arr) => {
    // console.log(i, index, arr);
});

/*
! 92 Array >>>- Object in data Input
*/
const stack = [
    {
        name: 'MERN Stack',
        property: 'Mongo, Express, React, Node',
        foundation: 'JavaScript',
        tranding: true,
        price: 3000,

    },
    {
        name: 'MERN Stack',
        property: 'Mongo, Express, React, Node',
        foundation: 'JavaScript',
        tranding: false,
        price: 3000,

    },
    {
        name: 'Laravel',
        property: 'JavaScript, Vue, PHP, Laravel, MySQL',
        foundation: 'PHP',
        tranding: true,
        price: 4000,
    },
    {
        name: 'Word Press',
        property: 'JavaScript, PHP, WordPress, Node',
        foundation: 'PHP',
        tranding: false,
        price: 3500,
    }
];

stack.forEach(info => {
    // console.log(`Want to learn ${info.name}? learn this ${info.property}`);
});




// fruits.forEach(i => console.log(i));
const fruitName = fruits.filter(i => i.toLowerCase().startsWith('b'));
const startArrB = fruits.filter(arr => arr.startsWith('B'));
// console.log(startArrB);

const fruitsLen5 = fruits.filter(i => i.length === 5);
// console.log(fruitName);
console.log(fruitsLen5);


const fruitsStartG = fruits.filter(i => i.toLowerCase().includes('g'));
// console.log(fruitsStartG);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const max5 = numbers.filter(num => { return num > 5 });
// console.log(max5);


const fruitNums = [];
numbers.forEach(num => {
    if (num > 5) {
        fruitNums.push(num);
    }
});
// console.log(fruitNums);


/*
! Line> 92 Stack Array >>>- Object in data Input
*/

let userStack = stack.filter(sk => sk.foundation === 'PHP');
console.log(userStack);

// More Rules
// const userStack = stack.filter(atke => {
//     return console.log(atke.foundation === 'PHP');
// });
// console.log(userStack);

/*
! Add 5+ Numbers to the array. and Sayinging Method
*/
const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const maxnum5 = arrayNum.filter(num => { return num > 5 });
// console.log(maxnum5);
// const myNum = arrayNum.map(num => num + 5);
const myNum = arrayNum
    .map(num => num + 5)
    .map(num => num * 5)
    .filter(num => num >= 50);
console.log(myNum);


/*
* Reduce
? Line 169 Array to Reduce
const array = [1, 2, 3, 4];

0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
(accumulator, currentValue) => accumulator + currentValue,
initialValue,
);

console.log(sumWithInitial);
Expected output: 10
*/
// (Reduce) const myTotal = arrayNum.reduce((acc, curValue) => (acc + curValue), 0);
const myTotal = arrayNum.reduce((acc, curValue) => {
    console.log(`Accumulator ${acc} and Current Value ${curValue}`);
    return acc + curValue
}, 0);
// console.log(myTotal);


/*
! 92 (Reduce) Array >>>- Stact To Cource price to totla Price
*/

const coursePrice = stack.reduce((acc, coucse) =>
    acc + coucse.price, 500);
console.log(coursePrice);
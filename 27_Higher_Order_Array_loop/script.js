/*
Higher Order Array Loop
*/
// ['', '', '', '', '', 1, true] [({}, {}, {})];
/*
? 01__ arrays data input using (For) and (For in) Loop Method
! Array with for in loop not recomended
*/
const fruits = ['Mango', 'Banana', 'Orange', 'Lemon'];
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
    // console.log(i, fruits[i]);    // With array Index Number
}

for (const i of fruits) {
    // console.log(i);
    // console.log(i, ':', fruits[i]);     // Undifind
}
for (const key in fruits) {
    // console.log(fruits[key]);
}
const myName = 'Mahmudul Hasan';
for (const names of myName) {
    // console.log(`Each charAt is ${names}`);

}

const country = new Map([
    ['BN', 'Bangladesh'],
    ['IN', 'India'],
    ['PK', 'Pakistan'],
    ['USA', 'Unitet stades of America']
]);

country.set('BU', 'Bhutan');            //Same type is not second time input,

for (const key of country) {
    console.log(key);
}


for (const [key, value] of country) {
    console.log(key, ':', value);
}


/*
? Object data input using for of loop
! (for of) Loop Object in Data is not iterable. Uncaught TypeError: myCountry is not iterable
Object Uses the (for in) loop.
*/
const myCountry = {
    BN: 'Bangladesh',
    IN: 'India',
    PK: 'Pakistan',
    USA: 'Unitet stadis of Amarica',
}

// for (const key of myCountry) {
//     console.log(key);                // Uncaught TypeError: myCountry is not iterable
// }

// for (const key in myCountry) {
//     console.log(key, ':', myCountry[key]);
// }
/*
? Object data input using for of loop. But Using The Rulls ⬇️
*/
for (const key of Object.keys(myCountry)) {
    console.log(key, ':', myCountry[key]);
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
! Array >>>- Object in data uses
*/
const stack = [
    {
        name: 'MERN Stack',
        property: 'Mongo, Express, React, Node'
    },
    {
        name: 'Laravel',
        property: 'JavaScript, Vue, PHP, Laravel, MySQL'
    },
    {
        name: 'Word Press',
        property: 'JavaScript, PHP, WordPress, Node'
    }
];

stack.forEach(info => {
    console.log(`Want to learn ${info.name}? learn this ${info.property}`);
})

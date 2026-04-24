// JavaScript Arrays
// const language1 = new Array('Python', 'JavaScript', 'PHP', true, 50);

const language = ['Python', 'JavaScript', 'PHP', 'Rust', true, 50];

language[4] = 'Tailwind CSS';
language[5] = 'React. js';
language[6] = 'vue. js';
language[7] = 'laravel';
language[10] = 'Bootstrap';
// first item
// console.log(language[0]);
// last item
console.log(language[language.length - 1]);
// Delete or Remove Last Item
language.pop()
// Add last Item
language.push('Angular.js')
// Add first Item
language.unshift('Basic Computing');
// Delete first Item
language.shift()
console.log(language);
// console.log(language.at(5));
// console.log(language.toString());       // Arrays Convert of String
// console.log(language.join(' * '));
// console.log(language.length);
// console.log(language[2]);

const person = [];
person['firstName'] = 'Mahmudul';
person[2] = 35;
person['lastName'] = 'Hasan';
// console.log(person.length);
// console.log(person);
// console.log(person[2]);


// const num = [20];
const num = new Array(20, 21);
// console.log(num);


const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const p = [2, 3, 4];
const z = x.concat(y, p);
// console.log(z);

const a = [[1, 2, 3, [3, 5, 8]], [4, 5, 6], [2, 4, 6]];
// console.log(a);
// console.log(a.flat());

language.splice(2, 0, 'Info', 'info2');
language.splice(0, 2);
console.log(language);


//At the last String To arrays
const zoneBD = ('Mahmudul Hasan, Tanvir Islam, Sowrov, Tayaba, Jonaid')
// console.log(zoneBD);
// console.log(zoneBD.split(','));
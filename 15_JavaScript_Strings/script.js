// JavaScript Strings
const fullName = 'Mahmudul Hasan';
const county = "Bangladesh";

const sen = "I'm Form Bangladesh";
const sen2 = 'I\'m Form Bangladesh';

const quatation = 'Bangladesh is my "Home Land"';
const quatation2 = "Bangladesh is my \"Home Land\"";
console.log(quatation);
console.log(quatation2);
console.log(sen2);

const quatation3 = "Bangladesh is my \n \"Home Land\"";
document.getElementById('title').innerText = quatation3;


let info = "Mahmud " + "Bangladesh";
let info2 = fullName + " " + county;
let info3 = "I am " + fullName + " Im form " + county;


// After ES6_ Modran Strings type
let info4 = `I am ${fullName} I am Form ${county} ${4 + 4}`;
let info5 = `I am ${fullName} 
I am Form ${county} 
${4 + 4}`;
console.log(info4);
// After ES6_ Modran Strings type


console.log(info);
console.log(info2);
console.log(info3);
console.log(info5.length);
console.log(info5.charAt(6));
console.log(info5.indexOf('M'));
console.log(info5.toUpperCase());

// Convert of variable Object
const fullName2 = new String("Mahmud");
const fullName3 = ("Mahmud");
console.log(fullName2);
fullName[2] = "j";
console.log(fullName2[2]);
// Convert of variable Object



// document.getElementById('title').innerText = info3;
document.getElementById('title').innerText = info5;

/*
! Change Case
*/
const myInfo = 'developer';
let capLetter = myInfo.charAt(0).toUpperCase() + myInfo.slice(1);
console.log(capLetter);

// (Slice) and (Substring) method
const student = "Mahmudul Hasan";
/*
    M  A  H  M  U  D  U  L     H  A  S
    0  1  2  3  4  5  6  7  8  9  10 
    -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1

*/
console.log(student.slice(9));
console.log(student.substring(-9));

// Spece Remove
const someText = "                 Mahmudul              "
console.log(someText.trim());
console.log(someText.trimStart());
console.log(someText.trimEnd());

//url Replace
const url = "https://mahmudul.com/new%20blog";
console.log(url.replace("%20", "-"));
//url Replace

console.log(info5.split(" "));
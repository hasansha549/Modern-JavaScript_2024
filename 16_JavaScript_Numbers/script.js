// JavaScript Number Type
const x = 5555555555555555;           // after 15 Number is Deferent Result
const xyx = 5.55555555555555555;     // after (.) 17 Number is Deferent Result
const y = 0.6;
const z = 0.7;
const m = (y + z).toFixed();
const l = (y + z).toFixed(2);               // String Vaule
// console.log((y * 10 + z * 10) / 10);
// console.log(new Number(l));
const a = 10;
const b = 20;
const c = 248;
const d = 'Javascript';
const e = c - d;
// console.log(l+ a + b + c);
// console.log(b + a + l + c);
// console.log(c +l);              //Multiply is Error, and Result is Unnacceptable
// console.log(c -l);
// console.log(c *l);
// console.log(c /l);
// console.log(e);

// Basic while Loops
/*
let num = 2;
let value = "";
while (num != Infinity) {
    num = num * num;
    value = value + num + '<br>';
}
document.getElementById('title').innerHTML = value;
*/

// console.log(c.toString(16));
const g = 300;
const h = new Number(300);
const r = 9.23942;
// console.log(g == h);
// console.log(g === h);

// console.log(r.toPrecision(3));
// console.log(r.toFixed(2));

let newNum = Number.EPSILON;

newNum = Number.MAX_VALUE;
newNum = Number.MIN_VALUE;
newNum = Number.POSITIVE_INFINITY;
newNum = Number.NEGATIVE_INFINITY;
newNum = Number.NaN;
console.log(newNum);





// String To number Basic 
let a1 = '20.320394';
let b2 = 30;
a1 = parseFloat(a1)         //Only String Number Count
// a = parseInt(a)     //Only Number Count
let c3 = a1 + b2;
// console.log(c3);

// Nmber To String Basic 
let ab = 50;
let ac = 30;
ab = '' + ab;
let ca = ab + ac;
// console.log(ca);
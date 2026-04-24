// JavaScript Conditional_ST

// if, else, else if Basic Stetment 
let y = 80;
let z = 80;
if (y > z) {
    console.log('Z is great alphbet');
} else if (y < z) {
    console.log('Y is Great Alphabet');
}

else {
    console.log('Equal Alphabet');
}

let zone = '0';
// if, else, else if Basic Stetment
// Switch Stetment in Basic JavaScript
switch (zone) {
    case 10:
        console.log('Hello World');
        break;
    case 13:
        console.log('Earning Training Center');
        break;
    case "Z":
        console.log('Programing Endustry');
        break;
    case 0:
        console.log('Digital Institute');
        break;
    default:
        console.log('Non Industry');
}
// Switch Stetment in Basic JavaScript


// if, else, else if Adverce Stetment
let age = 4;

if (age > 40) {
    console.log('Your are old');
} else if (age > 18) {
    console.log('You are ready to open a google account');
} else if (age > 18) {
    console.log('You are ready to open a google account');
} else if (age > 18) {
    console.log('You are ready to open a google account');
} else if (age > 18) {
    console.log('You are ready to open a google account');
} else if (age > 18) {
    console.log('You are ready to open a google account');
}
else {
    console.log('You are not ready');
}


//Advence Switch Stetment
let category = 'institute';
let carType;

switch (category) {
    case 'car':
        carType = 'This is a car';
        break;
    case 'MotorBike':
        carType = 'This is a motorBike';
        break;
    case 'institute':
        carType = 'This is a Earning Institute';
        break;
    default:
        carType = 'Unknown Category';
}
console.log(carType);
// JavaScript Math
// let num = 30.93492334;
// let num2 = 2;
// let num3 = -6
//if need round Number
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));

// Squre value

// console.log(Math.pow(4, 3));

//Root value
// console.log(Math.sqrt(64));
// console.log(Math.abs(num3));
// console.log(Math.max(1, 3, 4, 5,2 ,));
// console.log(Math.min(1, 3, 4, 5,2 ,));
// console.log(Math.PI);
// console.log(Math.cos(30 * Math.PI / 180));
// console.log(Math.ceil(Math.random().toFixed(2) * 10));


// Ludo App Basic
// let upperValue = 6;
// let lowarValue = 1;
// let resultValue = Math.ceil(Math.random() * upperValue);
// console.log(resultValue);

// Ludo App Realwold
function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    let inageSource = 'image/' + randomNumber + '.png';
    document.getElementById('ludo').src = inageSource;
}

/*
! Modren math Function
document.getElementById('btn').onclick = function () {
    let upperValue = 6;
    let randomNumber = Math.ceil(Math.random() * upperValue);
    let imageSource = 'image/' + randomNumber + '.png';
    document.getElementById('ludo').src = imageSource;
}
*/
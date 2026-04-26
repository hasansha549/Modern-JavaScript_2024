document.querySelector('h1').innerText = 'WelcomeBack';

document.querySelector('h1').innerText
'Welcome'
document.querySelector('h1').textContent
'Welcome  Sir '
document.querySelector('h1').innerHTML
'Welcome <span style="display: none;"> Sir </span>'

// Box ID querySelector
const boxsID = document.querySelector('#box');
boxsID.style.backgroundColor = 'red';
boxsID.style.width = '100px';
boxsID.style.height = '100px';

// Function Manuplation
function boxes() {
    let boxesID = document.getElementById('box');
    boxesID.style.background = 'red';
    boxesID.style.width = '100px';
    boxesID.style.height = '100px';
}
boxes();

// Box Class querySelector
const boxsCls = document.querySelector('.box');
boxsCls.style.backgroundColor = 'aqua';
boxsCls.style.width = '100px';
boxsCls.style.height = '100px';


// Box Select getElementById
const boxGetElm = document.getElementById('box3');
boxGetElm.style.backgroundColor = 'rgb(52, 116, 118)';
// boxGetElm.style.width = '100px';
// boxGetElm.style.height = '100px';

// Menu Item querySelectorAll
const menuItem = document.querySelectorAll('a');
// menuItem[0].style.color = 'rgb(255, 172, 89)';

menuItem.forEach(function (i) {
    i.style.color = 'rgb(174, 128, 82)';
    i.style.fontSize = '20px';
});


// Menu Item getElementByClassName

const cusClass = document.getElementsByClassName('nav_link');
const convertedClass = Array.from(cusClass);

// for (let i = 0; i < cusClass.length; i++) {
//     console.log(cusClass[i]);
// };

convertedClass.forEach(function (i) {
    i.style.backgroundColor = 'rgba(25, 70, 25, 0.4)';
    i.style.margin = '0 0 15px';
    i.style.padding = '10px 20px';
});

// document.querySelector('.box').id;
// document.querySelector('.box').className;

document.querySelector('.box').getAttribute('id');
document.querySelector('.cta').setAttribute('class', 'text_white cta');

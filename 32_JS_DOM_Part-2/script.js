/*
JavaScript Document Object Modle
*/

//Add Text Inside Tags
let headTitle = document.querySelector('h1');
// headTitle.innerText = 'Mahmudul Hasan';
headTitle.innerText = headTitle.innerText + ' ' + 'Institute';

// Chang Text Main Box >>> Box 
let boxes = document.querySelectorAll('.box');
boxes[0].innerText = 'Text 1';
boxes[1].innerText = 'Text 1';
console.log(boxes);

let newNuber = 1;
for (const i of boxes) {
    i.innerText = `Box No ${newNuber}`;
    newNuber++
}

//Create Element
let learnBtn = document.createElement('button');
learnBtn.innerText = 'Learn More';

let heroSec = document.querySelector('.hero');
let heroSect = document.querySelector('.head');
heroSect.append(learnBtn);
// heroSec.prepend(learnBtn);
// heroSec.after(learnBtn)
// heroSec.before(learnBtn)

//Add Element
// function msOffice(newOffce) {
//     const li = document.createElement('li');
//     li.innerText = `${newOffce}`;

//     document.querySelector('ul').appendChild(li);
// }
// msOffice('MS. PowerPoint');
// msOffice('MS. Access');


// Optimize Add Element 
function msOfficeOP(newOffce) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newOffce));

    document.querySelector('ul').appendChild(li);
}
msOfficeOP('MS. PowerPoint');
msOfficeOP('MS. Access');


// Edit
const editOffice = document.querySelector('li:first-child');
editOffice.style.color = 'rgb(84, 201, 255)';
editOffice.style.listStyle = 'none';
editOffice.innerText = 'MS. Note'
// console.log(editOffice);

// Edit with Tag 
const newFun = document.createElement('li');
newFun.textContent = 'MS. Edge';
editOffice.replaceWith(newFun);

//Romove 
const editTag = document.querySelector('li:last-child');
// editTag.outerHTML = '<p>MS. Excel</p>';
editTag.remove();



// JavaScript Events
function subscribe() {
    document.getElementById('text').innerHTML = 'Subscibed';
    document.getElementById('btn').innerHTML = 'Subscibed';
    document.getElementById('btn').style.backgroundColor = '#262626';
}

function like() {
    document.getElementById('like').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked';

}

function keyPress() {
    document.getElementById('text').innerHTML = 'key Press 😊';
}


// function onLoad() {
//     alert('Testing javaScript Onload');
//     document.getElementById('text').innerHTML = 'WebSite Loaded Properly 😁';
// }

function windowResize() {
    document.getElementById('textarea').style.height = '100px';
    document.getElementById('form').style.fontFamily = 'Courier New';
    document.getElementById('form').style.color = 'green';
}

function onscroll() {
    document.getElementById('text').innerHTML = 'Scrolling';
}

/*
? Event Function is best practice
*/
// document.getElementById('btn').onclick = function () {
//     document.getElementById('btn').innerHTML = 'Subscribed 😊';
//  document.getElementById('text').innerHTML = 'Subscribed';

// }



document.getElementById('link').addEventListener('click', function (e) {
    console.log('UL Click');
},
    true
)

document.getElementById('li').addEventListener('click', function (e) {
    console.log('li Click');
},
    true
)

function samsung() {

}

modran()
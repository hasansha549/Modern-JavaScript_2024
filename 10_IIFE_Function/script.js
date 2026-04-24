/*
Immediately Invoked Function Expression (IIFF)
*/

const aFunction = function (a, b) {
    console.log(` A Simple Function ${a, b}`);
};

aFunction(3, 6);
aFunction(3, 3);



(function (a, b) {
    console.log(a + b);
})(5, 6);

(function (a, b) {
    console.log(a * b);
})(5, 6);

((a, b) => console.log(a * b))(3, 5);


/*
? IIFE Fucntion 
/ Global context is not plottion
*/
// const h3 = document.querySelector('.h3');
// const h4 = document.querySelector('.h4');
// h3.style.backgroundColor = 'red';
// h4.style.backgroundColor = 'aqua';

/*
DOM
? DOM in IIFE Function
*/
(function () {
    const h3 = document.querySelector('.h3');
    const h4 = document.querySelector('.h4');
    h3.style.backgroundColor = 'red';
    h4.style.backgroundColor = 'aqua';

})();

/*
DOM
? DOM IIFE Function in Variable Storege
*/

const myModule = (function () {
    let priatVariable = 'This is Privat Variable';
    function privatFun() {
        console.log('This is Privet Function');
    }

    return {
        publicVar: 'This is a pubic Variable',
        publicMethod: function () {
            privatFun()
            return ('This is a public Method');
        }
    };
})();

// console.log(myModule.priatVariable); // UnAccessible
// console.log(myModule.privatFun()); // UnAccessible 
console.log(myModule.publicVar); // Accessible 
console.log(myModule.publicMethod()); // Accessible 
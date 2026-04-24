// JavaScript Objects
const newSymble = Symbol('Key1');
const mobileModle = {
    // key : value
    brand: 'Samsung',
    model: 's24ultra',
    processor: 'Sanpdragon Gen 3',
    camera: ['200MP', '12MP', '12mp'],
    hasZoomCamera: true,
    'Selfe Camera MP': 12,
    [newSymble]: 'MyKey1',
    brandModel: function () {        //Object function it is method
        return `Mobile Brand is ${this.brand} and model is ${this.model}`;
    },
    battray: {
        mah: 5000,
    }

};


mobileModle.model = 's25ultra';
Object.freeze(mobileModle);
mobileModle.model = 's26ultra';

console.log(mobileModle.hasOwnProperty('camera'));
// console.log(Object.keys(mobileModle));
// console.log(Object.values(mobileModle));

// console.log(mobileModle['Selfe Camera MP']);
// console.log(mobileModle[newSymble]);

console.log(mobileModle.brandModel());

/*
! Multiple Object Combine Result 
*/
const obj1 = {
    a: 1,
    b: 2,
    r: 3,
};
const obj2 = {
    p: 1,
    q: 2,
    r: 3,
};

const obj3 = {
    x: 1,
    y: 2,
    z: 3,
};

// const objFinal = Object.assign(target, source);
// const objFinal = Object.assign({},obj1, obj2, obj3);
const objFinal = { ...obj1, ...obj2, ...obj3 };
console.log(objFinal);
console.log(mobileModle.battray.mah);


/*
! Constuctor Object
*/
function Person(first, last) {
    (this.firstName = first), (this.lastName = last)
}

const person1 = new Person('Mahmudul', 'Hasan');
person1.age = 19;
const person2 = new Person('Rohit', 'Khan');
console.log(person1);
console.log(person2);
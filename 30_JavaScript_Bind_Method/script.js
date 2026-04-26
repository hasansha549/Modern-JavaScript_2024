//JavaScript Bind Method
// Basic Bind Method
// const institut = {
//     iName: 'Higher Industry',
//     zoneInfo: function () {
//         console.log(`Programing Institut of ${this.iName}`);
//     },
// };
// console.log(institut.zoneInfo());
// const programingInstitut = {
//     iName: 'Procoder BD',
// };

// const idbZone = {
//     iName: 'Computer Training Center',
// };

// const binMethod2 = institut.zoneInfo.bind(programingInstitut);
// const binMethod3 = institut.zoneInfo.bind(idbZone);
// console.log(binMethod2());
// console.log(binMethod3());


/*
JavaScript call apply method 
*/
// Call
const greenLine = {
    bus: 'Green Line Enterprice',
    bCode: 'GL',
    ticket: [],
    booking(seatNumber, name) {
        console.log(`${name} booked a seat on ${this.bus} ticket ${this.bCode}-${seatNumber}`);
        this.ticket.push({ ticketInfo: `${this.bCode}-${seatNumber}`, name })
    }
};

greenLine.booking('C1', 'Aktikul Isalm');
greenLine.booking('C2', 'Rafiz Uddin');
greenLine.booking('B4', 'Ziaur Rahman');
greenLine.booking('B4', 'Ziaur Rahman');
console.log(greenLine);

const duelex = {
    bus: 'Duelex Enterprice',
    bCode: 'DL',
    ticket: [],
};

const intends = greenLine.booking;
// intends('B1', 'Kawsar Alaom')
intends.call(duelex, 'B1', 'Shahriar Alom');
intends.call(duelex, 'C3', 'Jubaer Ahmed');
intends.call(greenLine, 'C2', 'Jubaer Ahmed');
console.log(duelex);

/*
const callApplyM = greenLine.booking.call(duelex, 'A1', 'Samim Osman');
console.log(callApplyM);
console.log(duelex);
*/

const hanif = {
    bus: 'Hanif Enterprice',
    bCode: 'HN',
    ticket: [],
};
intends.call(hanif, 'A1', 'Jusim Uddin');
intends.call(greenLine, 'A1', 'Jusim Uddin');
console.log(hanif);

//Apply Method
const ticketData = ['E2', 'Arafat Islam'];
intends.apply(greenLine, ticketData);
intends.apply(hanif, ['C3', 'Arafat Islam']);


// Bind Method
const dola = {
    bus: 'dola Express',
    bCode: 'DL',
    ticket: [],
}


// const ticketDE = intends.bind(dola, 'B1', 'Nabil');
// console.log(ticketDE());
// ticketDE()
const dlExTicket = intends.bind(dola);
dlExTicket('A1', 'Shahadat Hossin');
console.log(dola);

/*
! Frre Refind
*/
const dlExTicket = intends.bind(dola, 'E1');
dlExTicket('Shahadat Hossin');
dlExTicket('Redoan');

console.log(dola);


const person = {
    firstName: 'Sujon',
    lastName: 'Ahmed',
    display: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

const display = person.display();
console.log(display);

const person = {
    firstName: 'Sujon',
    lastName: 'Ahmed',
    display: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

const display = person.display;
console.log(setTimeout(display.bind(person), 2000));

/*
!By clicking on the buttton BIND  (20++)
*/
greenLine.busses = 20;
greenLine.buyBus = function () {
    // console.log(this);
    this.busses++;
    console.log(this.busses);
}

// greenLine.buyBus();

// document.querySelector('.btn').addEventListener('click', greenLine.buyBus)
document.querySelector('.btn').addEventListener('click', greenLine.buyBus.bind(greenLine));


/*
! Partial Application
*/

const bdText = (rate, value) => value + (value * rate) / 100;
console.log(bdText(10, 100));
const addVAT = bdText.bind(null, 15);
console.log(addVAT(100));
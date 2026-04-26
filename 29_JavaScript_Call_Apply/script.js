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
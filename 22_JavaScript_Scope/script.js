/*
JavaScript Scope
*/

let institute = 'Higher Industry';

console.log(institute);

if (true) {
    console.log(institute);
    let student = 'Programming';
    console.log(student);
    if (true) {
        let computer = 'PC'
        console.log(computer);
    }
    // console.log(computer);

}
// console.log(student);

function microsoft() {
    let msOffice = 'MS_Excel';
    msOffice = 'MS_Word'
    console.log(msOffice);
    console.log(institute);

    //Automatically Global Vaiable
    authorProgrammer = 'Mahmudul Hasan';
    console.log(authorProgrammer);
    function microsoft2() {
        let office = 'MS_Access';
        console.log(msOffice);
        console.log(office);
    }
    // console.log(office);
    microsoft2()

}
microsoft();
console.log(authorProgrammer);

let x = 100;
console.log(x);
function main() {
    let x = 10;
    console.log(x);
}
main()
console.log(x);
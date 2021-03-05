//task 1
let s = 2000000;
let p = 10;
let years = 5;
let months = 5 * 12 ;

let perepl = 0;
for ( let i=0; i <= 60; i++) {
    let b = s / months;
    perepl += ((s - i*b) * p)  / (100 * 12);
    console.log(perepl);
}
document.getElementById("rez").value=perepl;
//task 2

let size = 120;
let unit = 'кб';

switch(unit ) {
    case unit = 'кб':
       size = size * 1024;
        console.log(size);
        break;
    case unit = 'мб':
       size = size * Math.pow(1024,2);
        console.log(size);
        break;
    case unit = 'гб':
        size = size * Math.pow(1024,3);
        console.log(size);
        break;
     default:
        console.log('неизвестное значение');
}

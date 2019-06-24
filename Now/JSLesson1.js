'_use strict';
/*
if (1) {
    console.log("Right!");
} else {
    console.log("That's not right");
}

if (num < 49) {
    console.log("Неверно!");
} else if(num > 100) {
    console.log("Много!");
} else {
    console.log("Это так!");
};

(num == 50) ? console.log("Верно!") : console.log("Неверно!");

switch (num) {
    case num < 49: 
        console.log("Неверно!");
        break;
    case num > 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Много!");
        break;
    case 50:
        console.log("Это так!");  
        break; 
    default:
        console.log("Что-то пошло не так!");
        break;
}

let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num < 55);

for(let i = 1; i < 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
*/


console.log(calc(10,15));

function calc(a,b) {
    return (a + b);
}

// let calcul = function(a,b) {
//     return (a + b);
// }

let calcul = (a,b) => a + b;

console.log(calcul(10,15));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelwe = "12.2px";
//console.log(Math.round(twelwe));
console.log(parseInt(twelwe));
console.log(parseFloat(twelwe));
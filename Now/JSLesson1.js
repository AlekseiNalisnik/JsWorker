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

/*
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
console.log(parseFloat(twelwe));*/

//CALLBACK FUNCTIONS
/*
function first() {
    setTimeout( function() { 
    console.log(1);
    }, 500 );
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

function done() {
    console.log("Я прошёл 3-й урок!");
}

learnJS("JavaScript", done);*/

//OBJECTS
/*
let options = {
    width: 1024,
    height: 1024,
    name: "Test"
};

console.log(options.name);

options.bool = false;
options.colors = {
    border: "Black",
    bg: "red"
};

delete options.bool;

console.log(options);

for(let key in options) {
    console.log('Свойство ' + key + " имеет значение " + options[key]);
}
console.log(Object.keys(options).length);

let arr = ["first", 2, 3, "four", 5];

arr.pop(); // удаление из конца массива
arr.push("5"); // добавление в конец массива
arr.shift() // удаление с начала массива
arr.unshift("5"); // добавление в начало массива

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

arr.forEach(function(item, i, mass) {
    console.log(i + ": " + item + "(массив: " + mass + ')');
});

let mass = [1,3,4,6,7];

for(let key of mass) {
    console.log(key);
}

console.log(arr);
*/

// let ans = prompt("", ""),
//     array = [];
    
// array = ans.split(','); // передаёт в массив значения, которые введены в промпт через запятую
// console.log(array);

// let arr = ["aaa", "bbb", "ccc", "111"],
//     i = arr.join(", "); // склеивает элементы массива в одну строку
// console.log(i);

let arr = ["aaa", "bbb", "ccc", "111"],
    i = arr.sort(compareNum); // сортирует элементы массива по алфавиту

function compareNum(a,b) {
    return a - b;
} // callback функция для сортировки по возрастанию чисел, записанных в массив

console.log(i);

let soldier = {
    health: 400,
    armor: 100
}

let John = {
    health: 100
}

John.__proto__ = soldier;

console.log(John);
console.log(John.armor);


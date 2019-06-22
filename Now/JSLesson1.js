'_use strict';

/*var number = 5;
var string = "Hello";
var symb = Symbol();
var boolean = true;
null;
undefined;
var obj = {};


console.log(4/0);
console.log("string"*9);


let something;
console.log(something);

let person = {
    name: "John",
    age: 25,
    isMarried: false
}
let arr = ['plum.png', 'orange.jpg'];
let answer = prompt("Are u 18?", "yes");
console.log(typeof(null));
*/



//alert, confirm, prompt


var money = "Ваш бюджет на месяц",
    time = "Введите дату в формате YYYY-MM-DD";

var answer1 = prompt("Введите обязательную статью расходов в этом месяце!"),
    answer2 = prompt("Во сколько обойдётся?");

console.log(answer2);

var appData = { 
    money: "Ваш бюджет на месяц",
    time: "Введите дату в формате YYYY-MM-DD",
    expenses: {
        answer1: answer2,
    },
    optionalExpenses: {},
    income: [], 
    savings: false };

let brow = alert(appData.expenses.answer1 / 30);

console.log(brow);
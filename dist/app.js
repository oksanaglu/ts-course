"use strict";
// les1
// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// function add(num1: number, num2: number) {
//   return num1 + num2;
// }
// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });
// les2
let age;
age = 50;
let name;
name = "Max";
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback = (a) => number;
callback = (a) => { return 100 + a; };
let anything;
anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
if (typeof some === "string") {
    str = some;
}
;
let person;
person = ['Max', 21];
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
;
const page = {
    load: Load.READY
};
if (page.load === Load.LOADING) {
    console.log('Страница загружается');
}
if (page.load === Load.READY) {
    console.log('Страница загружена');
}
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
console.log(9, 9);
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01',
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};

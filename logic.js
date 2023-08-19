const screen = document.querySelector('.screen-content')
const one = document.querySelector('#one-button')
const two = document.querySelector('#two-button')
const three = document.querySelector('#three-button')
const four = document.querySelector('#four-button')
const five = document.querySelector('#five-button')
const six = document.querySelector('#six-button')
const seven = document.querySelector('#seven-button')
const eight = document.querySelector('#eight-button')
const nine = document.querySelector('#nine-button')
const zero = document.querySelector('#zero-button')
const decimal = document.querySelector('#decimal-button')
const add = document.querySelector('#add-button')
const subtract = document.querySelector('#subtract-button')
const multiply = document.querySelector('#multiply-button')
const divide = document.querySelector('#divide-button')
const equal = document.querySelector('#equal-button')
const clear = document.querySelector('#clear-button')
const percentage = document.querySelector('#percentage-button')
const positive_negative = document.querySelector('#positive-negative-button')


let num1 = 0;
let num2 = 0;
let operator = "";
let result = 0;
clear.addEventListener("click",function(){
    screen.textContent = "0";
});
one.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = "1"
    }
    else{
        screen.textContent = screen.textContent + "1"
    }
})
three.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = "3"
    }
    else{
        screen.textContent = screen.textContent + "3"
    }
})
four.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = "4"
    }
    else{
        screen.textContent = screen.textContent + "4"
    }
})
five.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = "5"
    }
    else{
        screen.textContent = screen.textContent + "5"
    }
})
six.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = "6"
    }
    else{
        screen.textContent = screen.textContent + "6"
    }
})
seven.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = "7"
    }
    else{
        screen.textContent = screen.textContent + "7"
    }
})
eight.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = "8"
    }
    else{
        screen.textContent = screen.textContent + "8"
    }
})
nine.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = "9"
    }
    else{
        screen.textContent = screen.textContent + "9"
    }
})
zero.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = "0"
    }
    else{
        screen.textContent = screen.textContent + "0"
    }
})
decimal.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = "."
    }
    else{
        screen.textContent = screen.textContent + "."
    }
})
two.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = "2"
    }
    else{
        screen.textContent = screen.textContent + "2"
    }
})
percentage.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = "%"
    }
    else{
        screen.textContent = screen.textContent + "%"
    }
})

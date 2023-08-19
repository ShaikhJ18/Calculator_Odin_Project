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

let display_value = ""
let result = 0
let operation = ""
let num1 = 0;
let num2 = 0;
function reset(){
    display_value = ""
    num1 = 0;
    num2 = 0;
}
function operate(a,b,operator){
    if (operator == '+'){
        return a + b
    }
    else if (operator == '-'){
        return a - b
    }
    else if (operator == 'x'){
        return a * b
    }
    else if (operator == '/'){
        return a / b
    }
    else{
        return -1
    }
}
one.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = '1'
    }
    else{
        screen.textContent = screen.textContent + '1'
    }
    display_value = display_value + "1"
})
two.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = '2'
    }
    else{
        screen.textContent = screen.textContent + '2'
    }
    display_value = display_value + "2"
})
three.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = '3'
    }
    else{
        screen.textContent = screen.textContent + '3'
    }
    display_value = display_value + "3"
})
four.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = '4'
    }
    else{
        screen.textContent = screen.textContent + '4'
    }
    display_value = display_value + "4"
})
five.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = '5'
    }
    else{
        screen.textContent = screen.textContent + '5'
    }
    display_value = display_value + "5"
})
six.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = '6'
    }
    else{
        screen.textContent = screen.textContent + '6'
    }
    display_value = display_value + "6"
})
seven.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = '7'
    }
    else{
        screen.textContent = screen.textContent + '7'
    }
    display_value = display_value + "7"
})
eight.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = '8'
    }
    else{
        screen.textContent = screen.textContent + '8'
    }
    display_value = display_value + "8"
})
nine.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = '9'
    }
    else{
        screen.textContent = screen.textContent + '9'
    }
    display_value = display_value + "9"
})
zero.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = '0'
    }
    else{
        screen.textContent = screen.textContent + '0'
    }
    display_value = display_value + "0"
})
clear.addEventListener("click",function(){
    if (screen.textContent == '0'){
        screen.textContent = '0'
    }
    else{
        screen.textContent = "0"
    }
})
add.addEventListener("click",function(){
    screen.textContent = screen.textContent + '+'
    operation = '+';
    num1 = display_value
    display_value = ""
})
subtract.addEventListener("click",function(){
    screen.textContent = screen.textContent + '-'
    operation = '-';
    num1 = display_value
    display_value = ""
})
multiply.addEventListener("click",function(){
    screen.textContent = screen.textContent + 'x'
    operation = 'x';
    num1 = display_value
    display_value = ""
})
divide.addEventListener("click",function(){
    screen.textContent = screen.textContent + '/'
    operation = '/';
    num1 = display_value
    display_value = ""
})
equal.addEventListener("click",function(){
    num2 = display_value;
    if (operation == '/' && num2 == '0'){
        screen.textContent = "ERROR ZERO DIVISION DETECTED"
    }
    display_value = ""
    result = operate(parseInt(num1),parseInt(num2),operation)
    screen.textContent = result
})
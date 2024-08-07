// Declatative Functions you can call functions in one place and use them everywhere

//can work if the declatirive function is invoker before or after 
helloOne()
function helloOne(){
    console.log('Hello one!')
}

// Anoymus function 
//cannot work if the declatirive function is invoker before or after 
var helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

//ES6 function syntax or arrow function 
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

// Function with arguments reusable code with parameters, you pass arguments to invoke the operations
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}
printName('Mike', 'Smith')

// Function with return 

function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(20)
console.log(myResult)

// Import function from Helpers folder
import { printAge } from '../Lessons/Helpers/printHelper.js'
printAge(5)

// import everything from a folder
import * as helper from '../Lessons/Helpers/printHelper.js'
helper.printAge(10)
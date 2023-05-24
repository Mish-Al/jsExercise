// Q1

// 1. Variable
    // Variables are containers for storing information.
// 2. Value
    // JavaScript values are the values that comprise values like Booleans, Strings, arrays, numbers, etc.
// 3. Data type
    // Data types describe the different types or kinds of data that we're gonna be working with and storing in variables.
// 4. Initialization
    // When you declare a variable it is automatically initialized, which means memory is allocated for the variable by the JavaScript engine.
// 5. Tell me the difference between let, var and const
    // Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared. If you never want a variable to change, const is the keyword to use.
// 6. What is a variable scope?
    // Variable Scope. Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global: Global variables are those declared outside of a block. Local variables are those declared inside of a block.
// 7. When can you decide when to use a for or while, forEach and do while loop?
    // Use a for loop to iterate over an array.
    // Use a for loop when you know the loop should execute n times.
    // Use a while loop for reading a file into a variable.
    // Use a while loop when asking for user input.
    // Use a while loop when the increment value is nonstandard.
// 8. Define hoisting and variable scoping
    // Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
    // function fullName(){
    //     return console.log("Mish-Al Taliep")
    // }
    // fullName()


// Q2
// let person = {
//     firstName : "Mish-Al",
//     lastName : "Taliep",
//     age : "21",
//     subjects : "Life Science, Business Studies"
// }
// let address = {
//     streetName:"Wesley Street",
//     streetNumb: "15",
//     suburb: "Athlone",
//     city:"Cape Town",
//     country: "South Africa"
// }
// console.log(person);
// console.log(address);


// Q3

const numb1 = document.querySelector('#num1')
const operator = document.querySelector('#opp')
const numb2 = document.querySelector('#num2')
const button = document.querySelector('#btn')
const answer = document.querySelector('#result')

button.addEventListener('click',()=>{

    let equation = eval(numb1.value + operator.value + numb2.value)

    if(numb1,numb2,operator == ''){
        numb1,numb2,operator === ''
    }else{
        answer.innerHTML = equation
    }
})

// function displayResult() {
//     // Get the input value
//     var inputValue = document.getElementById("inputValue").value;
//     let method = eval(firstValue.value + operator.value + secondValue.value)
  
//     // Display the result on the label
//     document.getElementById("lblResult").innerHTML = "Result: " + inputValue;
//   }

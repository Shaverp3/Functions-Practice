// 1. Calculator
// Write a function called add. It should accept two numbers as parameters and log their sum to the console.
// Write a function called subtract. It should accept two numbers as parameters and log the difference between the first and second number to the console.
// Write a function called multiply. It should accept two numbers as parameters and log their product to the console.
// Write a function called divide. It should accept two numbers as parameters, divide the first number by the second number, and log the result to the console.
// Call each function three times with different parameters.

// function add(num1,num2){
//     console.log(num1 + num2)
// }

// function subtract(num1, num2){
//     console.log(num2 - num1)
// }

// function multiply(num1, num2){
//     console.log(num1*num2)
// }

// function divide(num1,num2){
//     console.log(num1 / num2)
// }

// add(1,2)
// add(4,5)
// add(6,6)

// subtract(3,4)
// subtract(5,9)
// subtract(6,12)

// multiply(2,4)
// multiply(3,6)
// multiply(7,5)

// divide(8,2)
// divide(9,3)
// divide(8,3)


// 2. Calculator Refactor
// Refactor your previous exercise so that each calculator function returns the result of its calculations. You should not have any console.logs inside your functions.
// When you execute your calculator functions, store each result in a new variable and log the variable to the console. The console.logs should now be outside the scope of your functions.

// function add(num1,num2){
//     var sum = (num1 + num2)
//     return sum
// }
// var addResult = add(3,4)
// console.log(addResult)

// function subtract(num1, num2){
//     var result = (num2 - num1)
//     return result
// }
// var subResult = subtract(5,5)
// console.log(subResult)

// function multiply(num1, num2){
//     var product = (num1 * num2)
//     return product
// }
// var prodResult = multiply(2,4)
// console.log(prodResult)

// function divide(num1,num2){
//     var divResult = (num1 / num2)
//     return divResult
// }
// var division = divide(6,3)
// console.log(division)

// 3. Greetings Pt. 2
// Revisit the greetings exercise you did in the conditionals chapter, where you logged a greeting to the console based on the person's preferred language.
// Write a function that accepts two parameters: name and language.
// If the person's preferred language is English, the function should print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

// function salutation(name, language){
//     if(language === "English"){
//         console.log(`Hello, ${name}`)
//     }else if(language ==="Spanish"){
//         console.log(`Hola, ${name}`)
//     }else if(language === "French"){
//         console.log(`Bonjour, ${name}`)
//     }
//     }
    
//     salutation("Pat","French")


// 4. Sandwich Maker
// Write a function that accepts three parameters: breadType (a string), sandwichName, and isToasted (a boolean).
// The function should check whether isToasted is true or false and build a sentence about the sandwich order accordingly.
// The function should return the sentence.
// Call the function three times, passing in three different sets of parameters.
// Example console output:

// "You ordered a toasted meatball sub sandwich on wheat."


function sandwich(breadType, isToasted){
    if(isToasted === true){
        console.log(`You ordered a toasted sandwich on ${breadType}.`)
    } else{
        console.log(`You ordered an untoasted sandwich on ${breadType}.`)
    }
    }

    sandwich("wheat", false)



// 5. The Rock's Hobbies
// Copy and paste the following object into your JavaScript file:
// var dwayneObject = {
//   firstName: "Dwayne",
//   nickName: "The Rock",
//   lastName: "Johnson",
//   favoriteFood: "Eggs",
//   hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
// }

// function printHobbies(){
// // YOUR CODE GOES HERE
// }
// The printHobbies function should loop through the array of Dwayne The Rock Johnson's hobbies and print each one to the console.
// Call the printHobbies function.
// 6. New Years Eve Party
// Copy and paste the following array into your JavaScript file:

// var partyGuests = [
//   {
//     name: "Sam",
//     age: 18
//   },
//   {
//     name: "Jerry",
//     age: 45
//   },
//   {
//     name: "Lila",
//     age: 29
//   },
//   {
//     name: "Mary",
//     age: 68
//   },
//   {
//     name: "Todd",
//     age: 10
//   }
// ]

// function ageChecker(){

//   // YOUR CODE GOES HERE
// }
// Fill in the ageChecker function so that it does the following things:
// Loop through the partyGuests and check if each guest is at least 21.
// Build a sentence or two about who can drink and who can't. (Example: " "Jery, Lila, and Mary can drink. Sam and Todd are too young.")
// Log the sentnece to the console.
// 7. Celsius to Fahrenheit
// You'll be writing two functions: one that converts Celsius to Fahrenheit and the other, vice versa.

// Write a function that takes the temperature in Celsius as the parameter
// The function should do the following calculation to get the temperature in Fahrenheit: T(F) = T(C) * 1.8 + 32
// Output the temperature in Fahrenheit to the console
// Write a second function that takes the temperature in Fahrenheit as the parameter
// The function should do the following calculation to get the temperature in Celsius: T(C) = (T(F) - 32) / 1.8
// Output the temperature in Celsius to the console
// Example output:

// "You entered [degrees in Celsius] Celsius. That converts to [degrees in Fahrenheit] Fahrenheit." "You entered [degrees in Fahrenheit] Fahrenheit. That converts to [degrees in Celsius] Celsius."
// 8. It All Adds Up!
// Copy and paste the following code into your JavaScript file:

// var outsideArray =  [4, 7, 8008, 11, 9, -1];
// In your JavaScript file, create (declare) a function named addThemUp.
// The function should accept one argument: an array of numbers.
// Inside the function, loop over the array of numbers parameter and add them up to a running sum.
// The addThemUp function should return the sum.
// Call addThemUp and pass in outsideArray as an argument.
// Save the returned value in a variable called mySum.
// Log mySum to the console.
// Try changing the numbers in the array or adding new numbers.
// 9. Law of Averages
// Copy and paste the following code into your JavaScript file:

// var scoresToAverage =  [22, 34, 62, 11, 90, 88, 70, 65, 22, 89, 85, 39, 71, 92, 98, 84];
// In your JavaScript file, create (declare) a function named findAverage.
// The function should accept one argument: an array of numbers.
// Inside the function, loop over the array of numbers parameter and find their average.
// The findAverage function should return the average of all the numbers.
// Call findAverage and pass in scoresToAverage as an argument.
// Save the returned value in a variable called myAverage.
// Log myAverage to the console.
// Try adding new numbers to the outsideArray. Your function should still return the correct average no matter how many items are in the array.
// 10. Shipping Calculator
// You work for an online clothing retailer. Every time an order ships, your company needs to calculate the cost of shipping so they can charge the customer correctly. Because they need to make this calculation so many times and in so many places, they've asked you to write a function that calculates shipping cost based on package weight, distance to destination, and whether or not the package is oversized.
// The cost of shipping is always the weight of the package multiplied by the distance it needs to travel, divided by 100.
// If the package is oversized, it adds ten dollars to the cost of shipping.
// Write a function that accepts whatever information you need to calculate the cost of shipping and returns the cost as an integer.
// Execute the function and output the result to the console.
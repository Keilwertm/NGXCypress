// Objects a var but the object uses {} to hold information inside of it to store multiple variables 

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
// dot notation
customer.firstName = "Mike"
// bracket notation
customer['lastName'] = "Silver"
console.log(`${customer.firstName} ${customer.lastName}`)

// Arrays is a list of items volvo = 0 toyota =1 and so on
var car = ["Volvo", "Toyota", "Tesla"]
//replcing array 1 with a new value 
car[1] = "BMW"
console.log(car[1])
// grabbing from the object 
console.log(customer.cars[1])

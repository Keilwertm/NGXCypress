// Concatination and Interpolation 

var price = 80
var itemName = "table"

var messageToPrint = "The price for your "+itemName+" is "+price+" dollars" //concatination strings combined with +
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` // Interpolation creating a single single and replacing with variables and ${}

console.log(messageToPrint)
console.log(messageToPrint2)

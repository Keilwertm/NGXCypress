// Logical "AND"
console.log(true && true) // All values have to be true for expression to be true && combines them 

// logical "OR"
console.log(true || true) // Any value should be TRUE for the expression to be TRUE 

var ageIsMoreThanEighteen = true    
var isUSCitizen = true 

var eligibilityForLicense = ageIsMoreThanEighteen && isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForLicense)

var eligibilityForLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForLicense)

// Logical "NOT"
console.log(!true)
console.log(6 !== 10) // ! is the opposite, letting you ask questions backwards, logically it is NOT
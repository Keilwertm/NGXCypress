// Conditional statements used to split the flow based on the definition if should be boolean

//if(conditon){
    //execute some code here if condition is true 
//} else {
    //if it's false, execute the else and skip the condition
//}

// If hour between 6 and 12 print "Good Morning"
// If hour between 12 and 18 print "Good Afternoon"
// Otherwise: Good Evening

var hour = 13

if(hour >= 6 && hour < 12){
    console.log('Good Morning')
} else if ( hour >= 12 && hour < 18){
    console.log("Good Afternoon")
} else {
    console.log("Good Evening")
}

var ageIsMoreThanEighteen = true    
var isUSCitizen = true 

if(ageIsMoreThanEighteen && isUSCitizen){
    console.log('Customer is eligible for DL')
} else {
    console.log('Customer is NOT eligible for DL')
}
// loops

console.log('Hello World!')

// for loop (for i loop)
// statement1 defines what we want to stop the loop with
// statement2 is how long the loop runs
// statement3 what needs to be done after each loop

// for(statement; statement2; statement3){

// }

// first we set it to 0 and say we want to loop it five times total, doing this by adding the "++" to run it an extra time at the end of every loop until it hits more than five

for(let i=0; i<5; i++){
    console.log('Hello World!' + i)
}

var cars = ["Volvo", "Toyota", "Tesla"]
// for of loop
for(let car of cars){
    console.log(car)
    if(car == "Toyota"){
        break
    }
}

//ES6 syntax for each loop a cleaner version using => to clean up syntax 
cars.forEach( car => {
    console.log(car)
})
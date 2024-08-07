//function that can export to other tests/folders 

export function printAge(age){
    console.log(age)
}

// methods do the jobs and set the values here 
export class CustomerDetails {

    
    printFirstName(firstName){
        console.log(firstName)
    }
    
    /**
     * this method will print the last name 
     * @param {string} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }
}

// lets you export and you can give the value "customerDetails" outsite to import 

export const customerDetails = new CustomerDetails()

//** <= lets you name methods so when you hover in other parts of the code it explains it
/// <reference types="cypress" />

describe('First test suite', () => {

        it('first test', () => {
            
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()


            // Find element by tag name
            cy.get('input')

            // by ID
            cy.get('#inputEmail1')

            //by calss value
            cy.get('.input-full-width')

            //by attribute name 
            cy.get('[fullwidth]')

            //by attribute and value 
            cy.get('[placeholder="Email"]')

            //by entire class value 
            cy.get('[class="input-full-width size-medium shape-rectangle"]')

            //by two attributes (class and attribute)
            cy.get('[placeholder="Email"][fullwidth]')

            //by tag, attribute, id, and class
            cy.get('input[placeholder="Email"]#inputEmail1')

            //by cypress Test ID
            cy.get('[data-cy="imputEmail1"]')
        })

        it('second test', () => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()


            //Theory
            // get() - find elements on the page by locator globally 
            // find() - find child elements by locator
            // contains() - find HTML text and by text and locator

            cy.contains('Sign in')
            cy.contains('[status="warning"]', "Sign in")
            //finding a button on the only element in the parent 
            cy.contains('nb-card', 'Horizontal form').find('button')
            cy.contains('nb-card', 'Horizontal form').contains('Sign in')
            //get finds all elements on the page, use find for only a child element 
            cy.contains('nb-card', 'Horizontal form').get('button')

            //cypress cgaubs and DOM
            //chaining commands to move from child to parent to find another element in the parent 
            cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', "Sign in")
            .parents('form')
            .find('nb-checkbox').click()

        })

        it('save subject of the command', () => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()

            cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', "Email")
            cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', "Password")

           // using cypress Alias usable anywhere in a test
           cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
           cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', "Email")
           cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', "Password")

           // using the cypress then() method only visible inside it's own function 
           cy.contains('nb-card', 'Using the Grid').then( usingTheGridForm => {
                cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', "Email")
                cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain', "Password")
           })
           
        })

        it('extract text value', () => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()

            cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

            // How to grab text and save it for later using .then

            cy.get('[for="exampleInputEmail1"]').then(label => {
                const labelText = label.text()
                expect(labelText).to.equal('Email address')
                cy.wrap(labelText).should('contain', 'Email address')
            })

            // using invoke 

            cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').then(text => {
                expect(text).to.equal('Email address')

            })

            // invoking attributes

            cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then( classValue => {
                expect(classValue).to.equal('label')
            })

            // invoke property looking for text inside of a text field (look under properties and for value)
            cy.get('#exampleInputEmail1').type('test@test.com')
            cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'test@test.com').then( property => {
                expect(property).to.equal('test@test.com')
            })
        })
        it('radio buttons', () => {
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()

            cy.contains('nb-card', 'Using the Grid').find('[type=radio]').then( radioButtons => {
                cy.wrap(radioButtons).eq(0).check({force: true}).should("be.checked")
                cy.wrap(radioButtons).eq(1).check({force: true}).should("be.checked")
                cy.wrap(radioButtons).eq(0).should('not.be.checked')
                cy.wrap(radioButtons).eq(2).should('be.disabled')
            })
        })
        it('checkboxes', () => {
            cy.visit('/')
            cy.contains('Modal & Overlays').click()
            cy.contains('Toastr').click()

            cy.get('[type="checkbox"]').check({force: true})
            cy.get('[type="checkbox"]').eq(0).click({force: true})
        })
        it('Date picker', () => {

        it('Date picker', () => {

            function selectDayFromCurrent(day){
                let date = new Date()
                date.setDate(date.getDate() + day)
                let futureDay = date.getDate()
                let futureMonth = date.toLocaleDateString('en-US', {month: 'short'})
                let futureYear = date.getFullYear()
                let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`;
                cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
                    if(!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear)){
                        cy.get('[data-name="chevron-right"]').click()
                        selectDayFromCurrent(day)
                    } else {
                        cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
                    } 
                })
                return dateToAssert
            }
            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Datepicker').click()
            cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
                cy.wrap(input).click()
                const dateToAssert  = selectDayFromCurrent(5)
                cy.wrap(input).invoke('prop', 'value').should('contain', dateToAssert)
                cy.wrap(input).should('have.value', dateToAssert)
        })
     })

     it('Lists and dropdowns', () => {
        cy.visit('/')

        //1
        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')

        // looping selection
        cy.get('nav nb-select').then( dropDown => {
            cy.wrap(dropDown).click()
            cy.get('.options-list nb-option').each( (listItem, index) => {
                const itemText = listItem.text().trim()
                cy.wrap(listItem).click()
                cy.wrap(dropDown).should('contain', itemText)
                if(index < 3){
                    cy.wrap(dropDown).click()
                }    
            })
        })
     })

     it('Web Tables', () => {
        
        cy.visit('/')
            cy.contains('Tables & Data').click()
            cy.contains('Smart Table').click()

            // How to get the row of the table by text
            cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
                cy.wrap(tableRow).find('.nb-edit').click()
                cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('35')
                cy.wrap(tableRow).find('.nb-checkmark').click()
                // finding by index of the tables, no unique selector, sixth collumn in the tablerow
                cy.wrap(tableRow).find('td').eq(6).should('contain', '35')
            })

            // Get row by index (adding a new user makes more rows)

            cy.get('thead').find('.nb-plus').click()
            cy.get('thead').find('tr').eq(2).then(tableRow => {
                cy.wrap(tableRow).find('[placeholder="First Name"]').type('John')
                cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Smith')
                cy.wrap(tableRow).find('.nb-checkmark').click()
            })

            // method first is the first row or collumn
            cy.get('tbody tr').first().find('td').then( tableColumns => {
                cy.wrap(tableColumns).eq(2).should('contain', 'John')
                cy.wrap(tableColumns).eq(3).should('contain', 'Smith')
            })
     })
 })

})

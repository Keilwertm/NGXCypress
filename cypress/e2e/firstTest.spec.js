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

        it.only('checkboxes', () => {
            cy.visit('/')
            cy.contains('Modal & Overlays').click()
            cy.contains('Toastr').click()

            cy.get('[type="checkbox"]').check({force: true})
            cy.get('[type="checkbox"]').eq(0).click({force: true})

        })

    })
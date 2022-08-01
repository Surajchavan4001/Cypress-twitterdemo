//.......Signup....//

// it('Signup with blank data',function(){
//     cy.visit('https://twitter.com')
    
//      cy.get('[data-testid="signupButton"] > .r-1awozwy').click()
     
//      cy.get('[data-testid="ocfSignupNextLink"] > .r-1awozwy').should('be.disabled')
//      })

// it('signup with valid data',function(){
//     cy.visit('https://twitter.com')
    
//     //  cy.get('[data-testid="signupButton"] > .r-1awozwy').click()
//     //  cy.contains('Name').type('Suraj Chavan')
//     //  cy.contains('Phone').type('9889898983')
//     //  cy.get('.r-16xksha > [data-testid]').select('May')
//     //  cy.get('.r-16y2uox.r-1b7u577 > [data-testid]').select('17')
//     //  cy.get(':nth-child(3) > [data-testid]').select('1995')
//     //  cy.get('.r-16xksha').click()

//      cy.get('[data-testid="ocfSignupNextLink"] > .r-1awozwy').click()
//     cy.get('[data-testid="loginButton"] > .r-1awozwy').click()
//     cy.get('[data-testid="ocfSettingsListNextButton"] > .r-1awozwy').click()
//     cy.get('.r-1ets6dv > :nth-child(1) > .r-16y2uox').type('8600501150')
//     cy.get('[style="background-color: rgb(15, 20, 25); border-color: rgba(0, 0, 0, 0);"] > .r-1awozwy').click()
//     cy.get('.r-30o5oe').type('Srj@4001')
//     cy.get('[data-testid="LoginForm_Login_Button"] > .r-1awozwy').click()
//     cy.get('.r-1wbh5a2 > .css-1dbjc4n > .css-4rbku5 > .css-901oao').should('contain','Home')
// })

//.......login....//

// it('login valid data',function(){
//             cy.visit('https://twitter.com/i/flow/login')
//             cy.get('.r-1ets6dv > :nth-child(1) > .r-16y2uox')
//             cy.get('.r-1ets6dv > :nth-child(1) > .r-16y2uox').type('8600501150')
//             cy.get('[style="background-color: rgb(15, 20, 25); border-color: rgba(0, 0, 0, 0);"] > .r-1awozwy').click()
//              cy.get('.r-30o5oe').type('Srj@4001')
//              cy.get('[data-testid="LoginForm_Login_Button"] > .r-1awozwy').click()
//              cy.get('.r-1wbh5a2 > .css-1dbjc4n > .css-4rbku5 > .css-901oao').should('contain','Home')
            
        
//          })

// it('login with invalid data',function(){
//     cy.visit('https://twitter.com/i/flow/login')
//     cy.get('.r-1ets6dv > :nth-child(1) > .r-16y2uox').type('8600501150')
//     cy.get('[style="background-color: rgb(15, 20, 25); border-color: rgba(0, 0, 0, 0);"] > .r-1awozwy').click()
//     cy.get('.r-30o5oe').type('Srj@4002')
//     cy.get('[data-testid="LoginForm_Login_Button"] > .r-1awozwy').click()
//     cy.get('.r-16dba41 > .css-18t94o4 > :nth-child(1) > .css-901oao').should('contain','Sign up')

// })

// it('login with blank data',function(){
//         cy.visit('https://twitter.com/i/flow/login')
//         cy.get('.r-1ets6dv > :nth-child(1) > .r-16y2uox')
//         cy.get('[style="background-color: rgb(15, 20, 25); border-color: rgba(0, 0, 0, 0);"] > .r-1awozwy').click()
        
    
//      })

//.......forgot password....//

    //  it('forgot password with invalid user name',function(){
    //     cy.visit('https://twitter.com/i/flow/login')
    //     cy.get('.css-18t94o4.r-1niwhzg > .r-1awozwy').click()
    //     cy.get('[data-testid="ocfEnterTextTextInput"]').type('suraj')
    //     cy.get('[data-testid="ocfEnterTextNextButton"] > .r-1awozwy').click()
    //     cy.get('.r-1yjpyg1 > :nth-child(1) > .css-901oao').should('contain','Verify your personal information')
    

    //  }) 
     
    //  it('forgot password with blank user name',function(){
    //     cy.visit('https://twitter.com/i/flow/login')
    //     cy.get('.css-18t94o4.r-1niwhzg > .r-1awozwy').click()
    //     cy.get('[data-testid="ocfEnterTextTextInput"]')
    //     cy.get('[data-testid="ocfEnterTextNextButton"] > .r-1awozwy').click()
    //     cy.get('.r-1isdzm1 > :nth-child(1) > .css-1dbjc4n > .r-37j5jr > :nth-child(1) > .css-901oao').should('contain','Find your Twitter account')
    
    //  })    

     it('forgot password with valid user name password',function(){
        cy.visit('https://twitter.com/i/flow/login')
        cy.get('.css-18t94o4.r-1niwhzg > .r-1awozwy').click()
        cy.get('[data-testid="ocfEnterTextTextInput"]').type('8600501150')
        cy.get('[data-testid="ocfEnterTextNextButton"] > .r-1awozwy').click()
        cy.get('.r-1yjpyg1 > :nth-child(1) > .css-901oao').should('contain','How do you want to reset your password?')
        cy.get('[data-testid="ChoiceSelectionNextButton"] > .r-1awozwy').click()
        cy.get('input').click()
        cy.get('[data-testid="ChoiceSelectionNextButton"] > .r-1awozwy').click()
        cy.get('.r-1yjpyg1').should('contain','Check your phone')
    })
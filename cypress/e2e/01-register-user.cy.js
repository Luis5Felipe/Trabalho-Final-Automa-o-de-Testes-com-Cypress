describe('Test Case 1: Register User', () => {
  it('Register User', () => {
    const email = `teste${Date.now()}@teste.com`

    cy.log('1 e 2 - Launch browser e navegar para a url')
    cy.visit('/')

    cy.log('3 - Verificar se a home page está visível')
    cy.get('#slider').should('be.visible')

    cy.log('4 - Clicar em Signup / Login')
    cy.contains('Signup / Login').click()

    cy.log('5 - Verificar New User Signup!')
    cy.contains('New User Signup!').should('be.visible')

    cy.log('6 - Preencher nome e email')
    cy.get('[data-qa="signup-name"]').type('Luis')
    cy.get('[data-qa="signup-email"]').type(email)

    cy.log('7 - Clicar em Signup')
    cy.get('[data-qa="signup-button"]').click()

    cy.log('8 - Verificar ENTER ACCOUNT INFORMATION')
    cy.contains('Enter Account Information', { matchCase: false }).should('be.visible')

    cy.log('9 - Preencher Title, Password e Date of birth')
    cy.get('#id_gender1').check()
    cy.get('[data-qa="password"]').type('123456')
    cy.get('[data-qa="days"]').select('10')
    cy.get('[data-qa="months"]').select('May')
    cy.get('[data-qa="years"]').select('2000')

    cy.log('10 - Marcar Sign up for our newsletter!')
    cy.get('#newsletter').check()

    cy.log('11 - Marcar Receive special offers from our partners!')
    cy.get('#optin').check()

    cy.log('12 - Preencher dados de endereço')
    cy.get('[data-qa="first_name"]').type('Luis')
    cy.get('[data-qa="last_name"]').type('Silva')
    cy.get('[data-qa="company"]').type('Empresa')
    cy.get('[data-qa="address"]').type('Rua A, 100')
    cy.get('[data-qa="address2"]').type('Casa')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type('Ontario')
    cy.get('[data-qa="city"]').type('Toronto')
    cy.get('[data-qa="zipcode"]').type('12345')
    cy.get('[data-qa="mobile_number"]').type('21999999999')

    cy.log('13 - Clicar em Create Account')
    cy.get('[data-qa="create-account"]').click()

    cy.log('14 - Verificar ACCOUNT CREATED!')
    cy.contains('Account Created!', { matchCase: false }).should('be.visible')

    cy.log('15 - Clicar em Continue')
    cy.get('[data-qa="continue-button"]').click()

    cy.log('16 - Verificar Logged in as username')
    cy.contains('Logged in as Luis').should('be.visible')

    cy.log('17 - Clicar em Delete Account')
    cy.contains('Delete Account').click()

    cy.log('18 - Verificar ACCOUNT DELETED! e clicar em Continue')
    cy.contains('Account Deleted!', { matchCase: false }).should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
  })
})
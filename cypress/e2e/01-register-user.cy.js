describe('Test Case 1: Register User', () => {
  it('Register User', () => {
    const email = `teste${Date.now()}@teste.com`

    cy.visit('/')

    cy.get('#slider').should('be.visible')

    cy.contains('Signup / Login').click()

    cy.contains('New User Signup!').should('be.visible')

    cy.get('[data-qa="signup-name"]').type('Luis')
    cy.get('[data-qa="signup-email"]').type(email)

    cy.get('[data-qa="signup-button"]').click()

    cy.contains('Enter Account Information', { matchCase: false }).should('be.visible')

    cy.get('#id_gender1').check()
    cy.get('[data-qa="password"]').type('123456')
    cy.get('[data-qa="days"]').select('10')
    cy.get('[data-qa="months"]').select('May')
    cy.get('[data-qa="years"]').select('2000')

    cy.get('#newsletter').check()

    cy.get('#optin').check()

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

    cy.get('[data-qa="create-account"]').click()

    cy.contains('Account Created!', { matchCase: false }).should('be.visible')

    cy.get('[data-qa="continue-button"]').click()

    cy.contains('Logged in as Luis').should('be.visible')

    cy.contains('Delete Account').click()

    cy.contains('Account Deleted!', { matchCase: false }).should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
  })
})

describe('Test Case 3: Login User with incorrect email and password', () => {
  it('Login User with incorrect email and password', () => {
    cy.visit('/')

    cy.get('#slider').should('be.visible')

    cy.contains('Signup / Login').click()

    cy.contains('Login to your account').should('be.visible')

    cy.get('[data-qa="login-email"]').type('emailerrado@teste.com')
    cy.get('[data-qa="login-password"]').type('senhaerrada')

    cy.get('[data-qa="login-button"]').click()

    cy.contains('Your email or password is incorrect!').should('be.visible')
  })
})

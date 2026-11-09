describe('Test Case 2: Login User with correct email and password', () => {
  const email = `teste${Date.now()}@teste.com`
  const senha = '123456'

  beforeEach(() => {
    cy.createUser(email, senha)
  })

  it('Login User with correct email and password', () => {
    cy.visit('/')

    cy.get('#slider').should('be.visible')

    cy.contains('Signup / Login').click()

    cy.contains('Login to your account').should('be.visible')

    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(senha)

    cy.get('[data-qa="login-button"]').click()

    cy.contains('Logged in as Luis').should('be.visible')

    cy.contains('Delete Account').click()

    cy.contains('Account Deleted!', { matchCase: false }).should('be.visible')
  })
})

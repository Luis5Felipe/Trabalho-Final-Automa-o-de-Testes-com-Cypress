describe('Test Case 4: Logout User', () => {
  const email = `teste${Date.now()}@teste.com`
  const senha = '123456'

  beforeEach(() => {
    cy.createUser(email, senha)
  })

  afterEach(() => {
    cy.deleteUser(email, senha)
  })

  it('Logout User', () => {
    cy.visit('/')

    cy.get('#slider').should('be.visible')

    cy.contains('Signup / Login').click()

    cy.contains('Login to your account').should('be.visible')

    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(senha)

    cy.get('[data-qa="login-button"]').click()

    cy.contains('Logged in as Luis').should('be.visible')

    cy.contains('Logout').click()

    cy.url().should('include', '/login')
    cy.contains('Login to your account').should('be.visible')
  })
})

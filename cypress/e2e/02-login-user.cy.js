describe('Test Case 2: Login User with correct email and password', () => {
  const email = `teste${Date.now()}@teste.com`
  const senha = '123456'

  beforeEach(() => {
    cy.createUser(email, senha)
  })

  it('Login User with correct email and password', () => {
    cy.log('1 e 2 - Launch browser e navegar para a url')
    cy.visit('/')

    cy.log('3 - Verificar se a home page está visível')
    cy.get('#slider').should('be.visible')

    cy.log('4 - Clicar em Signup / Login')
    cy.contains('Signup / Login').click()

    cy.log('5 - Verificar Login to your account')
    cy.contains('Login to your account').should('be.visible')

    cy.log('6 - Preencher email e senha corretos')
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(senha)

    cy.log('7 - Clicar em Login')
    cy.get('[data-qa="login-button"]').click()

    cy.log('8 - Verificar Logged in as username')
    cy.contains('Logged in as Luis').should('be.visible')

    cy.log('9 - Clicar em Delete Account')
    cy.contains('Delete Account').click()

    cy.log('10 - Verificar ACCOUNT DELETED!')
    cy.contains('Account Deleted!', { matchCase: false }).should('be.visible')
  })
})

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

    cy.log('9 - Clicar em Logout')
    cy.contains('Logout').click()

    cy.log('10 - Verificar se voltou para a página de login')
    cy.url().should('include', '/login')
    cy.contains('Login to your account').should('be.visible')
  })
})

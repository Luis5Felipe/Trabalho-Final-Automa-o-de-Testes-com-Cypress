describe('Test Case 3: Login User with incorrect email and password', () => {
  it('Login User with incorrect email and password', () => {
    cy.log('1 e 2 - Launch browser e navegar para a url')
    cy.visit('/')

    cy.log('3 - Verificar se a home page está visível')
    cy.get('#slider').should('be.visible')

    cy.log('4 - Clicar em Signup / Login')
    cy.contains('Signup / Login').click()

    cy.log('5 - Verificar Login to your account')
    cy.contains('Login to your account').should('be.visible')

    cy.log('6 - Preencher email e senha incorretos')
    cy.get('[data-qa="login-email"]').type('emailerrado@teste.com')
    cy.get('[data-qa="login-password"]').type('senhaerrada')

    cy.log('7 - Clicar em Login')
    cy.get('[data-qa="login-button"]').click()

    cy.log('8 - Verificar erro Your email or password is incorrect!')
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })
})
describe('Test Case 21: Add review on product', () => {
  it('Add review on product', () => {
    cy.log('1 e 2 - Launch browser e navegar para a url')
    cy.visit('/')

    cy.log('3 - Clicar em Products')
    cy.get('a[href="/products"]').click()

    cy.log('4 - Verificar ALL PRODUCTS')
    cy.url().should('include', '/products')
    cy.contains('All Products', { matchCase: false }).should('be.visible')

    cy.log('5 - Clicar em View Product')
    cy.contains('View Product').click()
    cy.url().should('include', '/product_details')

    cy.log('6 - Verificar Write Your Review')
    cy.contains('Write Your Review', { matchCase: false }).should('be.visible')

    cy.log('7 - Preencher nome, email e review')
    cy.get('#name').type('Luis')
    cy.get('#email').type('teste@teste.com')
    cy.get('#review').type('Produto muito bom, recomendo!')

    cy.log('8 - Clicar em Submit')
    cy.get('#button-review').click()

    cy.log('9 - Verificar Thank you for your review.')
    cy.contains('Thank you for your review.').should('be.visible')
  })
})

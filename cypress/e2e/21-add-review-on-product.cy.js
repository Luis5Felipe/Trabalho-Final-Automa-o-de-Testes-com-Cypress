describe('Test Case 21: Add review on product', () => {
  it('Add review on product', () => {
    cy.visit('/')

    cy.get('a[href="/products"]').click()

    cy.url().should('include', '/products')
    cy.contains('All Products', { matchCase: false }).should('be.visible')

    cy.contains('View Product').click()
    cy.url().should('include', '/product_details')

    cy.contains('Write Your Review', { matchCase: false }).should('be.visible')

    cy.get('#name').type('Luis')
    cy.get('#email').type('teste@teste.com')
    cy.get('#review').type('Produto muito bom, recomendo!')

    cy.get('#button-review').click()

    cy.contains('Thank you for your review.').should('be.visible')
  })
})

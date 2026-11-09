describe('Test Case 22: Add to cart from Recommended items', () => {
  it('Add to cart from Recommended items', () => {
    cy.visit('/')

    cy.scrollTo('bottom')

    cy.contains('Recommended Items', { matchCase: false }).should('be.visible')

    cy.get('.recommended_items .item.active .productinfo').first().then(($produto) => {
      cy.wrap($produto.find('p').text()).as('nomeProduto')
      cy.wrap($produto).find('.add-to-cart').click()
    })

    cy.contains('View Cart').click()

    cy.url().should('include', '/view_cart')
    cy.get('@nomeProduto').then((nomeProduto) => {
      cy.get('#cart_info_table').contains(nomeProduto).should('be.visible')
    })
  })
})

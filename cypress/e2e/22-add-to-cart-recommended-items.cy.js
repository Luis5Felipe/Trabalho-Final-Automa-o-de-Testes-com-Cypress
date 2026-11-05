describe('Test Case 22: Add to cart from Recommended items', () => {
  it('Add to cart from Recommended items', () => {
    cy.log('1 e 2 - Launch browser e navegar para a url')
    cy.visit('/')

    cy.log('3 - Rolar até o final da página')
    cy.scrollTo('bottom')

    cy.log('4 - Verificar RECOMMENDED ITEMS')
    cy.contains('Recommended Items', { matchCase: false }).should('be.visible')

    cy.log('5 - Clicar em Add To Cart no produto recomendado')
    cy.get('.recommended_items .item.active .productinfo').first().then(($produto) => {
      cy.wrap($produto.find('p').text()).as('nomeProduto')
      cy.wrap($produto).find('.add-to-cart').click()
    })

    cy.log('6 - Clicar em View Cart')
    cy.contains('View Cart').click()

    cy.log('7 - Verificar se o produto aparece no carrinho')
    cy.url().should('include', '/view_cart')
    cy.get('@nomeProduto').then((nomeProduto) => {
      cy.get('#cart_info_table').contains(nomeProduto).should('be.visible')
    })
  })
})

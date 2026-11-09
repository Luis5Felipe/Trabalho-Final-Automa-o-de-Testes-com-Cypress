describe('Test Case 20: Search Products and Verify Cart After Login', () => {
  const email = `teste${Date.now()}@teste.com`
  const senha = '123456'
  const produto = 'Dress'

  beforeEach(() => {
    cy.createUser(email, senha)
  })

  afterEach(() => {
    cy.deleteUser(email, senha)
  })

  it('Search Products and Verify Cart After Login', () => {
    cy.visit('/')

    cy.get('a[href="/products"]').click()

    cy.url().should('include', '/products')
    cy.contains('All Products', { matchCase: false }).should('be.visible')

    cy.get('#search_product').type(produto)
    cy.get('#submit_search').click()

    cy.contains('Searched Products', { matchCase: false }).should('be.visible')

    cy.get('.features_items .productinfo').should('have.length.greaterThan', 0)
    cy.get('.features_items .productinfo').each(($produto) => {
      cy.wrap($produto).should('be.visible')
    })
    cy.get('.features_items .productinfo').its('length').as('quantidade', { type: 'static' })

    cy.get('.features_items .productinfo .add-to-cart').each(($botao) => {
      cy.wrap($botao).click()
      cy.get('.close-modal').click()
    })

    cy.get('.shop-menu a[href="/view_cart"]').click()
    cy.get('@quantidade').then((quantidade) => {
      cy.get('#cart_info_table tbody tr').should('have.length', quantidade)
    })

    cy.contains('Signup / Login').click()
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(senha)
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as Luis').should('be.visible')

    cy.get('.shop-menu a[href="/view_cart"]').click()

    cy.get('@quantidade').then((quantidade) => {
      cy.get('#cart_info_table tbody tr').should('have.length', quantidade)
    })
  })
})

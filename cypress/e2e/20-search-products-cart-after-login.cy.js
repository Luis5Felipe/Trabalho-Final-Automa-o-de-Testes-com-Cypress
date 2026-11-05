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
    cy.log('1 e 2 - Launch browser e navegar para a url')
    cy.visit('/')

    cy.log('3 - Clicar em Products')
    cy.get('a[href="/products"]').click()

    cy.log('4 - Verificar ALL PRODUCTS')
    cy.url().should('include', '/products')
    cy.contains('All Products', { matchCase: false }).should('be.visible')

    cy.log('5 - Pesquisar o produto e clicar em buscar')
    cy.get('#search_product').type(produto)
    cy.get('#submit_search').click()

    cy.log('6 - Verificar SEARCHED PRODUCTS')
    cy.contains('Searched Products', { matchCase: false }).should('be.visible')

    cy.log('7 - Verificar se os produtos da busca estão visíveis')
    cy.get('.features_items .productinfo').should('have.length.greaterThan', 0)
    cy.get('.features_items .productinfo').each(($produto) => {
      cy.wrap($produto).should('be.visible')
    })
    cy.get('.features_items .productinfo').its('length').as('quantidade', { type: 'static' })

    cy.log('8 - Adicionar os produtos ao carrinho')
    cy.get('.features_items .productinfo .add-to-cart').each(($botao) => {
      cy.wrap($botao).click()
      cy.get('.close-modal').click()
    })

    cy.log('9 - Clicar em Cart e verificar os produtos no carrinho')
    cy.get('.shop-menu a[href="/view_cart"]').click()
    cy.get('@quantidade').then((quantidade) => {
      cy.get('#cart_info_table tbody tr').should('have.length', quantidade)
    })

    cy.log('10 - Clicar em Signup / Login e fazer login')
    cy.contains('Signup / Login').click()
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(senha)
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as Luis').should('be.visible')

    cy.log('11 - Ir novamente para o carrinho')
    cy.get('.shop-menu a[href="/view_cart"]').click()

    cy.log('12 - Verificar se os produtos continuam no carrinho após o login')
    cy.get('@quantidade').then((quantidade) => {
      cy.get('#cart_info_table tbody tr').should('have.length', quantidade)
    })
  })
})

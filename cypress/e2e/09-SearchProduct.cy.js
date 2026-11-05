
describe('Funcionalidade de Pesquisa de Produtos', () => {

    it('Deve acessar a página inicial com sucesso', () => {

        cy.visit('https://automationexercise.com/');

        cy.get('body').should('be.visible');

        cy.contains('Full-Fledged practice website for Automation Engineers')
          .should('be.visible');

    });

    it('Deve acessar a página de produtos', () => {

        cy.visit('https://automationexercise.com/');

        cy.contains('a', 'Products').click();

        cy.contains('h2', 'All Products').should('be.visible');

        cy.url().should('include', '/products');

    });

    it('Deve pesquisar um produto e validar os resultados', () => {

        cy.visit('https://automationexercise.com/');

        cy.contains('a', 'Products').click();

        cy.contains('h2', 'All Products').should('be.visible');

        cy.get('#search_product').type('Top');

        cy.get('#submit_search').click();

        cy.contains('h2', 'Searched Products')
          .should('be.visible');

        cy.get('.features_items')
          .should('be.visible')
          .within(() => {
              cy.contains('.productinfo', 'Top')
                .should('be.visible');
          });

    });

});

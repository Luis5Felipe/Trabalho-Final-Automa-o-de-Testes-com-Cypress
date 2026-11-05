
describe('Funcionalidade de Inscrição pelo Carrinho', () => {

    it('Deve realizar a inscrição pela página do carrinho', () => {

        cy.visit('https://automationexercise.com/');
        
        cy.get('body').should('be.visible');

        cy.contains('a', 'Cart').click();

        cy.url().should('include', '/view_cart');

        cy.get('footer').scrollIntoView();

        cy.contains('h2', 'Subscription')
          .should('be.visible');

        cy.get('#susbscribe_email')
          .type('teste@email.com');

        cy.get('#subscribe').click();

        cy.contains('You have been successfully subscribed!')
          .should('be.visible');

    });

});

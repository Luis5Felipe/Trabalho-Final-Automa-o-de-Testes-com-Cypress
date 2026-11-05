
describe('Funcionalidade de Inscrição', () => {

    it('Deve realizar a inscrição na newsletter com sucesso', () => {

    
        cy.visit('https://automationexercise.com/');

        cy.get('body').should('be.visible');
        
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
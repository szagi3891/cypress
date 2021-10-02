describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://onet.pl');
        cy.get('.cmp-intro_acceptAll').click();
        cy.get('.mainMenu').first().click();
        cy.url().should('include', 'https://www.morizon.pl');

        cy.get('.main-page-tabs-title').first().contains('Wyróżnione inwestycje');

        // cy.get('.main-page-tabs-title')
        // Najnowsze ogłoszenia
    });
});


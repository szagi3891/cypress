describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://starsports.bet/');

        const button = cy.get('.CookiesPolicyWrapper button');
        button.contains('Accept');
        button.click();

        const signup = cy.get('*[data-test="account-navigation-signup-link"] a[href="/?account=signup"]');
        signup.contains('Sign Up');
        signup.click();
    });
});


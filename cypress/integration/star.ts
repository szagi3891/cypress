describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://starsports.bet/');

        const button = cy.get('.CookiesPolicyWrapper button', {
            timeout: 20000
        });
        button.contains('Accept');
        button.click();

        cy.get('*[data-component="QuickHeader"]');

        const signup = cy.get('*[data-component="QuickHeader"] *[data-component="SignUpButtons"]');
        signup.contains('Sign Up');
        signup.click();
        // a[href="/?account=signup"]

        // console.info(signup);
    });
});


describe('Filmweb', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://www.filmweb.pl/');

        //wyraenie zgody na ciasteczka
        cy.get('button[id="didomi-notice-agree-button"]').click();

        //pominięcie reklam
        cy.get('*[class="ws__skipButton"]').click();

        //otworzenie menu
        cy.get('button[id="menuOpener"]').click();

        //klik w przycisk do logowania
        cy.get('a[id="loginButton"]').click();

        //kliknij w logowanie przez filmweb
        cy.get('*[class*="authButton--filmweb"]').click();
        // cy.contains(selector, content)

        cy.get('*[id="loginForm"]').within(() => {

            cy.get('input[name="j_username"]').type('tule bule mule miśki tata pierdzi.');

            // cy.get('input[name="j_username"]').type('login);
            // cy.get('input[name="j_password"]').type('password');
            // cy.wait(20000);
            // cy.get('*[class*="Button--submit"]').click();
        });
        
        // cy.visit('https://www.filmweb.pl/user/szagi3891/wantToSee');
    });
});

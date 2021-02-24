describe('Display Results', () => {
  it('displays results from an API', () => {
    // visit the app
    cy.visit('/');

    // intercept the GET request and provide the fixture as response
    cy.intercept('GET', '/search', { fixture: 'itunes' })
      .as('getSearch');

    // get the search input and type into it
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk')
      
    // get the spinner that should be visible
    cy.get('.spinner')
      .should('be.visible');

    // wait while the search results come back then verify them
    cy.wait('@getSearch')
      .get('main')
      .contains('Homework')
      .should('be.visible');

    // untick the Explicit box to remove one album
    cy.contains('Explicit')
      .click();

    // check that that album has been removed
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });
});

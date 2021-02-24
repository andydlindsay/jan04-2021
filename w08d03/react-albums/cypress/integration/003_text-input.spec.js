describe('Text Input', () => {
  beforeEach(() => {
    cy.visit('/');
    // use `as` to alias vars and reference them with @varName
    cy.get('.search__form')
      .find('input')
      .as('searchField');
  });

  it('accepts text input', () => {
    cy.get('@searchField')
      .type('nsync', { delay: 100 })
      .should('have.value', 'nsync');
  });

  it('can handle backspace', () => {
    cy.get('@searchField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });
});

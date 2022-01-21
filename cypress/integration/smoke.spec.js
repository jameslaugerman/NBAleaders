describe('Load page and verify title, image, and text are present', () => {
  before(() => {
    cy.visit('/');
  });
  it('should show a title', () => {
    cy.contains('2021 Season Averages').should('exist');
  });

  it('should show an image', () => {
    cy.get('img').should('exist');
  });

  it('should show text', () => {
    cy.contains('Points').should('exist');
    cy.contains('Rebounds').should('exist');
    cy.contains('Assists').should('exist');
  });
});

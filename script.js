describe('Nav bar CSS Test', () => {
  it('should have the correct background-color, padding, and text color', () => {
    // Visit the base URL
    cy.visit(baseUrl);

    // Check the background color of the nav is black
    cy.get('nav').should('have.css', 'background-color', 'rgb(0, 0, 0)');

    // Check the padding of the nav is 10px
    cy.get('nav').should('have.css', 'padding', '10px');

    // Check the text color (font color) of the nav is white
    cy.get('nav').should('have.css', 'color', 'rgb(255, 255, 255)');
  });
});

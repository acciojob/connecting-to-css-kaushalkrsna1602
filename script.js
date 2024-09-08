describe('Stylesheet Test', () => {
  it('should include the stylesheet with href containing "styles.css"', () => {
    // Visit the base URL
    cy.visit(baseUrl);
    
    // Ensure the stylesheet link is present and loaded
    cy.get('link[rel="stylesheet"][type="text/css"]').should('have.attr', 'href').and('include', 'styles.css');
  });
});


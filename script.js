describe('Nav bar CSS Test', () => {
  it('should have the correct background-color, padding, and color', () => {
    // Visit the base URL
    cy.visit(baseUrl);

    // Check that the background-color of the nav is black
    cy.get("nav").invoke("css", "background-color").then(e => {
      expect(e).to.eq("rgb(0, 0, 0)"); // Black background
    });

    // Check that the padding of the nav is 10px
    cy.get("nav").invoke("css", "padding").then(e => {
      expect(e).to.eq("10px");
    });

    // Check that the text color of the nav is white
    cy.get("nav").invoke("css", "color").then(e => {
      expect(e).to.eq("rgb(255, 255, 255)"); // White text
    });
  });
});

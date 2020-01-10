describe('React Code Challenge', () => {
  it('Connection Test', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#root').should('exist')
  });
});
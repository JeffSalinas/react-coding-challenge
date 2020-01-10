describe('React Code Challenge', () => {
  describe('Render Components', () => {
    it('should connect to localhost', () => {
      cy.visit('http://localhost:3000/');
      cy.get('#root').should('exist');
    });
  
    it('should render start/stop message toggle', () => {
      cy.get('#start-stop-messages-button').should('exist');
    });
  
    it('should render clear messages button', () => {
      cy.get('#clear-messages-button').should('exist');
    });
  
    it('should render 3 warning collumns', () => {
      cy.get('#type1').should('exist');
      cy.get('#type2').should('exist');
      cy.get('#type3').should('exist');
    });
  });
});
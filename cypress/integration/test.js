describe('React Code Challenge', () => {
  describe('Should Render Components', () => {
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
  
  describe('Should Have Correct Content', () => {
    it('should only have errors in error column', () => {
      cy.wait(1500);
      cy.window().its('test').its('type1').each((element) => {
        expect(element.priority).to.equal(1);
      });
    })

    it('should only have warnings in warning column', () => {
      cy.window().its('test').its('type2').each((element) => {
        expect(element.priority).to.equal(2);
      });
    });
  
    it('should only have info in info column', () => {
      cy.window().its('test').its('type3').each((element) => {
        expect(element.priority).to.equal(3);
      });
    });

    it('should render with all error messages #F56236', () => {
      cy.get('.errorMessages').each((element) => {
        expect(element).to.have.css('background-color', 'rgb(245, 98, 54)');
      })
    });

    it('should render with all error messages #FCE788', () => {
      cy.get('.warningMessages').each((element) => {
        expect(element).to.have.css('background-color', 'rgb(252, 231, 136)');
      })
    });

    it('should render with all error messages #88FCA3', () => {
      cy.get('.infoMessages').each((element) => {
        expect(element).to.have.css('background-color', 'rgb(136, 252, 163)');
      })
    });
  });

  describe('Should have functionality', () => {
    it('should pause messages when Stop Messages button is clicked', () => {
      cy.window().its('totalMessages').then((total) => {
        cy.get('#start-stop-messages-button').click();
        cy.wait(2000);
        cy.window().its('totalMessages').should('equal', total);
      });
    });

    it('should remove a single cleared item', () => {
      cy.window().its('totalMessages').then((total) => {
        cy.get('#4').click();
        cy.window().its('totalMessages').should('be.lt', total)
      })
    })

    it('should start messages when start messages button is clicked', () => {
      cy.window().its('totalMessages').then((total) => {
        cy.get('#start-stop-messages-button').click();
        cy.wait(2000);
        cy.window().its('totalMessages').should('be.gt', total);
      });
    });

    it('should clear all messages on main clear button', () => {
      cy.get('#start-stop-messages-button').click();
      cy.get('#clear-messages-button').click()
      cy.window().its('totalMessages').should('equal', 0)
    })
  });
});
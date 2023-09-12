Cypress.on('uncaught:exception', (err, runnable) => {
  // Log the error without failing the test
  console.error('Uncaught exception:', err);
  return false; // Prevent Cypress from failing the test
});

describe('Task 1 cypress', () => {
  it('Practice Forms', () => {
     cy.visit('https://demoqa.com/')
    cy.contains('Forms').click();
    cy.contains('Practice Form').click();
    cy.get('#firstName').type('Cowlar');
    cy.get('#lastName').type('Developer');
    cy.get('#userEmail').type('qaengineer@cowlar.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').type('male');
    cy.get('#userNumber').type('0123456789');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').type('music');
    cy.get('.subjects-auto-complete__value-container').type('Computer Science');
    cy.get('#currentAddress').type('address1');
    
    

  })
})
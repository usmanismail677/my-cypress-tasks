describe('Cypress Task 2', () => {
  it('text area', () => {
    cy.visit('https://demoqa.com/')
    cy.contains('Interactions').click();
    cy.get(':nth-child(1) > .group-header > .header-wrapper').should('contain', 'Elements');
    cy.get(':nth-child(2) > .group-header > .header-wrapper').should('contain', 'Forms');
    cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').should('contain', 'Alerts, Frame & Windows');
    cy.get(':nth-child(4) > .group-header > .header-wrapper').should('contain', 'Widgets');
    cy.get(':nth-child(5) > .group-header > .header-wrapper').should('contain', 'Interactions');
    cy.contains('Resizable').click();
    cy.get('.playgound-header').should('contain', 'Resizable');
    cy.get('#resizableBoxWithRestriction').should('have.css', 'height', '200px')
    .should('have.css', 'width', '200px');
    cy.get('#resizableBoxWithRestriction')
      .trigger('mousedown', 'bottom-right')
      .trigger('mousemove', { clientX: 400, clientY: 300 })
      .trigger('mouseup');
      cy.get('#resizableBoxWithRestriction').should('have.class', 'react-resizable');
      cy.get('#resizableBoxWithRestriction')
      .should('have.css', 'min-height', '150px')
      .should('have.css', 'min-width', '150px');
      cy.get('#resizable').should('have.class', 'react-resizable');

  })
})
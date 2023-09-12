describe('cypress task3', () => {
  it('intercept', () => {
    cy.visit('https://demoqa.com/')
    cy.contains('Book Store Application').click();
    cy.contains('Book Store').click();
    cy.contains('Understanding ECMAScript 6').click();
  })
})
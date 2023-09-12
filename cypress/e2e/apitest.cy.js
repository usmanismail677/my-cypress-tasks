describe('cypress task3', () => {
  it('intercept', () => {
    cy.intercept('GET', 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574',
    ).as('bookRequest')
    cy.visit('https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574')
    cy.wait('@bookRequest').then((res)=>{
      cy.log(res)
    })
    cy.visit('https://demoqa.com/')
    cy.contains('Book Store Application').click();
    cy.contains('Book Store').click();
    cy.contains('Understanding ECMAScript 6').click();
  })
})

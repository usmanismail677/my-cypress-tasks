describe('Intercept Task', () => {
    it('Intercept API response', () => {
      cy.visit('https://demoqa.com/');
      cy.contains('Book Store Application').click();
      cy.contains('Book Store').click();
      cy.contains('Understanding ECMAScript 6').click();
      cy.contains('Author: Nicholas C. Zakas');
      cy.intercept(
        'GET',
        'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574',
        {
          statusCode: 200,
          body: {
            isbn: '9781593277574',
            title: 'Understanding ECMAScript 6',
            subTitle: 'The Definitive Guide for JavaScript Developers',
            author: 'Nicholas C. Zakas',
            publish_date: '2016-09-03T00:00:00.000Z',
            publisher: 'No Starch Press',
            pages: 352,
            description: 'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E',
            website: 'https://leanpub.com/understandinges6/read',
          },
        }
      ).as('bookApiRequest');
      cy.wait('@bookApiRequest').should((interception) => {
        expect(interception.response.statusCode).to.equal(200);
        expect(interception.response.body).to.deep.equal({
          isbn: '9781593277574',
          title: 'Understanding ECMAScript 6',
          subTitle: 'The Definitive Guide for JavaScript Developers',
          author: 'Nicholas C. Zakas',
          publish_date: '2016-09-03T00:00:00.000Z',
          publisher: 'No Starch Press',
          pages: 352,
          description: 'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E',
          website: 'https://leanpub.com/understandinges6/read',
        });
      });
    });
  });
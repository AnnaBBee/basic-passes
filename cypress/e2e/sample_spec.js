describe('The Passes Page', function() {
  it('successfully loads', function() {
    cy.visit('/');
  });
  it('has header present', function() {
    cy.get('.n-header').should('exist');
  });
  it('has footer present', function() {
    cy.get('footer').should('exist');
  });
  it('has main content block present', function() {
    cy.get('.n-layout__main').should('exist');
  });
  it('has sidebar present', function() {
    cy.get('.n-layout__header--dark-blue').should('exist');
  });
  it('has FAQs block present', function() {
    cy.get('.n-layout__faqs').should('exist');
  });
  it('has main passes container', function() {
    cy.get('.n-layout__main-inner').should('exist');
  });
  it('has the title "Your Passes"', function() {
    cy.get('h2').should('contain', 'Your Passes');
  });

  it('has the subscription called Sky Cinema Month Pass', function() {
    cy.get('.subscription-name').should('contain', 'Sky Cinema Month Pass');
    cy.get('.n-button').should('contain', 'Cancel Pass');
  });

  it('has the button "Cancel Pass" under Sky Cinema Month Pass', function() {
    cy.get('.n-button').should('contain', 'Cancel Pass');
  });

  it('has the chevron under Sky Cinema Month Pass', function() {
    cy.get('.n-accordion__chevron').should('exist');
  });

  it('should have a "You might also like" section', function() {
    cy.get('h2').should('contain', 'You might also like');
  });

  it('should have all accordions closed by default and open once they are clicked on', function() {
    cy.get('.n-accordion__item--hidden')
      .click({ multiple: true })
      .get('.n-accordion__item--visible');
  });
});


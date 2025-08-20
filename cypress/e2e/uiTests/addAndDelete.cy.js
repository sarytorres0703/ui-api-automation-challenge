describe('TC2 - Add and Delete an Employee', () => {
  it('Should add an employe and delete it', () => {
    cy.visit(Cypress.env('LOGIN_URL'));
    cy.get('input[id="Username"]').type(Cypress.env('USERNAME'));
    cy.get('input[id="Password"]').type(Cypress.env('PASSWORD'));
    cy.get('button[type="submit"]').click();
    cy.contains('Paylocity Benefits Dashboard');
    cy.get('button[id="add"]').click();
    cy.get('input[id="firstName"]').type('FirstDelete');
    cy.get('input[id="lastName"]').type('LastDelete');
    cy.get('input[id="dependants"]').type('1');
    cy.get('button[id="addEmployee"]').click();
    cy.contains('FirstDelete').should('exist');
    cy.contains('LastDelete').should('exist');
    cy.get('i[class="fas fa-times"]').eq(2).click();
    cy.get('button[id="deleteEmployee"]').click();
  });
});
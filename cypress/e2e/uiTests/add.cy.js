describe('TC1 - Add Employee', () => {
  it('Should add an employe and validate if is displayed', () => {
    cy.visit(Cypress.env('LOGIN_URL'));
    cy.get('input[id="Username"]').type(Cypress.env('USERNAME'));
    cy.get('input[id="Password"]').type(Cypress.env('PASSWORD'));
    cy.get('button[type="submit"]').click();
    cy.contains('Paylocity Benefits Dashboard');
    cy.get('button[id="add"]').click();
    cy.get('input[id="firstName"]').type('Sary');
    cy.get('input[id="lastName"]').type('Maya');
    cy.get('input[id="dependants"]').type('7');
    cy.get('button[id="addEmployee"]').click();
    cy.contains('Sary').should('exist');
    cy.contains('Maya').should('exist');
    cy.contains('7').should('exist');
  });
});
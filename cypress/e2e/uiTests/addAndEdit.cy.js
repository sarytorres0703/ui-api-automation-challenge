describe('TC1 - Add Employee', () => {
  it('Should add an employe and edit it', () => {
    cy.visit(Cypress.env('LOGIN_URL'));
    cy.get('input[id="Username"]').type(Cypress.env('USERNAME'));
    cy.get('input[id="Password"]').type(Cypress.env('PASSWORD'));
    cy.get('button[type="submit"]').click();
    cy.contains('Paylocity Benefits Dashboard');
    cy.get('button[id="add"]').click();
    cy.get('input[id="firstName"]').type('FirstEdit');
    cy.get('input[id="lastName"]').type('LastEdit');
    cy.get('input[id="dependants"]').type('1');
    cy.get('button[id="addEmployee"]').click();
    cy.contains('FirstEdit').should('exist');
    cy.contains('LastEdit').should('exist');
    cy.get('i[class="fas fa-edit"]').eq(2).click();
    cy.get('input[id="firstName"]').clear();
    cy.get('input[id="lastName"]').clear();
    cy.get('input[id="firstName"]').type('FirstEdited');
    cy.get('input[id="lastName"]').type('LastEdited');
    cy.get('button[id="updateEmployee"]').click();
    cy.contains('FirstEdited').should('exist');
    cy.contains('LastEdited').should('exist');
  });
});
describe('TC2 - Add and Delete an Employee', () => {
  it('Should add an employe and delete it', () => {
    cy.visit('https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login');
    cy.get('input[id="Username"]').type('TestUser768');
    cy.get('input[id="Password"]').type('|G!C_Ha6N)nz');
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
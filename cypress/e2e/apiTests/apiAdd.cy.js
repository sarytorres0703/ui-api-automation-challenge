describe('API TC1 - Add Employee', () => {
  it('Should add an employe and validate if is stored by post and get methods', () => {
    console.log(Cypress.env('API_URL')); 
    const newEmployee = {
      firstName: 'APIAddTest',
      lastName: 'APIAddTest',
      dependents: 3
    };
    cy.request({
      method: 'POST',
      url: Cypress.env('API_URL'),
      headers: {
        Authorization: Cypress.env('API_AUTHORIZATION')
      },
      body: newEmployee
    }).then((response) => {
      expect(response.status).to.eq(200);
      const createdId = response.body.id;
      expect(createdId).to.exist;
      cy.request({
        method: 'GET',
        url: Cypress.env('API_URL'),
        headers: {
          Authorization: Cypress.env('API_AUTHORIZATION')
        }
      }).then((getResponse) => {
        const employees = getResponse.body;
        const found = employees.find(emp => emp.id === createdId);
        expect(found).to.not.be.undefined;
        expect(found.firstName).to.eq(newEmployee.firstName);
        expect(found.lastName).to.eq(newEmployee.lastName);
      });
    });
  });
});

describe('API TC3 - Add Employee and edit it', () => {
  it('Should add an employee and edit it using post, put and get methods', () => {
    const newEmployee = {
      firstName: 'APIEditTest',
      lastName: 'APIEditTest',
      dependents: 4
    };
    const updatedEmployee = {
      firstName: 'APIEditedTest',
      lastName: 'APIEditedTest',
      dependants: 6
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
        method: 'PUT',
        url: Cypress.env('API_URL'),
        headers: {
          Authorization: Cypress.env('API_AUTHORIZATION')
        },
        body: {
          id: createdId,
          ...updatedEmployee
        }
      }).then((updateResponse) => {
        expect(updateResponse.status).to.eq(200);
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
          expect(found.firstName).to.eq(updatedEmployee.firstName);
          expect(found.dependants).to.eq(updatedEmployee.dependants);
        });
      });
    });
  });
});

describe('API TC2 - Add and delete an Employee', () => {
  it('Should add an employe and delete it by post, delete and get methods', () => {
    const newEmployee = {
      firstName: 'APIDeleteTest',
      lastName: 'APIDeleteTest',
      dependents: 5
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
        method: 'DELETE',
        url: Cypress.env('API_URL')+`/${createdId}`,
        headers: {
          Authorization: Cypress.env('API_AUTHORIZATION')
        }
      }).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200);
        cy.request({
          method: 'GET',
          url: Cypress.env('API_URL'),
          headers: {
            Authorization: Cypress.env('API_AUTHORIZATION')
          }
        }).then((getResponse) => {
          const employees = getResponse.body;
          const found = employees.find(emp => emp.id === createdId);
          expect(found).to.be.undefined;
        });
      });
    });
  });
});

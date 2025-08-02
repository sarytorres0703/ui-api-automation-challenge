describe('API TC2 - Add and Delete an Employee', () => {
  it('Should add an employe and delete it by post, delete and get methods', () => {
    const newEmployee = {
      firstName: 'APIDeleteTest',
      lastName: 'APIDeleteTest',
      dependents: 5
    };
    cy.request({
      method: 'POST',
      url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/Employees',
      headers: {
        Authorization: 'Basic VGVzdFVzZXI3Njg6fEchQ19IYTZOKW56'
      },
      body: newEmployee
    }).then((response) => {
      expect(response.status).to.eq(200);
      const createdId = response.body.id;
      expect(createdId).to.exist;
      cy.request({
        method: 'DELETE',
        url: `https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/Employees/${createdId}`,
        headers: {
          Authorization: 'Basic VGVzdFVzZXI3Njg6fEchQ19IYTZOKW56'
        }
      }).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200);
        cy.request({
          method: 'GET',
          url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/Employees',
          headers: {
            Authorization: 'Basic VGVzdFVzZXI3Njg6fEchQ19IYTZOKW56'
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

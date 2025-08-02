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
        method: 'PUT',
        url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/Employees',
        headers: {
          Authorization: 'Basic VGVzdFVzZXI3Njg6fEchQ19IYTZOKW56'
        },
        body: {
          id: createdId,
          ...updatedEmployee
        }
      }).then((updateResponse) => {
        expect(updateResponse.status).to.eq(200);
        cy.request({
          method: 'GET',
          url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/Employees',
          headers: {
            Authorization: 'Basic VGVzdFVzZXI3Njg6fEchQ19IYTZOKW56'
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

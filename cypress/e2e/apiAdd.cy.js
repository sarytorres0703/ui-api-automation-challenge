describe('API TC1 - Add Employee', () => {
  it('Should add an employe and validate if is stored by post and get methods', () => {
    const newEmployee = {
      firstName: 'APIFistTest',
      lastName: 'APILastTest',
      dependents: 3
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
        method: 'GET',
        url: 'https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/Employees',
        headers: {
          Authorization: 'Basic VGVzdFVzZXI3Njg6fEchQ19IYTZOKW56'
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

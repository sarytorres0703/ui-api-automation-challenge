# UI API Automation Challenge

## Description
This project contains UI and API test cases using Cypress.

## Prerequisites
Make sure you have the following installed on your machine:
- Node.js
- npm
- Cypress

## Setup

### Step 1: Clone the Repository
First, clone the repository to your local machine: git clone https://github.com/sarytorres0703/ui-api-automation-challenge.git

### Step 2: Create the .env file
To run the test cases, you need to configure a .env file.
Follow these steps:
 1. Rename the .env.sample to .env
 2. Edit the .env file with your own credentials
 Note: Do not commit your .env file to GitHub

### Step 3: Validate variables in cypress.config.js file
    config.env.API_URL = process.env.API_URL;
    config.env.API_AUTHORIZATION = process.env.API_AUTHORIZATION;
    config.env.LOGIN_URL = process.env.LOGIN_URL;
    config.env.USERNAME = process.env.USERNAME;
    config.env.PASSWORD = process.env.PASSWORD;

### Step 4: Install dependencies
 - Run the following command: npm install

### Step 5: Install package
 - Run the following command: npm install dotenv

## Running TCs
Once you've configured your .env you can run the test cases
 - Option 1: npx cypress open
 - Option 2: npx cypress run

## TCs Results
If you used npx cypress open: you will see the results in the graphical interface.
If you used npx cypress run: you will see the results in the terminal.



*** If the tests fail, double-check that the .env file is properly configured with the correct credentials.


Pasos para Configurar Cypress con Variables de Entorno
Instalar dotenv
Para cargar las variables del archivo .env dentro de Cypress, primero debemos instalar el paquete dotenv:

npm install dotenv
Crear un archivo .env
En la raíz de tu proyecto, crea un archivo .env y agrega las siguientes variables (ajustando los valores según corresponda):

API_URL=https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/api/Employees
API_AUTHORIZATION=Basic VGVzdFVzZXI3Njg6fEchQ19IYTZOKW56
LOGIN_URL=https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/Login
USERNAME=TestUser768
PASSWORD=|G!C_Ha6N)nz
Estas variables estarán disponibles dentro de Cypress para tus pruebas.
Configurar cypress.config.js para Cargar las Variables
En tu archivo cypress.config.js, carga las variables de entorno desde el archivo .env usando dotenv. Aquí está el código de ejemplo:

const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

// Cargar las variables del archivo .env
dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Añadir las variables de entorno al objeto de configuración de Cypress
      config.env.API_URL = process.env.API_URL;
      config.env.API_AUTHORIZATION = process.env.API_AUTHORIZATION;
      config.env.LOGIN_URL = process.env.LOGIN_URL;
      config.env.USERNAME = process.env.USERNAME;
      config.env.PASSWORD = process.env.PASSWORD;

      return config;
    },
  },
});
Usar las Variables de Entorno en las Pruebas
Ahora puedes acceder a las variables de entorno dentro de tus pruebas utilizando Cypress.env(). Por ejemplo:

describe('API TC1 - Add Employee', () => {
  it('Should add an employee and validate if is stored by post and get methods', () => {
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
Reiniciar Cypress
Después de realizar cambios en las variables de entorno o en el archivo de configuración, asegúrate de reiniciar Cypress para que los cambios surtan efecto.

npx cypress open
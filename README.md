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

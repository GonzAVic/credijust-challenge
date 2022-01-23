/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("getByTestID", (selector, ...args) => {
  return cy.get(`[data-tid=${selector}]`, ...args);
});

Cypress.Commands.add("login", () => {
  const user = {
    firstName: "Victor",
    lastName: "Gonzalez",
    email: "victorgonz96@gmail.com",
    phoneNumber: "9991542724",
  };
  window.localStorage.setItem("userData", JSON.stringify(user));
});

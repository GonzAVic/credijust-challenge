/* eslint-disable no-undef */

describe("On Login page -", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("Should render the correct elements", () => {
    cy.getByTestID("layout-base").should("be.visible");
    cy.getByTestID("firstName-input").should("be.visible");
    cy.getByTestID("lastName-input").should("be.visible");
    cy.getByTestID("email-input").should("be.visible");
    cy.getByTestID("phoneNumber-input").should("be.visible");
    cy.getByTestID("login-submit-btn").should("be.visible");
  });

  it("User should be able to fill the form", () => {
    cy.getByTestID("layout-base").should("be.visible");
    cy.getByTestID("firstName-input").type("Victor");
    cy.getByTestID("lastName-input").type("Gonzalez");
    cy.getByTestID("email-input").type("victorgonz96@gmail.com");
    cy.getByTestID("phoneNumber-input").type("9991542724");
    cy.getByTestID("login-submit-btn").click();

    cy.location("pathname").should("eq", "/comparator");
  });

  it("User should NOT be able to continue if the form is not filled", () => {
    cy.getByTestID("layout-base").should("be.visible");
    cy.getByTestID("firstName-input").type("Victor");
    cy.getByTestID("phoneNumber-input").type("9991542724");
    cy.getByTestID("login-submit-btn")
      .click()
      .then(() => {
        // eslint-disable-next-line testing-library/await-async-utils
        cy.wait(1000);
        cy.location("pathname").should("eq", "/login");
      });

    
  });
});

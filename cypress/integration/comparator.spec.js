/* eslint-disable no-undef */

describe("On Comparator page -", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("http://localhost:3000/comparator");
  });
  afterEach(() => {
    cy.clearLocalStorage();
  });

  it("Should render the correct elements", () => {
    const coins = ["BTC", "ETH", "XRP"];
    const providers = ["cryptocompare", "stormgain", "coingecko"];
    cy.getByTestID("layout-base").should("be.visible");
    cy.getByTestID(`comparator-tab-${coins[0]}`).should("be.visible");
    cy.getByTestID(`comparator-tab-${coins[1]}`).should("be.visible");
    cy.getByTestID(`comparator-tab-${coins[2]}`).should("be.visible");

    cy.getByTestID(`coin-table-${providers[0]}`).should("be.visible");
    cy.getByTestID(`coin-table-${providers[1]}`).should("be.visible");
    cy.getByTestID(`coin-table-${providers[2]}`).should("be.visible");

    cy.getByTestID("comparator-converter").should("be.visible");
  });
});

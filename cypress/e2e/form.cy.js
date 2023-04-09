/// <reference types="Cypress"/>

describe("Card form tests", () => {
  before(() => {
    cy.visit("index.html");
  });

  it("Verify that the main page items are showing", () => {
    cy.get(".front").should("be.visible");
    cy.get(".back").should("be.visible");
    cy.get("#card-form").should("be.visible");
    
    cy.get(".bg-mobile").should("not.be.visible");
    cy.get(".submitted-status").should("not.be.visible");
  });

  it("Fail validations form (blank fields)", () => {
    cy.get("#btn-confirm").click();

    cy.get(".text-error").then((error) => {
      error.each((i, text) => {
        cy.get(text).contains("This field cannot be blank");
      });
    });
  });

});

/// <reference types="cypress" />
describe('Testing the Product Details Page', () => {
      
 
   it("Navigeer naar een productoverzicht pagina", () => {
       cy.visit("https://techgrounds-at2.myshopify.com/");
       cy.wait(1000);
       cy.contains("All Products").click({ force: true });
       cy.url().should("include", "/collections");
     });

})

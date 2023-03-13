/// <reference types="cypress" />
describe('Testing the Product Details Page', () => {
    beforeEach(() => {
           cy.visit('https://techgrounds-at2.myshopify.com')
    })
    it('displays producten in menu', () => {
            cy.get('.header__inline-menu').should('exist')}
)}
)


/// <reference types ="Cypress" />

describe(' Valid Login', () => {
    it('Open URL', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains("Signin").click();
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('.navbar-inner > .container').should('be.visible')
    }
)})
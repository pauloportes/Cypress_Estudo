/// <reference types= "cypress"/>

/* global Then, When, Given */

Given ('cliquei para realizar sign-in', () => {
    cy.visit('/').get('.login').click()
    .url().should('include', 'controller=authentication&back=my-account')
})
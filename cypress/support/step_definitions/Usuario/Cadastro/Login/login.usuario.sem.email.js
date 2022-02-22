/// <reference types= "cypress"/>

/* global Then, When, Given */

When ('preencho os dados de login sem informar email', () => {
    global.usuario.email = ' '

    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type(global.usuario.senha)
})

Then('o sitema notifica o usuário que é necessário informar um e-mail', () => {
    cy.get('div.alert.alert-danger').should('be.visible')
    .find('ol > li').should('have.text', 'An email address required.')
})
/// <reference types= "cypress"/>

/* global Then, When, Given */

When ('preencho os dados de login com usuario não cadastrado', () => {
    global.usuario.email = 'usuario.sem.cadastro@qazando.com'

    cy.get('#email').type(global.usuario.email)
    cy.get('#passwd').type(global.usuario.senha)
})
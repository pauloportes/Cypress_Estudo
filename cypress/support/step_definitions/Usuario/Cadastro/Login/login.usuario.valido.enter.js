/// <reference types= "cypress"/>

/* global Then, When, Given */

When ('preencho os dados de login com usuario valido, pressionando enter', () => {
    global.usuario.email = 'usuario.logado@qazando.com.br'
    global.usuario.nome = 'Usuario Enter'


    cy.get('.email').type(global.usuario.email)
    cy.get('.#passwd').type(`${global.usuario.senha}{enter}`)
})

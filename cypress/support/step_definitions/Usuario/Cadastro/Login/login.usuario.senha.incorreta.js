/// <reference types= "cypress"/>

/* global Then, When, Given */

When ('preencho os dados de login com usuario valido e senha incorreta', () => {
    global.usuario.email = 'usuario.logado@qazando.com.br'

    cy.get('.email').type(global.usuario.email)
    cy.get('.#passwd').type('senha invalida')
})

And ('clico para realizar login', () => {
    cy.get('#SubmitLogin').click()

})

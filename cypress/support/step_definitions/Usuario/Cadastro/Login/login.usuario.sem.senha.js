/// <reference types= "cypress"/>

/* global Then, When, Given */

When ('preencho os dados de login sem informar senha', () => {
    global.usuario.email = 'usuario.logado@qazando.com.br'
    let backupsenha = global.usuario.senha
    global.usuario.senha = ' '
    cy.get('.email').type(global.usuario.email)
    cy.get('.#passwd').type(global.usuario.senha).then(()=>{ global.usuario.senha = backupsenha})
})

Then('o sitema notifica o usuário que é necessário informar uma senha', () => {
    cy.get('div.alert.alert-danger').should('be.visible')
    .find('ol > li').should('have.text', 'Password is required.')
})
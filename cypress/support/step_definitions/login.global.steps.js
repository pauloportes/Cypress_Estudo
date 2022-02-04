/// <reference types= "cypress"/>

/* global Then, When, Given */


Then ('o sitema realiza meu login com sucesso me autenticando na pagina', () => {
    cy.get('.account > span')
        .should('be.visible')
        .should('have.text',global.usuario.nome)
})

Then ('o sitema notifica o usuário que houve problema com a autenticação', () => {
    cy.get('div.alert.alert-danger').should('be.visible')
    .find('ol > li').should('have.text', 'Authentication failed.')
})

And ('clico para realizar login', () => {
    cy.get('#SubmitLogin').click()
})
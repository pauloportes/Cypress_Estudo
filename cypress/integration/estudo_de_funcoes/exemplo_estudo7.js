/// <reference types= "cypress"/>

it ("Usando check - um por vez", () => {
    cy.visit('/')
        .visit('?id_category=5&controller=category')
            .get('#layered_id_attribute_group_1')
                .check()
            .get('#layered_id_attribute_group_2')
                .check()
            .get('#layered_id_attribute_group_3')
                .check()
                .uncheck()
}) //check manual para cada check box

//esse comando serve para clicar em check box e radio button

it ("Usando check - clicando em todos de uma vez", () => {
    cy.visit('/')
        .visit('?id_category=5&controller=category')
            .get('#layered_id_attribute_group_1')
                .find("[type=checkbox]")
                .each((checkbox) => {
                    cy.get(chekbox)
                        .check()
                })
})

it ("Usando check - Radio button", () => {
    cy.visit('/')
        .visit('?controller=authentication&back=my-account')
            .get('#email_create')
                .type("email_qualquer@qazando.com.br{enter}")
            .get('#id_gender2')
                .check()
})
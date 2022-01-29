/// <reference types= "cypress"/>

const Faker = require('faker')


describe('cadastro_usuario', () => {

        before(() => {
            cy.visit('?controller=authentication&back=my-account')
        })

        it ('informar email novo', () => {
            cy.get('#email_create')
                .type(`${Faker.internet.email()}{enter}`) //só preciso usuar esse aspas simples craseado e as chaves no faker por conta do uso do enter. Poderia clicar no botão de salvar cadastro usando get e click.
        })

        it ('Preencher campos obrigatórios', () => {
            cy.get('#id_gender2').check()
            cy.get('#customer_firstname').type(Faker.name.firstName())
            cy.get('#customer_lastname').type(Faker.name.lastName())
        })

        it ('Finalizar o cadastro', () => {


        })

})
/// <reference types= "cypress"/>

const Faker = require('faker')


describe('cadastro_usuario', () => {

        let user

        before(() => {
            user = {email: Faker.internet.email(),
                       name: {
                            firstName: Faker.internet.firstName(),
                            lastName: Faker.internet.lastName()
                       }}
            cy.visit('?controller=authentication&back=my-account')
        })


        it ('informar email novo', () => {
            cy.get('#email_create')
                .type(`${user.email}{enter}`) //só preciso usuar esse aspas simples craseado e as chaves no faker por conta do uso do enter. Poderia clicar no botão de salvar cadastro usando get e click.
        })

        it ('Preencher campos obrigatórios', () => {
            cy.url().should('include', '#account-creation')
            cy.get('#email_create').should('include.value', user.email)
            cy.get('#id_gender2').check()
            cy.get('#customer_firstname').type(user.firstName)
            cy.get('#customer_lastname').type(user.lastName)
            cy.get('#passwd').type(Faker.internet.password())
            cy.get('#address1').type(Faker.address.streetAddress())
            cy.get('#city').type(Faker.address.cityName())
            cy.get('#id_state').select(`${Faker.datatype.number({min:1, max:20})}`)
            cy.get('#postcode').type(`${Faker.datatype.number({min:10000, max:99999})}`)
            cy.get('#phone_mobile').type(Faker.phone.phoneNumberFormat())
        })

        it ('Finalizar o cadastro', () => {
            cy.get('#submitAccount > span').click()
            cy.get('.account > span').should('have.text', `${user.name.firstName} ${user.name.lastName}`)
        })
})
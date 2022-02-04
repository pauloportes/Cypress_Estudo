/// <reference types= "cypress"/>

const Faker = require('faker')


/* global Then, When, Given */

let user = { email: Faker.internet.email(),
    name: {
         firstName: Faker.name.firstName(),
         lastName: Faker.name.lastName()
    }}

Given('Estou navegando na loja', () => {
    cy.visit('/')
})

When('Clico para realizar o cadastro', () => {
    cy.get('.login').click()
})

And('Informo meu email para cadastro', () => {
    cy.get('#email_create')
                .type(`${user.email}{enter}`)
})

And('Preencho todos os dados', () => {
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

And('Finalizo Cadastro', () => {
    cy.get('#submitAccount > span').click()
})

Then('O sistema me cadastra com sucesso me autenticando na página', () => {
    cy.get('.account > span').should('have.text', `${user.name.firstName} ${user.name.lastName}`)
})

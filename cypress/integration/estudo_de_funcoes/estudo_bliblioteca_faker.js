/// <reference types= "cypress"/>

const Faker = require('faker')


        it ('digitar login', () => {
            cy.visit('https://automacaocombatista.herokuapp.com/users/new')
            cy.get('#user_email')
            .type(Faker.internet.email())
        })

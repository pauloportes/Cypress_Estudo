/// <reference types= "cypress"/>

it ("invokeComValue", () => {
    cy.visit('/')
        .visit('?id_category=5&controller=category')
            .get('#newslatter-input')
                .invoke('value')
                    .should('equal', 'Enter your e-mail')
})
/// <reference types= "cypress"/>

it ("invokeComValue", () => {
    cy.visit('/')
        .visit('?id_category=5&controller=category')
            .get('#newsletter-input')
                .invoke('val')
                    .should('equal', 'Enter your e-mail')
})
/// <reference types= "cypress"/>

it ("teste geral", () => {
    cy.visit('/')
        .visit('?id_category=5&controller=category')
            .get('#layered_block_left')
                .find ('li')
                    .contains('Orange')
                        .visit('?id_category=5&controller=category')
                            .get('.shop-phone > strong')
                                .invoke('text')
                                    .should('equal', '0123-456-789')
})

/// <reference types= "cypress"/>

it ("tiposDeClick", () => {
    cy.visit('/')
        .visit('?id_category=5&controller=category')
            .get('#search_query_top' )
                .type('Dress')
})

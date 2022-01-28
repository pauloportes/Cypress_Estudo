/// <reference types= "cypress"/>

it ("tiposDeClick", () => {
    cy.visit('/')
        .visit('?id_category=5&controller=category')
            .get('.product_img_link > replace-2x' )
                .click()
})


//podemos usar vários clicks: rigthclick(), dbclick(), passar coordenadas dentro do click como por exemplo click(15,30),
// usar o click com direcionamento click('rigth').
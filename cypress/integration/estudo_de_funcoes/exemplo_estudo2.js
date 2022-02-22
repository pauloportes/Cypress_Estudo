/// <reference types= "cypress"/>

it ("then", () => {
    cy.visit('/')
        .visit('?id_category=5&controller=category')
            .get('.right-block > .content_price > .price')
                .then ( (preco) => {
                    let textoFormatado = preco.text().replace('\t','').replace('\n','').trim()
                    expect(textoFormatado).to.equal('$16.51')
                })
})
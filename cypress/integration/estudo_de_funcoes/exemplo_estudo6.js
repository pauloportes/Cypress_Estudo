/// <reference types= "cypress"/>

it ("selecionandoElementos", () => {
    cy.visit('/')
        .visit('?id_category=5&controller=category')
            .get('#selectProcuctSort')
                .select('Price: Lowest first') //por texto neste exemplo... mas dá pra fazer por value também
})

//uso para elementos do tipo select (combo box, drop down e etc)

it ("Escolhendo multiplas opções do select", () => {
    cy.visit('http://slimselectjs.com/?p=%2Fmethod%2')
        .get('#slim-multi-select')
            .select(['Best', 'Ever'],{force:true})
})
Feature: Cadastro de Usuário

        Eu como consumidor desejo poder realizar cadastro no site para que eu possa fazer minhas compras e ter uma lista pessoal de itens que desejo comprar e receber promoções

Scenario: Cadastrar usuario valido
Given Estou navegando na loja
When Clico para realizar o cadastro
 And Informo meu email para cadastro
 And Preencho todos os dados
 And Finalizo Cadastro
Then O sistema me cadastra com sucesso me autenticando na página
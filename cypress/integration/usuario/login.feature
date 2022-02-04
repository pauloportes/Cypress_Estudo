Feature: Login

        Eu como consumidor que já possuo cadastro gostaria de fazer login para realizar mais compras ou continuar alguma que deixei pendente
        Eu como consumidor quero fazer login para verificar meu histórico de pedidos
        Eu como consumidor quero fazer login para pedir ajuda pois tive problema em uma encomenda

Scenario:  Login com usuario valido
Given cliquei para realizar sign-in
When preencho os dados de login com usuario valido
 And clico para realizar login
Then o sitema realiza meu login com sucesso me autenticando na pagina

Scenario:  Login com usuario valido, pressionando enter
Given cliquei para realizar sign-in
When preencho os dados de login com usuario valido, pressionando enter
Then o sitema realiza meu login com sucesso me autenticando na pagina

Scenario:  Login com usuario valido, informando uma senha inválida
Given cliquei para realizar sign-in
When preencho os dados de login com usuario valido e senha incorreta
And clico para realizar login
Then o sitema notifica o usuário que houve problema com a autenticação

Scenario:  Login com e-mail não cadastrado
Given cliquei para realizar sign-in
When preencho os dados de login com usuario não cadastrado
And clico para realizar login
Then o sitema notifica o usuário que houve problema com a autenticação

Scenario:  Login sem informar e-mail
Given cliquei para realizar sign-in
When preencho os dados de login sem informar email
And clico para realizar login
Then o sitema notifica o usuário que é necessário informar um e-mail

Scenario:  Login sem informar a senha
Given cliquei para realizar sign-in
When preencho os dados de login sem informar senha
And clico para realizar login
Then o sitema notifica o usuário que é necessário informar uma senha
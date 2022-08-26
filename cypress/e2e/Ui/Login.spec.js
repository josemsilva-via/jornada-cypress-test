
/// <reference types="cypress" />

describe('US0001 - Funcionalidade: Login', () =>{

    beforeEach(() => {
      cy.visit('login')
    });

    it ('Deve fazer login com sucesso', () => {    
        cy.login('usuarioteste01@bootcamp.com','test@bootcamp')          
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Usuario Teste 01')
        
    })

    it('Validar mensagem de erro quando inserir usuário ou senha inválidos', () => {      
      cy.login('usuarioteste01@bootcamp','test@bootcamp')  
      cy.get('[data-test="alert"]').should('contain','Credenciais inválidas')
    });

})

/*
  Funcionalidade: Login
  Eu como usuário das Conexões QA
  Quero fazer login
  Para editar meu perfil

  Cenário: Login com sucesso

  Arrange - Dado - Pré-requisito - Dado que eu esteja na tela de login
  Action - Quando - Ação do usuário - Quando eu inserir usuário e senha
  Assert - Então - Resultado esperado - Então deve me direcionar para o Dashboard

  Esquema do cenário
  Quando eu inserir <usuario>
  E <senha>
  Então

  Exemplo:
  | usuário | senha |
  | "usuarioteste01@bootcamp.com" | "teste@123"
  | "usuarioteste02@bootcamp.com" | "teste2@123"

  Cenário: Validar msg de erro

  Cenário: Recuperar senha

*/

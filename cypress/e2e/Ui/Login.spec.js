
/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"


describe('US0001 - Funcionalidade: Login', () =>{

    it ('Deve fazer login com sucesso', () => {    
        cy.login(usuarios[0].email,usuarios[0].senha)          
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Usuario Teste 01')
        cy.title().should('eq','ConexaoQA')              
    })

    it('Dev validar mensagem de erro quando inserir usuário ou senha inválidos', () => {      
      cy.login("emailinvalido@bootcamp.com",usuarios[0].senha)   
      cy.get('[data-test="alert"]').should('contain','Credenciais inválidas')
    });

    it.only('Deve fazer login com sucesso - Usando importação', () => {    
      cy.login(usuarios[0].email, usuarios[0].senha)                
      cy.title().should('eq','ConexaoQA')      
    });

    it('Deve fazer login com sucesso - Usando fixture', () => {   
      cy.fixture("usuarios").then((users) => {
        cy.login(users[1].email, users[1].senha)  
      })                    
      cy.title().should('eq','ConexaoQA')      
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
  | "usuarioteste01@bootcamp.com" | "test@bootcamp"
  | "usuarioteste02@bootcamp.com" | "test@bootcamp"
  | "usuarioteste03@bootcamp.com" | "test@bootcamp"  

  Cenário: Validar msg de erro

  Cenário: Recuperar senha

*/

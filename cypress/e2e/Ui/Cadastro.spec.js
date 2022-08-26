/// <reference types="cypress" />
const faker = require('faker-br')

var nome = faker.name.firstName() + ' ' + faker.name.lastName();
var email= faker.internet.email()
var senha = "teste@123"
console.log('Nome: '+ nome + ' Email: ' + email)

describe('US0002 - Funcionalidade: Cadastro', () => {
    
    //antes de tudo
    before(() => {
        
    });

    //antes de cada cenário
    beforeEach(() => {
        cy.visit('cadastrar')
    });   

    //depois de tudo
    after(() => {
        
    });

    //depois de cada cenário
    afterEach(() => {
        
    });

    it('Deve fazer cadastro com sucesso', () => {
        cy.cadastro(nome,email,senha)

        //Resultado esperado
        cy.get('.large').should('contain','Dashboard')

    });
});

/*
  Funcionalidade: Login
  Eu como usuário das Conexões QA
  Quero fazer login
  Para editar meu perfil

  Cenário: Login com sucesso

  Arrange - Dado - Pré-requisito - Dado que eu esteja na tela de login
  Action - Quando - Ação do usuário - Quando eu inserir usuário e senha
  Assert - Então - Resultado esperado - Então deve me direcionar para o Dashboard

  Cenário: Validar msg de erro

  Cenário: Recuperar senha

*/
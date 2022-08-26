/// <reference types="cypress" />
const faker = require('faker-br')

var nome = faker.name.firstName() + ' ' + faker.name.lastName();
var email= faker.internet.email()
var senha = "teste@123"
var empresa = faker.company.companyName()
var website = faker.internet.url()
var localidade = [faker.address.city(), faker.address.city(), faker.address.city()]
var status = ["Estudante ou Aprendendo", "QA Junior", "QA Pleno", "QA Senior"]
var statusIndex = Math.floor(Math.random() * status.length-1);
var localidadeIndex  = Math.floor(Math.random() * localidade.length-1);
var conhecimentos = faker.lorem.words()
var biografia=  faker.lorem.sentence()

console.log(email)

describe('US0003 - Funcionalidade: Criar Perfil', () => {
    
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

    it('Deve criar perfil com sucesso', () => {
       
        cy.cadastro(nome,email,senha)
        
        cy.criarPerfil(status[statusIndex], empresa, website, localidade[localidadeIndex], conhecimentos, biografia)
       
        cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')

    });
});

/*
  Funcionalidade: Perfil
  Eu como usuário das Conexões QA
  Quero acessar a página de criação de perfil
  Para criar um novo perfil

  Cenário: Perfil criado com sucesso

  Arrange - Dado - Pré-requisito - Dado que eu esteja na tela de criar perfil
  Action - Quando - Ação do usuário - Quando eu os dados de Status 
                                      e Empresa, Website, Localização, Conhecimentos, UsuárioGitHub, Uma pequena biografia e Adicionar Redes Sociais(opcional)
  Assert - Então - Resultado esperado - Então deve exibir mensagem de perfil criado com sucesso

  Cenário: Validar Editar Perfil

  Cenário: Excluir Perfil

*/
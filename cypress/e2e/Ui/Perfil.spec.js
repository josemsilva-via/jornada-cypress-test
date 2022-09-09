/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"
const faker = require('faker-br')

const empresa = faker.company.companyName()
const website = faker.internet.url()
const localidade = [faker.address.city(), faker.address.city(), faker.address.city()]
const status = ["Estudante ou Aprendendo", "QA Junior", "QA Pleno", "QA Senior"]
const statusIndex = Math.floor(Math.random() * status.length-1);
const localidadeIndex  = Math.floor(Math.random() * localidade.length-1);
const conhecimentos = faker.lorem.word() + ',' + faker.lorem.word() + ',' + faker.lorem.word()
const biografia=  faker.lorem.sentence()


describe('US0003 - Funcionalidade: Criar Perfil', () => {
    
    beforeEach(() => {      
        cy.login(usuarios[0].email,usuarios[0].senha)         
    });      

    it('Deve criar perfil com sucesso', () => {
             
        cy.criarPerfil(status[statusIndex], empresa, website, localidade[localidadeIndex], conhecimentos, biografia)
       
        cy.get('[data-test="alert"]').should('contain', 'Perfil Criado')

        //cy.get('[data-test="dashboard-deleteProfile"]').click()
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
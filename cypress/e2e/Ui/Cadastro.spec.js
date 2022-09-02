/// <reference types="cypress" />
import usuarios from "../../fixtures/usuarios.json"
const faker = require('faker-br')

const nome = usuarios[0].nome
const email= usuarios[0].email
const senha = usuarios[0].senha

cy.log('Nome: '+ nome + ' Email: ' + email)

describe('US0002 - Funcionalidade: Cadastro', () => {

    it('Deve fazer cadastro com sucesso', () => {
        cy.cadastro(nome,email,senha)        
        cy.get('.large').should('contain','Dashboard')
    });
});

/*
  Funcionalidade: Cadastro
  
  Eu como usuário das Conexões QA
  Quero me cadastrar no sistema
  Para acessar a tela de dasboard

  Cenário: Cadastro criado com sucesso

  Arrange - Dado - Pré-requisito - Dado que eu esteja na tela de cadastro
  Action - Quando - Ação do usuário - Quando eu inserir nome, email e senha
  Assert - Então - Resultado esperado - Então deve me direcionar para o Dashboard

  Cenário: Validar cadastro duplicado

  Cenário: Excluir cadastro

*/
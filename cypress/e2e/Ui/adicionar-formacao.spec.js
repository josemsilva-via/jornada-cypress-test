/// <reference types="cypress" />
const formacaoPage = require('../../support/Formacao/formacao-pages')
import formacao from "../../fixtures/formacao.json"

describe('Funcionalidade: Adicionar formação', () => {

    beforeEach(() => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[0].email, user[0].senha)
        })
        cy.visit('adicionar-formacao')
    });
    
    it('Deve adicionar uma formação com sucesso', () => {
         formacaoPage.addFormacao(formacao[0].escola, formacao[0].grau, formacao[0].curso, formacao[0].dataInicio, formacao[0].dataFim, formacao[0].descricao)
         cy.get('[data-test="education-delete"]').should('exist')
     });

    it('Deve adicionar uma formação Atual com sucesso', () => {
        formacaoPage.addFormacaoAtual(formacao[2].escola, formacao[2].grau, formacao[2].curso, formacao[2].dataInicio, formacao[2].descricao)
        cy.get('[data-test="education-delete"]').should('exist')
    });

    it('Deve excluir uma formação com sucesso', () => {
        formacaoPage.addFormacao(formacao[1].escola, formacao[1].grau, formacao[1].curso, formacao[1].dataInicio, formacao[1].dataFim, formacao[1].descricao)
        cy.get('[data-test="education-delete"]').last().click()
        cy.get('[data-test="alert"]').should('contain', 'Formação Removida')        
    });
   
});
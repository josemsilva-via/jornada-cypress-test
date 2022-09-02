/// <reference types="cypress" />
const experienciaPage = require('../../support/Experiencia/experiencia-pages')
import experiencias from "../../fixtures/experiencia.json"

describe('Funcionalidade: Adicionar experiência', () => {

    beforeEach(() => {
        cy.fixture("usuarios").then((user) => {
            cy.login(user[0].email, user[0].senha)
        })
        cy.visit('adicionar-experiencia')
    });
    
    it('Deve adicionar uma experiência com sucesso', () => {
        experienciaPage.addExperiencia(experiencias[0].posicao, experiencias[0].empresa, experiencias[0].local, experiencias[0].dataInicio, experiencias[0].dataFim, experiencias[0].descricao)
        cy.get('[data-test="experience-delete"]').should('exist')
    });

    it('Deve adicionar uma experiência Atual com sucesso', () => {
        experienciaPage.addExperienciaAtual(experiencias[2].posicao, experiencias[2].empresa, experiencias[2].local, experiencias[2].dataInicio, experiencias[2].descricao)
        cy.get('[data-test="experience-delete"]').should('exist')
    });

    it('Deve excluir uma experiência com sucesso', () => {
        experienciaPage.addExperiencia(experiencias[1].posicao, experiencias[1].empresa, experiencias[1].local, experiencias[1].dataInicio, experiencias[1].dataFim, experiencias[1].descricao)
        cy.get('[data-test="experience-delete"]').last().click()
        cy.get('[data-test="alert"]').should('contain', 'Experiência Removida')        
    });
   
});
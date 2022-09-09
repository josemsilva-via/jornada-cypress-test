// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/// <reference types="Cypress" />

import  auth from '../fixtures/auth.json'

Cypress.Commands.add('navigate', (route) => {
    cy.intercept(route).as('loadpage')
    cy.visit(route, { timeout: 30000 })
    cy.wait('@loadpage')
})

Cypress.Commands.add('login', (email, senha) => { 
    cy.visit('login')

    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)   
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    
    cy.get('[data-test="login-submit"]').click()
})

Cypress.Commands.add('cadastro', (nome, email, senha) => { 
    cy.visit('cadastrar')

    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)

    cy.get('[data-test="register-submit"]').click()
})

Cypress.Commands.add('criarPerfil', (status, empresa, website, localidade, conhecimentos, biografia) => {      
        cy.visit('criar-perfil')
  
        cy.get('#mui-component-select-status').click()
        cy.get('[data-value="'+ status +'"]').click()
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type(empresa)
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type(website)
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type(localidade)
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type(conhecimentos)
        cy.get('[data-test="profile-bio"] > .MuiInputBase-root').type(biografia)

        cy.get('[data-test="profile-submit"]').click()
})

Cypress.Commands.add('tokenJwt', () => { 
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: auth
    }).then((response) => {
       return response.body.jwt
    })
})

Cypress.Commands.add('criarPostagem', (token, value) => { 
    cy.request({
        method: 'POST',
        url: '/api/posts',
        headers: {
            Cookie: token
        },
        body: {
            text : value
        }
    })
})

Cypress.Commands.add('criarPerfilApi', (token, perfil) => { 
    cy.request({
        method: 'POST',
        url: '/api/profile',
        headers: {
            Cookie: token
        },
        body: perfil
        }).then((response) => {
        return response.body         
    })    
})

Cypress.Commands.add('consultarPerfilAtualApi', (token) => { 
    cy.request({
        method: 'GET',
        url: '/api/profile/me',
        headers: {
            Cookie: token
        }}).then((response) => {
            return response.body         
        })
})

Cypress.Commands.add('adicionarExperienciaApi', (token, experiencia) => { 
    cy.request({
        method: 'PUT',
        url: 'api/profile/experience',  
        headers: {
            Cookie: token
        },       
        body: experiencia        
        }).then((response) => {
            return response         
        })
})

Cypress.Commands.add('adicionarFormacaoApi', (token, formacao) => { 
    cy.request({
        method: 'PUT',
        url: '/api/profile/education',  
        headers: {
            Cookie: token
        },
        body: formacao
        }).then((response) => {
            return response         
        })
})



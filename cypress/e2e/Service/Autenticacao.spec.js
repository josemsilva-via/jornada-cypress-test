/// <reference types="cypress" />
import auth from '../../fixtures/auth.json'

it('[POST] - Teste de autenticação', () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        body: auth
    }).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.not.empty
        expect(response.body).to.have.property("jwt")
        cy.getCookies('conexaoqa.herokuapp.com').should('exist')
        cy.log(response.body)
    })
});

it('[POST] - Teste de autenticação com usuário inválido', () => {
    cy.request({
        method: 'POST',
        url: '/api/auth',
        failOnStatusCode: false,
        body: {
            "email": "usuarioteste0121211@bootcamp.com",
            "password": "test@bootcamp"
          }
    }).then((response) => {
        expect(response.status).to.equal(401)       
    })

    it('[GET] - Selecionar o usuário logado', () => {
        cy.request({
            method: 'POST',
            url: '/api/auth',
            failOnStatusCode: false,
            body: {
                "email": "usuarioteste0121211@bootcamp.com",
                "password": "test@bootcamp"
              }
        }).then((response) => {
            expect(response.status).to.equal(401)       
        })
    })
})
/// <reference types="cypress" />

describe('Criação', () => {
    let token

    beforeEach(() => {
        cy.tokenJwt().then( (auth) => {
            token = auth
        })
    })

    it('[POST] - Criar Postagem', () => {

        cy.request({
            method: 'POST',
            url: '/api/posts',       
            headers: {
                Cookie: token
            },
            body: {
                text: 'Postagem pelo cypress'
            }
        }).then((response) => {
            expect(response.status).to.equal(201)       
        })  
    })   
   
});

describe('Consulta', () => {

    let token

    beforeEach(() => {
        cy.tokenJwt().then( (auth) => {
            token = auth
        })
    })

    it('[GET] - Consultar Postagens', () => {        
        
        cy.request({
            method: 'GET',
            url: `/api/posts`,       
            headers: {
                Cookie: token
            }            
        }).then((response) => {
            expect(response.status).to.equal(200)       
        })
    })    

    it('[GET] - Consultar Postagem por ID', () => {
        
        cy.criarPostagem(token,"PostagemID").then((response) =>{
        
            const id= response.body._id

            cy.request({
                method: 'GET',
                url: `/api/posts/${id}`,       
                headers: {
                    Cookie: token
                }            
            }).then((response) => {
                expect(response.status).to.equal(200)       
            })
        })
    })

});

describe('Exclusão', () => {

    let token

    beforeEach(() => {
        cy.tokenJwt().then( (auth) => {
            token = auth
        })
    })

    it('[DELETE] - Excluir uma Postagem', () => {       
        
        cy.criarPostagem(token,"PostagemID").then((response) =>{
        
            const id= response.body._id

            cy.request({
                method: 'DELETE',
                url: `/api/posts/${id}`,       
                headers: {
                    Cookie: token
                }            
            }).then((response) => {
                expect(response.status).to.equal(200)       
            })
        })
    })
});

describe('Alteração', () => {

    let token

    beforeEach(() => {
        cy.tokenJwt().then( (auth) => {
            token = auth
        })
    })

    it('[PUT] - Curtir uma Postagem', () => {       
        
        cy.criarPostagem(token,"PostagemID").then((response) =>{
        
            const id= response.body._id

            cy.request({
                method: 'PUT',
                url: `/api/posts/like/${id}`,       
                headers: {
                    Cookie: token
                }            
            }).then((response) => {
                expect(response.status).to.equal(200)       
            })
        })
    })

});


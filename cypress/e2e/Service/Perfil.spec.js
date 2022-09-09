/// <reference types="cypress" />
import listaPerfil from '../../fixtures/perfil.json'
import listaExperiencia from '../../fixtures/experiencia.json'

describe('Perfil', () => {

    let token

    beforeEach(() => {
        
        cy.tokenJwt().then( (auth) => {
            token = auth            
        })        

        const perfil = listaPerfil[0] 
        cy.criarPerfilApi(token, perfil)
    })

    context('Criar Perfil', () => {

        it('[POST] - Criar perfil', () => {      

            cy.consultarPerfilAtualApi(token).then((response)=>{
                expect(response.status).to.equal("QA Junior")
            })
         
        })            
    })

    context('Consultar Perfil', () => {

        it('[GET] - Consultar perfil', () => {                   
           
            cy.request({
                method: 'GET',
                url: `/api/profile/me`,       
                headers: {
                    Cookie: token
                }            
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.status).to.equal("QA Junior")       
            })          
         
        })      
    })

    context('Atualizar Perfil', () => {

        it('[POST] - Atualizar perfil', () => {        
            
            const perfil = listaPerfil[1]

            cy.criarPerfilApi(token, perfil)

            cy.consultarPerfilAtualApi(token).then((response)=>{
                expect(response.status).to.equal("QA Pleno")
            })         
        })    

        it('[PUT] - Adicionar experiência profissional', () => {        
            
            const experiencia = {
                "title": listaExperiencia[0].posicao,
                "company": listaExperiencia[0].empresa,
                "location": listaExperiencia[0].local,
                "from" : listaExperiencia[0].dataInicio,
                "to" : listaExperiencia[0].dataFim,
                "current": false,
                "description": listaExperiencia[0].descricao
              }     

              cy.adicionarExperienciaApi(token, experiencia).then((response) => {
                expect(response.status).to.equal(200)
                
            })       
        })                   
    }) 

    context('Excluir Perfil', () => {

        it('[PUT] - Excluir experiência profissional', () => {  
                              
            const experiencia = {
                "title": listaExperiencia[0].posicao,
                "company": listaExperiencia[0].empresa,
                "location": listaExperiencia[0].local,
                "from" : listaExperiencia[0].dataInicio,
                "to" : listaExperiencia[0].dataFim,
                "current": false,
                "description": listaExperiencia[0].descricao
              }  

            cy.adicionarExperienciaApi(token, experiencia).then((response) => {
                
                const expId= response.body.experience[0]._id

                cy.request({
                    method: 'GET',
                    url: `/api/profile/experience/${expId}`,       
                    headers: {
                        Cookie: token
                    }            
                }).then((response) => {
                    expect(response.status).to.equal(200)       
                })

            })       
        })

 })   
   
})
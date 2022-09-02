class FormacaoPage {
    get #escola() {return cy.get('[data-test="education-school"] > .MuiInputBase-root > .MuiInputBase-input')}
    get #grau() {return cy.get('[data-test="education-degree"] > .MuiInputBase-root > .MuiInputBase-input')}
    get #curso() {return cy.get('[data-test="education-fieldOfStudy"] > .MuiInputBase-root > .MuiInputBase-input')}
    get #dataInicio() {return cy.get('[data-test="education-from"]')}
    get #dataFim() {return cy.get('[data-test="education-to"]')}
    get #descricao() {return cy.get('[data-test="education-description"] > .MuiInputBase-root')}
    get #btnAdd() {return cy.get('[data-test="education-submit"]')}
    get #checkAtual() {return cy.get('.jss5')}

    addFormacao(escola, grau, curso, dataInicio, dataFim, descricao) {
        this.#escola.type(escola)
        this.#grau.type(grau)
        this.#curso.type(curso)
        this.#dataInicio.type(dataInicio)
        this.#dataFim.type(dataFim)
        this.#descricao.type(descricao)
        this.#btnAdd.click()
    }

    addFormacaoAtual(escola, grau, curso, dataInicio, descricao) {
        this.#escola.type(escola)
        this.#grau.type(grau)
        this.#curso.type(curso)
        this.#dataInicio.type(dataInicio)
        this.#checkAtual.check()
        this.#descricao.type(descricao)
        this.#btnAdd.click()
    }
}
module.exports = new FormacaoPage()




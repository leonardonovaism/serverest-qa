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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require("cypress")

Cypress.Commands.add('acessarUrl', ()=>{
    cy.visit('https://front.serverest.dev/')
})

Cypress.Commands.add('acessarCadastro', ()=>{
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
})

//Login valido

Cypress.Commands.add('preencherLogin', (email, password)=>{   
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="senha"]').type(password)
})

//Clicar no botao
Cypress.Commands.add('entrar', ()=>{
    cy.get('[data-testid="entrar"]').click()
})

Cypress.Commands.add('cadastrar', ()=>{
    cy.get('[data-testid="cadastrar"]').click()
})


//Validar login
Cypress.Commands.add('validarLogin', ()=>{
    cy.url().should('eq', 'https://front.serverest.dev/home')
})

Cypress.Commands.add('validarMensagemErro', ()=>{
    cy.get('.alert')
    .should('be.visible')
    .and('contain.text', 'Email e/ou senha inválidos')
})

Cypress.Commands.add('validarCampoVazio', ()=>{
    cy.get('.alert')
    .should('contain.text', 'Email é obrigatório')
    .and('contain.text', 'Password é obrigatório')
})


//CADASTRO-----------

//Preencher cadastro valido
Cypress.Commands.add('preencherCadastro', (nome, email, password)=>{
    cy.get('[data-testid="nome"]').type(nome)
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    
})

Cypress.Commands.add('preencherCadastroSemNome', (email, password)=>{
    
    cy.get('[data-testid="email"]').type(email)
    cy.get('[data-testid="password"]').type(password)
    
})

Cypress.Commands.add('preencherCadastroSemSenha', (nome, email, password)=>{
    cy.get('[data-testid="nome"]').type(nome)
    cy.get('[data-testid="email"]').type(email)
    
})

//Validar cadastro valido
Cypress.Commands.add('validarCadastro', ()=>{
    cy.get('.alert').should('be.visible').and('contain.text', 'Cadastro realizado com sucesso')
})

Cypress.Commands.add('validarCadastroSemNome', ()=>{
    cy.get('.alert').should('be.visible').and('contain.text', 'Nome é obrigatório')
})

Cypress.Commands.add('validarCadastroEmailInvalido', ()=>{
    cy.get('input[type="email"]').then(($input) => {
        expect($input[0].validity.typeMismatch).to.be.true
        })
})

Cypress.Commands.add('validarCadastroEmailExistente', ()=>{
    cy.get('.alert').should('be.visible').and('contain.text', 'Este email já está sendo usado')
})

Cypress.Commands.add('validarCadastroSemSenha', ()=>{
    cy.get('.alert').should('be.visible').and('contain.text', 'Password é obrigatório')
})

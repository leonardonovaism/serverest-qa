describe('Cadastro', ()=>{
    beforeEach(()=>{
        cy.acessarCadastro()
  })

    it('Cadastro com dados válidos', ()=>{
        //act
        cy.preencherCadastro('João da Silva', 'joao.teste@example.com', 'Teste@123')
        cy.cadastrar()

        //assert
        cy.validarCadastro()
    })

    it('Cadastro sem informar o nome', ()=>{
        //act
        cy.preencherCadastroSemNome('joao.teste@example.com', 'Teste@123')
        cy.cadastrar()

        //assert
        cy.validarCadastroSemNome()
    })
    
    it('Cadastro com e-mail inválido', ()=>{
        cy.preencherCadastro('João da Silva', 'joao.com', 'Teste@123')
        cy.cadastrar()

        cy.validarCadastroEmailInvalido()
    })

    it('Cadastro com e-mail já existente', ()=>{
        //act
        cy.preencherCadastro('João souza', 'joao.teste@example.com', 'teste')
        cy.cadastrar()

        //assert
        cy.validarCadastroEmailExistente()
    })

    it.only('Cadastro sem informar a senha', ()=>{
        //act
        cy.preencherCadastroSemSenha('João da Silva', 'joao.teste@example.com')
        cy.cadastrar()

        //assert
        cy.validarCadastroSemSenha()
    })

})
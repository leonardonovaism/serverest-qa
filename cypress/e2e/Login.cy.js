describe('Login', () => {
  beforeEach(()=>{
    cy.acessarUrl()
  })
  it('Login com credenciais válidas', ()=>{
    //act
    cy.preencherLogin('teste@gmail.com', 'teste')
    cy.entrar()

    //assert
    cy.validarLogin()
  })

  it('Login com senha incorreta', ()=>{
    //act
    cy.preencherLogin('teste@gmail.com', 'invalidPassword')
    cy.entrar()

    //assert
    cy.validarMensagemErro()
  })

  it('Login com e-mail não cadastrado ', ()=>{
    //act
    cy.preencherLogin('invalidEmail@gmail.com', 'teste')
    cy.entrar()

    //assert
    cy.validarMensagemErro()

  })

  it('Login sem preencher os campos', ()=>{
    //act
    cy.entrar()

    //assert
    cy.validarCampoVazio()
  })
      
})


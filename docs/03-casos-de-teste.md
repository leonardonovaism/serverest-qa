# Casos de Teste — Projeto QA ServeRest

## 1. Identificação

| Informação | Descrição |
|---|---|
| Projeto | QA ServeRest |
| Sistema | ServeRest |
| Documento | Casos de Teste |
| Versão | 1.0 |
| Tipo de teste | Manual, funcional e API |
| Status | Planejamento inicial |

## 2. Objetivo

Este documento apresenta os casos de teste elaborados para validar as funcionalidades da aplicação ServeRest.

Os cenários contemplam situações positivas e negativas, verificando se o sistema apresenta o comportamento esperado de acordo com os requisitos identificados.

Os casos serão utilizados inicialmente para execução manual e testes de API no Postman. Posteriormente, os cenários selecionados poderão ser automatizados utilizando Cypress e JavaScript.

## 3. Convenções utilizadas

### Status de execução

| Status | Descrição |
|---|---|
| Não executado | Teste ainda não realizado |
| Aprovado | Resultado obtido corresponde ao esperado |
| Reprovado | Resultado obtido diverge do esperado |
| Bloqueado | Não foi possível executar o teste |

### Prioridade

| Prioridade | Descrição |
|---|---|
| Alta | Funcionalidade essencial |
| Média | Funcionalidade importante |
| Baixa | Funcionalidade complementar |

---

# 4. Casos de teste — Autenticação

### CT-AUTH-001 — Login com credenciais válidas

- **Requisito:** RF-005
- **Prioridade:** Alta
- **Tipo:** Positivo
- **Pré-condição:** Usuário previamente cadastrado.
- **Dados de entrada:** E-mail e senha válidos.

**Passos:**
1. Acessar a página de login.
2. Informar um e-mail válido.
3. Informar uma senha válida.
4. Clicar no botão de entrar.

**Resultado esperado:** Sistema deve autenticar o usuário e permitir o acesso à aplicação conforme seu perfil.

**Status:** Aprovado.

### CT-AUTH-002 — Login com senha incorreta

- **Requisito:** RF-005
- **Prioridade:** Alta
- **Tipo:** Negativo
- **Pré-condição:** Usuário previamente cadastrado.
- **Dados de entrada:** E-mail válido e senha incorreta.

**Passos:**
1. Acessar a página de login.
2. Informar um e-mail cadastrado.
3. Informar uma senha incorreta.
4. Clicar no botão de entrar.

**Resultado esperado:** Sistema deve rejeitar a autenticação e apresentar uma mensagem adequada.

**Status:** Aprovado.

### CT-AUTH-003 — Login com e-mail não cadastrado

- **Requisito:** RF-005
- **Prioridade:** Alta
- **Tipo:** Negativo

**Passos:**
1. Acessar a página de login.
2. Informar um e-mail inexistente.
3. Informar uma senha qualquer.
4. Clicar no botão de entrar.

**Resultado esperado:** Sistema deve impedir o acesso e informar que o email é obrigatório.

**Status:** Aprovado.

### CT-AUTH-004 — Login sem preencher os campos

- **Requisito:** RF-005
- **Prioridade:** Média
- **Tipo:** Negativo

**Passos:**
1. Acessar a página de login.
2. Não preencher os campos.
3. Clicar no botão de entrar.

**Resultado esperado:** Sistema deve impedir a autenticação e apresentar mensagem de campo obrigatório 

**Status:** Aprovado.

---

# 5. Casos de teste — Cadastro de usuários

### CT-USR-001 — Cadastro com dados válidos

- **Requisito:** RF-001
- **Prioridade:** Alta
- **Tipo:** Positivo

**Dados de entrada:**
- Nome: João da Silva
- E-mail: joao.teste@example.com
- Senha: Teste@123
- Administrador: false

**Passos:**
1. Acessar a página de cadastro.
2. Preencher o nome.
3. Informar um e-mail válido.
4. Informar uma senha.
5. Selecionar o tipo de usuário.
6. Confirmar o cadastro.

**Resultado esperado:** Sistema deve cadastrar o usuário e apresentar uma confirmação de sucesso.

**Status:** Aprovado.

### CT-USR-002 — Cadastro sem informar o nome

- **Requisito:** RF-001
- **Prioridade:** Alta
- **Tipo:** Negativo

**Passos:**
1. Acessar a página de cadastro.
2. Deixar o campo nome vazio.
3. Preencher os demais campos corretamente.
4. Confirmar o cadastro.

**Resultado esperado:** Sistema deve impedir o cadastro e apresentar uma mensagem de validação.

**Status:** Aprovado.

### CT-USR-003 — Cadastro com e-mail inválido

- **Requisito:** RF-001
- **Prioridade:** Alta
- **Tipo:** Negativo

**Dados de entrada:** E-mail em formato inválido.

**Passos:**
1. Acessar a página de cadastro.
2. Preencher os campos obrigatórios.
3. Informar um e-mail inválido.
4. Confirmar o cadastro.

**Resultado esperado:** Sistema deve rejeitar o e-mail inválido.

**Status:** Aprovado.

### CT-USR-004 — Cadastro com e-mail já existente

- **Requisito:** RF-001
- **Prioridade:** Alta
- **Tipo:** Negativo
- **Pré-condição:** E-mail já cadastrado no sistema.

**Passos:**
1. Acessar a página de cadastro.
2. Preencher os dados de um novo usuário.
3. Informar um e-mail já utilizado.
4. Confirmar o cadastro.

**Resultado esperado:** Sistema deve impedir a duplicidade de e-mail e apresentar uma mensagem adequada.

**Status:** Aprovado.

### CT-USR-005 — Cadastro sem informar a senha

- **Requisito:** RF-001
- **Prioridade:** Média
- **Tipo:** Negativo

**Passos:**
1. Acessar a página de cadastro.
2. Preencher os demais campos.
3. Deixar a senha vazia.
4. Confirmar o cadastro.

**Resultado esperado:** Sistema deve impedir o cadastro sem senha.

**Status:** Aprovado.

---

# 6. Casos de teste — Produtos

### CT-PROD-001 — Listar produtos cadastrados

- **Requisito:** RF-006
- **Prioridade:** Alta
- **Tipo:** Positivo

**Passos:**
1. Acessar a área de produtos.
2. Consultar a listagem disponível.

**Resultado esperado:** Sistema deve apresentar os produtos cadastrados com suas respectivas informações.

**Status:** Aprovado.

### CT-PROD-002 — Consultar produto inexistente

- **Requisito:** RF-006
- **Prioridade:** Média
- **Tipo:** Negativo
- **Pré-condição:** Identificador de produto inexistente.

**Passos:**
1. Realizar uma consulta utilizando um identificador inexistente.
2. Verificar a resposta apresentada.

**Resultado esperado:** Sistema deve informar que o produto não foi encontrado.

**Status:** Aprovado.

### CT-PROD-003 — Cadastrar produto com dados válidos

- **Requisito:** RF-007
- **Prioridade:** Alta
- **Tipo:** Positivo
- **Pré-condição:** Usuário com permissão administrativa e autenticação válida.

**Passos:**
1. Autenticar como administrador.
2. Acessar a funcionalidade de cadastro de produtos.
3. Preencher os campos obrigatórios.
4. Confirmar o cadastro.

**Resultado esperado:** Produto deve ser cadastrado e disponibilizado para consulta.

**Status:** Aprovado.

### CT-PROD-004 — Cadastrar produto sem autenticação

- **Requisito:** RF-007
- **Prioridade:** Alta
- **Tipo:** Negativo

**Passos:**
1. Realizar uma requisição de cadastro de produto sem token de autenticação.
2. Verificar a resposta da API.

**Resultado esperado:** Sistema deve impedir a operação não autorizada.

**Status:** Aprovado.

### CT-PROD-005 — Atualizar produto cadastrado

- **Requisito:** RF-008
- **Prioridade:** Média
- **Tipo:** Positivo
- **Pré-condição:** Produto existente e usuário autenticado com permissão administrativa.

**Passos:**
1. Identificar um produto cadastrado.
2. Realizar a atualização de suas informações.
3. Consultar o produto novamente.

**Resultado esperado:** Sistema deve apresentar os dados atualizados.

**Status:** Aprovado.

### CT-PROD-006 — Excluir produto cadastrado

- **Requisito:** RF-009
- **Prioridade:** Média
- **Tipo:** Positivo
- **Pré-condição:** Produto existente e usuário autenticado com permissão administrativa.

**Passos:**
1. Identificar um produto cadastrado.
2. Realizar a exclusão.
3. Consultar novamente o produto.

**Resultado esperado:** Sistema deve confirmar a exclusão e impedir que o produto excluído seja retornado como existente.

**Status:** Aprovado.

---

# 7. Casos de teste — Carrinho de compras

### CT-CART-001 — Adicionar produto ao carrinho

- **Requisito:** RF-010
- **Prioridade:** Alta
- **Tipo:** Positivo

**Pré-condição:** Usuário autenticado e produto disponível.

**Passos:**
1. Acessar a área de produtos.
2. Selecionar um produto.
3. Adicionar o produto ao carrinho.
4. Consultar o carrinho.

**Resultado esperado:** Produto deve ser incluído no carrinho com a quantidade informada.

**Status:** Aprovado.

### CT-CART-002 — Adicionar produto com quantidade inválida

- **Requisito:** RF-010
- **Prioridade:** Média
- **Tipo:** Negativo

**Passos:**
1. Selecionar um produto.
2. Informar uma quantidade inválida.
3. Tentar adicionar ao carrinho.

**Resultado esperado:** Sistema deve impedir a operação caso a quantidade não respeite as regras estabelecidas.

**Status:** Aprovado.

### CT-CART-003 — Remover produto do carrinho

- **Requisito:** RF-011
- **Prioridade:** Média
- **Tipo:** Positivo

**Pré-condição:** Carrinho contendo pelo menos um produto.

**Passos:**
1. Acessar o carrinho.
2. Selecionar a opção de remoção do produto.
3. Consultar novamente o carrinho.

**Resultado esperado:** Produto deve ser removido e o carrinho atualizado.

**Status:** Aprovado.

### CT-CART-004 — Finalizar compra

- **Requisito:** RF-012
- **Prioridade:** Alta
- **Tipo:** Positivo

**Pré-condição:** Carrinho contendo produtos válidos.

**Passos:**
1. Acessar o carrinho.
2. Conferir os produtos selecionados.
3. Iniciar a finalização da compra.
4. Confirmar a operação, conforme o fluxo disponibilizado.

**Resultado esperado:** Sistema deve concluir a operação conforme as regras de negócio implementadas.

**Status:** Aprovado.

---

# 8. Casos de teste — API REST

Os testes de API serão realizados inicialmente no Postman e posteriormente poderão ser automatizados com Cypress.

### CT-API-001 — Consultar usuários

- **Requisito:** RF-002
- **Método:** GET
- **Endpoint:** `/usuarios`

**Validações:**
- Verificar o status HTTP esperado.
- Verificar a estrutura da resposta JSON.
- Verificar os campos retornados.
- Verificar a consistência dos dados.

**Resultado esperado:** API deve retornar a listagem de usuários conforme os parâmetros da requisição.

**Status:** Não executado.

### CT-API-002 — Cadastrar usuário via API

- **Requisito:** RF-001
- **Método:** POST
- **Endpoint:** `/usuarios`

**Validações:**
- Verificar o status HTTP.
- Verificar a mensagem de confirmação.
- Verificar o identificador do usuário criado.
- Consultar o usuário para confirmar a persistência.

**Resultado esperado:** API deve cadastrar o usuário com sucesso.

**Status:** Não executado.

### CT-API-003 — Realizar login via API

- **Requisito:** RF-005
- **Método:** POST
- **Endpoint:** `/login`

**Validações:**
- Enviar credenciais válidas.
- Verificar o status HTTP.
- Verificar a estrutura da resposta.
- Verificar a geração do token de autenticação.

**Resultado esperado:** API deve autenticar o usuário e retornar o token conforme a documentação.

**Status:** Não executado.

### CT-API-004 — Realizar login com credenciais inválidas

- **Requisito:** RF-005
- **Método:** POST
- **Endpoint:** `/login`

**Validações:**
- Enviar credenciais incorretas.
- Verificar o status HTTP.
- Verificar a mensagem de erro.
- Confirmar que nenhum token válido foi fornecido.

**Resultado esperado:** API deve rejeitar a autenticação.

**Status:** Não executado.

### CT-API-005 — Cadastrar produto sem autenticação

- **Requisito:** RF-007
- **Método:** POST
- **Endpoint:** `/produtos`

**Validações:**
- Enviar requisição sem token.
- Verificar o status HTTP.
- Verificar a mensagem de autorização.

**Resultado esperado:** API deve rejeitar a operação sem autenticação válida.

**Status:** Não executado.

### CT-API-006 — Consultar produtos

- **Requisito:** RF-006
- **Método:** GET
- **Endpoint:** `/produtos`

**Validações:**
- Verificar o status HTTP.
- Validar a estrutura JSON.
- Conferir os dados dos produtos.
- Verificar os campos retornados.

**Resultado esperado:** API deve retornar a listagem de produtos.

**Status:** Não executado.

### CT-API-007 — Atualizar usuário via API

- **Requisito:** RF-003
- **Método:** PUT
- **Endpoint:** `/usuarios/{_id}`

**Validações:**
- Enviar os dados atualizados.
- Verificar o status HTTP.
- Verificar a mensagem de confirmação.
- Consultar novamente o usuário.

**Resultado esperado:** API deve atualizar os dados do usuário identificado.

**Status:** Não executado.

### CT-API-008 — Excluir usuário via API

- **Requisito:** RF-004
- **Método:** DELETE
- **Endpoint:** `/usuarios/{_id}`

**Validações:**
- Informar um identificador válido.
- Executar a exclusão.
- Verificar o status HTTP.
- Consultar novamente o usuário.

**Resultado esperado:** API deve excluir o usuário e refletir a operação em consultas posteriores.

**Status:** Não executado.

---

# 9. Registro de execução

Os resultados deverão ser atualizados após a execução de cada caso de teste.

| ID | Data | Resultado obtido | Status | Evidência |
|---|---|---|---|---|
| CT-AUTH-001 | — | — | Não executado | — |
| CT-USR-001 | — | — | Não executado | — |
| CT-PROD-001 | — | — | Não executado | — |
| CT-CART-001 | — | — | Não executado | — |
| CT-API-001 | — | — | Não executado | — |

*Esta tabela apresenta exemplos de controle. Todos os demais casos deverão ser registrados conforme forem executados.*

# 10. Considerações finais

Os casos de teste apresentados neste documento constituem a base inicial para a validação funcional e técnica da aplicação ServeRest.

A execução será realizada de maneira incremental, começando pelos testes manuais, avançando para testes de API e posteriormente para automação com Cypress e JavaScript.

Os cenários poderão ser atualizados conforme novas regras de negócio forem identificadas durante a exploração do sistema.

Todos os resultados, evidências e defeitos encontrados serão documentados no repositório GitHub, permitindo rastreabilidade e acompanhamento da qualidade da aplicação.

---

**Projeto:** QA ServeRest  
**Documento:** Casos de Teste  
**Versão:** 1.0  
**Status:** Planejamento inicial
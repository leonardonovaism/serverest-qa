# Mapeamento de Requisitos — Projeto QA ServeRest

## 1. Objetivo

Este documento tem como objetivo identificar e documentar os requisitos funcionais e não funcionais da aplicação ServeRest, servindo como base para o planejamento e execução dos testes de qualidade de software (QA).

O projeto contempla testes manuais, testes de API REST, automação de testes E2E com Cypress e JavaScript, além da integração contínua utilizando GitHub Actions.

## 2. Escopo do sistema

O ServeRest é uma aplicação de e-commerce utilizada para estudos e práticas de testes de software.

O escopo deste projeto contempla os seguintes módulos:

- Gerenciamento de usuários.
- Autenticação e login.
- Gerenciamento de produtos.
- Gerenciamento do carrinho de compras.

## 3. Requisitos funcionais

### RF-001 — Cadastro de usuários

O sistema deve permitir o cadastro de novos usuários por meio do preenchimento dos dados solicitados.

**Dados envolvidos:**
- Nome.
- E-mail.
- Senha.
- Tipo de usuário (administrador ou usuário comum).

**Regras de negócio:**
- Os campos obrigatórios devem ser preenchidos.
- O e-mail deve possuir formato válido.
- O sistema não deve permitir o cadastro de e-mails já existentes.
- O tipo de usuário deve respeitar as opções permitidas pelo sistema.

### RF-002 — Consulta de usuários

O sistema deve permitir a consulta dos usuários cadastrados.

**Regras de negócio:**
- Deve ser possível listar os usuários cadastrados.
- Deve ser possível consultar um usuário específico por identificador.
- O sistema deve retornar os dados correspondentes ao usuário solicitado.
- Quando o usuário não existir, o sistema deve apresentar uma resposta adequada.

### RF-003 — Atualização de usuários

O sistema deve permitir a atualização dos dados de usuários cadastrados.

**Regras de negócio:**
- A atualização deve identificar corretamente o usuário.
- Os dados informados devem respeitar as validações do sistema.
- O sistema deve retornar uma confirmação após a atualização.
- Não deve permitir alterações que violem as regras de cadastro.

### RF-004 — Exclusão de usuários

O sistema deve permitir a exclusão de usuários cadastrados.

**Regras de negócio:**
- A exclusão deve identificar corretamente o usuário.
- O sistema deve retornar uma confirmação da operação.
- A consulta posterior deve refletir a exclusão realizada.

### RF-005 — Autenticação de usuários

O sistema deve permitir que usuários cadastrados realizem login utilizando e-mail e senha.

**Regras de negócio:**
- O usuário deve informar credenciais válidas.
- O sistema deve rejeitar credenciais incorretas.
- O sistema deve retornar um token de autenticação quando aplicável.
- O acesso a funcionalidades restritas deve respeitar as permissões do usuário.

### RF-006 — Consulta de produtos

O sistema deve permitir a visualização dos produtos disponíveis na aplicação.

**Regras de negócio:**
- Deve ser possível listar os produtos cadastrados.
- Deve ser possível consultar um produto específico.
- O sistema deve apresentar informações como nome, preço, descrição e quantidade disponível, conforme os dados cadastrados.
- O sistema deve tratar consultas de produtos inexistentes.

### RF-007 — Cadastro de produtos

O sistema deve permitir que usuários com as permissões necessárias cadastrem novos produtos.

**Regras de negócio:**
- O cadastro deve exigir os campos obrigatórios.
- O preço e a quantidade devem respeitar os formatos e valores permitidos.
- O sistema deve validar a autenticação e autorização do usuário.
- Após o cadastro, o produto deve estar disponível para consulta.

### RF-008 — Atualização de produtos

O sistema deve permitir a atualização das informações dos produtos cadastrados.

**Regras de negócio:**
- A operação deve identificar corretamente o produto.
- Os dados atualizados devem respeitar as validações do sistema.
- A operação deve exigir as permissões necessárias.
- A consulta posterior deve apresentar as informações atualizadas.

### RF-009 — Exclusão de produtos

O sistema deve permitir a exclusão de produtos cadastrados.

**Regras de negócio:**
- A operação deve identificar corretamente o produto.
- A exclusão deve respeitar as permissões de acesso.
- O sistema deve retornar uma confirmação da operação.

### RF-010 — Gerenciamento do carrinho

O sistema deve permitir que usuários adicionem produtos ao carrinho de compras.

**Regras de negócio:**
- Deve ser possível adicionar produtos disponíveis.
- O sistema deve considerar a quantidade informada.
- O sistema deve validar a disponibilidade dos produtos.
- O carrinho deve apresentar os produtos adicionados.

### RF-011 — Remoção de produtos do carrinho

O sistema deve permitir a remoção de produtos adicionados ao carrinho.

**Regras de negócio:**
- Deve ser possível remover produtos do carrinho.
- O sistema deve atualizar as informações do carrinho após a remoção.
- O produto removido não deve permanecer na composição da compra.

### RF-012 — Finalização de compra

O sistema deve permitir a finalização de uma compra por meio do carrinho, respeitando as regras de negócio implementadas.

**Regras de negócio:**
- O sistema deve validar os produtos presentes no carrinho.
- Deve considerar as quantidades selecionadas.
- Deve apresentar uma confirmação da operação quando concluída com sucesso.

## 4. Requisitos não funcionais

### RNF-001 — Usabilidade

A aplicação deve apresentar uma interface compreensível e permitir que os usuários naveguem entre suas funcionalidades.

### RNF-002 — Validação de dados

O sistema deve validar os dados recebidos, impedindo operações com informações inválidas conforme as regras estabelecidas.

### RNF-003 — Segurança

O sistema deve controlar o acesso às funcionalidades que exigem autenticação e autorização.

### RNF-004 — Integridade dos dados

As operações de cadastro, atualização e exclusão devem manter a consistência das informações armazenadas.

### RNF-005 — Comunicação com a API

A aplicação deve realizar as operações por meio de requisições HTTP e apresentar respostas compatíveis com os resultados das operações.

## 5. Mapeamento inicial dos endpoints da API

| Funcionalidade | Método HTTP | Endpoint |
|---|---|---|
| Cadastro de usuários | POST | `/usuarios` |
| Listagem de usuários | GET | `/usuarios` |
| Consulta de usuário | GET | `/usuarios/{_id}` |
| Atualização de usuário | PUT | `/usuarios/{_id}` |
| Exclusão de usuário | DELETE | `/usuarios/{_id}` |
| Login | POST | `/login` |
| Listagem de produtos | GET | `/produtos` |
| Cadastro de produtos | POST | `/produtos` |
| Consulta de produto | GET | `/produtos/{_id}` |
| Atualização de produto | PUT | `/produtos/{_id}` |
| Exclusão de produto | DELETE | `/produtos/{_id}` |
| Gerenciamento do carrinho | POST | `/carrinhos` |
| Consulta de carrinho | GET | `/carrinhos` |
| Exclusão de carrinho | DELETE | `/carrinhos/{_id}` |

*Observação: o mapeamento dos endpoints é inicial e deve ser conferido com a documentação oficial da API, incluindo parâmetros, autenticação, permissões e respostas esperadas. Nem todas as funcionalidades descritas no frontend necessariamente possuem um endpoint independente.*

## 6. Estratégia de testes

Com base nos requisitos identificados, serão realizadas as seguintes atividades:

**Testes manuais**
- Validação dos fluxos principais da aplicação.
- Testes de cenários positivos e negativos.
- Testes exploratórios.
- Identificação e documentação de defeitos.

**Testes de API**
- Validação de métodos HTTP.
- Verificação dos códigos de status.
- Validação da estrutura das respostas JSON.
- Testes de autenticação e autorização.
- Validação das regras de negócio.

**Automação E2E**
- Automação dos principais fluxos de navegação.
- Validação do login.
- Validação do cadastro.
- Validação da consulta e gerenciamento de produtos.
- Validação do carrinho de compras.

**Automação de API**
- Automatização das requisições HTTP utilizando Cypress.
- Validação de respostas e regras de negócio.
- Execução automatizada dos cenários de API.

## 7. Considerações finais

Este documento representa a etapa inicial de levantamento e mapeamento dos requisitos da aplicação ServeRest.

Os requisitos identificados serão utilizados como referência para a elaboração do plano de testes, criação dos casos de teste, execução dos testes manuais e desenvolvimento das automações.

Durante a exploração da aplicação e da documentação oficial, os requisitos poderão ser complementados ou ajustados conforme os comportamentos efetivamente identificados no sistema.

---

**Projeto:** QA ServeRest  
**Área:** Quality Assurance (QA)  
**Tecnologias previstas:** Postman, Cypress, JavaScript, Git e GitHub Actions  
**Documento:** Mapeamento de Requisitos
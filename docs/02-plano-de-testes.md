# Plano de Testes — Projeto QA ServeRest

## 1. Identificação do projeto

| Informação | Descrição |
|---|---|
| Projeto | QA ServeRest |
| Sistema | ServeRest |
| Área | Quality Assurance (QA) |
| Tipo de aplicação | E-commerce |
| Abordagem | Testes manuais, API e automação |
| Linguagens | JavaScript |
| Ferramentas | Postman, Cypress, Git e GitHub |
| Integração contínua | GitHub Actions |

## 2. Objetivo dos testes

O objetivo deste plano de testes é definir a estratégia para avaliar a qualidade, funcionalidade e confiabilidade da aplicação ServeRest.

Serão realizados testes em diferentes camadas da aplicação, contemplando testes funcionais manuais, testes de API REST e automação de testes E2E e de API.

A execução dos testes buscará identificar falhas, validar regras de negócio, verificar o comportamento esperado das funcionalidades e documentar os resultados obtidos.

## 3. Escopo dos testes

### 3.1 Funcionalidades contempladas

Os testes serão realizados nos seguintes módulos:

**Usuários**
- Cadastro de usuários.
- Consulta de usuários.
- Atualização de usuários.
- Exclusão de usuários.

**Autenticação**
- Login com credenciais válidas.
- Login com credenciais inválidas.
- Validação de autenticação.
- Controle de acesso às funcionalidades restritas.

**Produtos**
- Listagem de produtos.
- Consulta de produtos.
- Cadastro de produtos.
- Atualização de produtos.
- Exclusão de produtos.

**Carrinho de compras**
- Adição de produtos.
- Consulta do carrinho.
- Remoção de produtos.
- Finalização de compra.

### 3.2 Tipos de testes contemplados

- Testes funcionais.
- Testes positivos.
- Testes negativos.
- Testes exploratórios.
- Testes de API REST.
- Testes de integração entre frontend e API.
- Testes de automação E2E.
- Testes automatizados de API.
- Testes de regressão.

## 4. Tipos de testes e ferramentas

| Tipo de teste | Ferramenta | Objetivo |
|---|---|---|
| Testes manuais | Navegador | Validar funcionalidades da aplicação |
| Testes exploratórios | Navegador | Identificar comportamentos inesperados |
| Testes de API | Postman | Validar endpoints e respostas HTTP |
| Automação E2E | Cypress | Automatizar fluxos do usuário |
| Automação de API | Cypress | Automatizar validações de endpoints |
| Versionamento | Git e GitHub | Controlar alterações e documentar o projeto |
| Integração contínua | GitHub Actions | Executar testes automaticamente |

## 5. Estratégia de execução

A execução dos testes será dividida em etapas, respeitando a evolução do projeto.

### Etapa 1 — Análise e levantamento de requisitos

- Explorar as funcionalidades da aplicação.
- Consultar a documentação da API.
- Identificar regras de negócio.
- Mapear os requisitos funcionais e não funcionais.
- Identificar os fluxos principais do sistema.

**Resultado esperado:** documentação inicial dos requisitos e funcionalidades.

### Etapa 2 — Testes manuais

- Elaborar casos de teste positivos e negativos.
- Executar os cenários manualmente.
- Validar os resultados obtidos.
- Registrar evidências das execuções.
- Documentar possíveis defeitos encontrados.

**Resultado esperado:** casos de teste documentados e relatório de execução manual.

### Etapa 3 — Testes manuais de API

- Criar uma coleção de requisições no Postman.
- Validar os métodos HTTP utilizados.
- Verificar os códigos de status das respostas.
- Validar os dados retornados em JSON.
- Testar autenticação e autorização.
- Validar regras de negócio.
- Executar cenários positivos e negativos.

**Resultado esperado:** coleção Postman organizada e documentada, com evidências das validações realizadas.

### Etapa 4 — Automação de testes E2E

- Configurar o ambiente Cypress.
- Desenvolver scripts de automação utilizando JavaScript.
- Automatizar os principais fluxos do usuário.
- Validar os resultados esperados.
- Implementar organização dos testes e reutilização de comandos quando necessário.

**Resultado esperado:** conjunto de testes E2E automatizados e executáveis.

### Etapa 5 — Automação de testes de API

- Automatizar requisições HTTP utilizando Cypress.
- Utilizar `cy.request()` para executar as chamadas.
- Validar códigos de status HTTP.
- Validar estrutura e conteúdo das respostas.
- Validar regras de negócio.
- Implementar cenários positivos e negativos.

**Resultado esperado:** testes de API automatizados e integrados ao projeto Cypress.

### Etapa 6 — Integração contínua (CI)

- Configurar GitHub Actions.
- Criar workflow para execução dos testes automatizados.
- Configurar a execução dos testes em eventos definidos, como push e pull request.
- Verificar os resultados das execuções.
- Documentar falhas e resultados.

**Resultado esperado:** pipeline de integração contínua executando os testes automatizados.

### Etapa 7 — Documentação e encerramento

- Organizar os documentos de QA.
- Consolidar os casos de teste.
- Documentar defeitos encontrados.
- Elaborar relatório final.
- Atualizar o README do GitHub.
- Publicar as evidências do projeto.

**Resultado esperado:** projeto de QA documentado e disponível para consulta no GitHub.

## 6. Critérios de entrada

Para iniciar a execução dos testes, deverão ser atendidas as seguintes condições:

- Aplicação disponível para acesso.
- Documentação da API disponível.
- Funcionalidades e requisitos identificados.
- Ambiente de testes acessível.
- Ferramentas necessárias instaladas e configuradas.

## 7. Critérios de saída

A etapa de testes será considerada concluída quando:

- Os casos de teste planejados tiverem sido executados ou tiverem sua não execução justificada.
- Os resultados estiverem documentados.
- Os defeitos identificados estiverem registrados.
- As falhas críticas identificadas estiverem analisadas.
- As evidências estiverem organizadas.
- O relatório de execução estiver atualizado.

A conclusão do projeto não significa necessariamente ausência total de defeitos, mas sim que os testes planejados foram executados e seus resultados devidamente avaliados.

## 8. Priorização dos testes

Os cenários serão classificados conforme sua importância para o funcionamento do sistema.

| Prioridade | Descrição | Exemplo |
|---|---|---|
| Alta | Funcionalidades essenciais do sistema | Login, cadastro e autenticação |
| Média | Funcionalidades importantes para operação | Consulta e atualização de produtos |
| Baixa | Funcionalidades complementares | Validações secundárias de interface |

A priorização poderá ser ajustada conforme os riscos identificados durante a execução.

## 9. Classificação dos defeitos

Os defeitos encontrados serão classificados conforme seu impacto.

| Severidade | Descrição |
|---|---|
| Crítica | Impede o funcionamento de uma funcionalidade essencial ou compromete gravemente o sistema |
| Alta | Compromete uma funcionalidade importante |
| Média | Apresenta comportamento incorreto, mas permite contorno |
| Baixa | Problema visual ou de baixo impacto funcional |

Cada defeito deverá conter descrição, passos para reprodução, resultado esperado, resultado obtido, evidências e severidade.

## 10. Evidências e documentação

As evidências serão utilizadas para demonstrar os resultados das execuções e facilitar a análise dos defeitos.

Poderão ser armazenados:

- Capturas de tela.
- Registros de requisições e respostas HTTP.
- Relatórios de execução.
- Logs de automação.
- Registros de falhas.
- Resultados das execuções no GitHub Actions.

Os documentos e evidências serão organizados e versionados no GitHub.

## 11. Riscos e limitações

Durante a execução dos testes, poderão existir fatores que impactem os resultados:

- Indisponibilidade da aplicação ou da API.
- Instabilidade do ambiente de testes.
- Alterações na aplicação durante o desenvolvimento do projeto.
- Dependência de dados previamente cadastrados.
- Limitações de funcionalidades disponíveis no ambiente.
- Diferenças entre o comportamento documentado e o comportamento observado.

Quando identificados, esses fatores deverão ser registrados e considerados na análise dos resultados.

## 12. Considerações finais

Este plano de testes estabelece a estratégia para avaliar a qualidade da aplicação ServeRest, contemplando diferentes abordagens e ferramentas utilizadas no processo de Quality Assurance.

A execução será realizada de forma incremental, iniciando pelos testes manuais, avançando para testes de API e posteriormente para automação E2E e de API.

Os resultados serão documentados e disponibilizados no GitHub, demonstrando a aplicação prática dos conhecimentos de QA, documentação, testes de software, automação e integração contínua.

---

**Projeto:** QA ServeRest  
**Documento:** Plano de Testes  
**Versão:** 1.0  
**Status:** Planejamento inicial
# Trabalho Final - Automação de Testes com Cypress

Trabalho final da disciplina de Teste de Qualidade de Software. O projeto automatiza casos de teste do site [Automation Exercise](https://automationexercise.com) usando o [Cypress](https://www.cypress.io).

Os casos de teste seguem a lista oficial do site: [automationexercise.com/test_cases](https://automationexercise.com/test_cases).

# Integrantes do trio

- Luis Felipe Dos Santos
- Nicollas Villela 
- Guilherme Martins


## Pré-requisitos

- [Node.js](https://nodejs.org) 18 ou superior
- npm

## Instalação

```bash
git clone https://github.com/Luis5Felipe/Trabalho-Final-Automa-o-de-Testes-com-Cypress.git
cd Trabalho-Final-Automa-o-de-Testes-com-Cypress
npm install
```

## Como executar

Abrir a interface do Cypress:

```bash
npm run cypress:open
```

Rodar todos os testes no terminal (modo headless):

```bash
npm test
```

Rodar um teste específico:

```bash
npx cypress run --spec cypress/e2e/01-register-user.cy.js
```

## Casos de teste

| Nº | Caso de teste | Arquivo | Responsável |
|----|---------------|---------|-------------|
| 1 | Register User | `01-register-user.cy.js` | Nicollas |
| 2 | Login User with correct email and password | `02-login-user.cy.js` | Nicollas |
| 3 | Login User with incorrect email and password | `03-login-incorrect.cy.js` | Nicollas |
| 4 | Logout User | `04-logout-user.cy.js` | Nicollas |
| 9 | Search Product | `09-SearchProduct.cy.js` | Guilherme |
| 10 | Verify Subscription in home page | `10-Subscription.cy.js` | Guilherme |
| 11 | Verify Subscription in Cart page | `11-SubscriptionCart.cy.js` | Guilherme |
| 20 | Search Products and Verify Cart After Login | `20-search-products-cart-after-login.cy.js` | Luis Felipe |
| 21 | Add review on product | `21-add-review-on-product.cy.js` | Luis Felipe |
| 22 | Add to cart from Recommended items | `22-add-to-cart-recommended-items.cy.js` | Luis Felipe |

## Estrutura do projeto

```
cypress/
├── e2e/          # arquivos de teste
└── support/
    ├── commands.js  # comandos customizados (createUser, deleteUser)
    └── e2e.js
cypress.config.js    # configuração do Cypress (baseUrl)
```

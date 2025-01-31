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

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('input[id="firstName"]').type('Nome01')
    cy.get('input[id="lastName"]').type('Nome02')
    cy.get('input[id="email').type('email@email.com')
    cy.get('textarea[id="open-text-area"]').type('test') 
    cy.get('button[type="submit"]').click()
    //podemos utilizar os seguintes comandos quando não há seletor CSS fácil de ser utilizado
    //o primeiro comando tem o parametro 'button' pra deixar mais especifico caso haja mais de um elemento contento 'Enviar' 
    //cy.contains('button','Enviar').click()
    //cy.contains('Enviar').click()
})
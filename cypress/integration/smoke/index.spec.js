/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays image, blurb, and 2 buttons', () => {
    cy.get('.hero-text').should('have.text', 'A simple example')

    cy.get('.get-started').should('have.text', 'Get Started')
    cy.get('.have-account').should('have.text', 'I Already Have An Account')
  })
})

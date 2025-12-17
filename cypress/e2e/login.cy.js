describe('Login Test', () => {

    beforeEach(() => {
        //arrange
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login com Sucesso', () =>{
        //act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        //assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it.only('Login com Inválido', () =>{
        //act
        cy.get('[data-test="username"]').type('usuario_invalido')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        //assert
        cy.get('[data-test="error"]')
          .should(
            'contain.text',
             'Username and password do not match any user in this service'
            )

        cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})
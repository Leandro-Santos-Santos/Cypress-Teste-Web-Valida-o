describe('Login Test', () => {

    it('Login com Sucesso', () =>{
        //arrange
        cy.visit('https://www.saucedemo.com/')
        //act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        //assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it.only('Login com Inválido', () =>{
        //arrange
        cy.visit('https://www.saucedemo.com/')
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
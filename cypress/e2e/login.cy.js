describe('Login Test', () => {

    it('Realizar login', () =>{
        //arrange
        cy.visit('https://www.saucedemo.com/')
        //act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        //assert
    })
})
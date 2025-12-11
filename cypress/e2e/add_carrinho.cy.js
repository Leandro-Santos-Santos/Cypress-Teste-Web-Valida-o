describe('Adicionar ao Carrinho', () => {
    it('Adicionar Produto ao Carrinho com Sucesso', () =>{
        //arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        //act
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        //assert
        cy.get('[data-test="shopping-cart-badge"]')
            .should('be.visible')
            .and('have.text', '1')
        cy.get('#shopping_cart_container').click()
        cy.contains('Sauce Labs Bolt T-Shirt').should('be.visible')
    })


})
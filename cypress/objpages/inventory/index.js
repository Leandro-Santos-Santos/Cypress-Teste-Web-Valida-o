const { default: login } = require("../login")

class Inventory {

    validarAcessoAPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.screenshot('login')
    } 

    adicionarProduto(itemName) {
        cy.get(el.addTocart(itemName)).click()
        cy.screenshot('produto adicionado')
    }

    removerProduto(itemName) {
        cy.get(el.removeFromCart(itemName)).click()
    }

}

export default new Inventory()
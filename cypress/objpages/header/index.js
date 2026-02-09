import { elements as el } from './element'

class header {
    validarCarrinhoItens(quantidade) {
        cy.get(el.cartBadge)
            .should('be.visible')
            .and('have.text', quantidade.toString())
    }

    navegarParaCarrinho() {
       cy.get(el.cartContainer).click() 
    }
}

export default new header()
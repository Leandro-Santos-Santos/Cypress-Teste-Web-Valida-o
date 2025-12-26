class cart {
    validarProdutoPresenteNoCarrinho(name) {
        cy.contains(name).should('be.visible')
        cy.screenshot('produto adicionado')
    }
}
export default new cart(); 
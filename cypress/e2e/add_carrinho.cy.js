import login from '../objpages/login'
import inventory from '../objpages/inventory'
import header from '../objpages/header'
import cart from '../objpages/cart'

describe('Adicionar ao Carrinho', () => {

    beforeEach(() => {
        //arrange
        login.acessarPagina()
    })

    it('Adicionar Produto ao Carrinho com Sucesso', () =>{
        login.loginValido()
        //act
        const qtdItensAdicionados = 1
        inventory.adicionarProduto('Sauce Labs Backpack')
        //assert
        header.validarCarrinhoItens(qtdItensAdicionados)
        header.navegarParaCarrinho()
        
        cart.validarProdutoPresenteNoCarrinho('Sauce Labs Bolt T-Shirt')
    })

    it('Remover Produto do Carrinho com Sucesso', () =>{
        //arrange
        inventory.adicionarProduto('Sauce Labs Bolt T-Shirt')

        //assert
        inventory.removerProduto('Sauce Labs Bolt T-Shirt')
        
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
            .should('be.visible')

        //act
        cy.get('[data-test="remove-sauce-labs-onesie"]').click()
        cy.screenshot('produto removido')
        

    })    
})
import login from "../objpages/login/index";
import inventory from '../objpages/inventory'

describe('Login Test', () => {

    beforeEach(() => {
        //arrange
        login.visitpage();
    })

    it('Login com Sucesso', () =>{
        //act
        login.loginValido();
        //assert
        inventory.validarAcessoAPagina();
    })

    it('Login com Inválido', () =>{
        //act
        login.loginInvalido();
        //assert
        login.validarErroCredenciaisInvalidas();
    })
})
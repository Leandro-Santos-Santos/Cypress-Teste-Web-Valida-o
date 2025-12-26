class Login {
    visitpage() {
        cy.visit('https://www.saucedemo.com/')
    }

    loginValido() {
        cy.get(el.username).type('standard_user')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginButton).click()
    }

    loginInvalido() {  
        cy.get(el.username).type('usuario_invalido')
        cy.get(el.password).type('secret_sauce')
        cy.get(el.loginButton).click()
    }

    validarErroCredenciaisInvalidas() {
        cy.get(el.errorMessage)
          .should(
            'contain.text',
             'Username and password do not match any user in this service'
            )

        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot('login-erro')
    }

}

export default new Login();
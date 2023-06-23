class LoginObjects{
    getLoginForm(){
        return cy.get('.login-box')
    }

    getLoginHeader(){
        return cy.get('.login-header')
    }

    getEmailBox(){
        return cy.get('.form-group').contains('Your email')                       //Element exists and contains the expected text
    }

    getPasswordBox(){
        return cy.get('.form-group').contains('Your password')                       //Element exists and contains the expected text
    }

    getEmailInput(){
        return cy.get('[type="email"]')
    }

    getPasswordInput(){
        return cy.get('[type="password"]')
    }

    getLoginButton(){
        return cy.get('.btn.btn-primary.btn-block').contains('Log In')                       //Element exists and contains the expected text
    }

    getErrorMsg(){
        return cy.get('.error.alert.alert-danger')
    }
}
export default LoginObjects;
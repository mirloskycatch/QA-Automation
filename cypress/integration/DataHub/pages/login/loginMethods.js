import SkycatchObjects from "../skycatch/skycatchObjects"
import CanvasObjects from "../viewer/canvas/CanvasObjects"
import HambMenuObjects from "../viewer/hambMenu/hambMenuObjects"
import LoginObjects from "./loginObjects"

class LoginMethods{

    skycatchObjects = new SkycatchObjects()
    loginObjects = new LoginObjects()
    hambMenuObjects = new HambMenuObjects()
    canvasObjects = new CanvasObjects()

    //This method takes the user to DataHub Login page through the Skycatch official website 
    navigateToDataHubLoginThroughSkycatch(link){

        cy.visit(link)      //navigate to URL provided in fixtures
        this.skycatchObjects.getHeaderlogo().should('be.visible')      //Skycatch logo visible
        this.skycatchObjects.getHeaderNavBar().should('be.visible')    //Header nav bar visible
        this.skycatchObjects.getHeaderLogin().click()                  //Click on login header option
        this.loginObjects.getLoginHeader().should('be.visible')        //Login header visible
        this.loginObjects.getLoginForm().should('be.visible')          //Login form visible
        this.loginObjects.getLoginButton().should('be.visible')        //Login button visile
    
    }

        //This method takes the user to DataHub Login using a provided URL 
    navigateToDataHubLoginPage(baseURL){
        cy.visit(baseURL)      //navigate to URL provided in fixtures
        this.loginObjects.getLoginHeader().should('be.visible')        //Login header visible
        this.loginObjects.getLoginForm().should('be.visible')          //Login form visible
        this.loginObjects.getLoginButton().should('be.visible')        //Login button visile
    }

        //This method inserts email and password in the Login page
    enterCredentials(email,pwd){

            this.loginObjects.getEmailBox().should('have.text','Your email')       //Email box text validation "Your email"
            this.loginObjects.getEmailInput().type(email)                          //Typing provided email
            this.loginObjects.getPasswordBox().should('have.text','Your password') //Password box text validation "Your password"
            this.loginObjects.getPasswordInput().type(pwd)                         //Typing provided pwd
    }

        //This methods logs in the user to DataHub using the creds provided in the prodUserCreds file under fixture
    submitValidCredentials(email,pwd){
        this.loginObjects.getLoginButton().should('be.visible')
        this.loginObjects.getLoginButton().click()                                 //Click on Login
        cy.wait(10000)                                                              //wait 5 secs after clicking on submit
        this.hambMenuObjects.getSideDHName().should('have.text','DataHub')         //Validate the user landed at DH viewer by checking the sideMenu header
        this.canvasObjects.getViewerPanel().should('be.visible')                   //Validate the user landed at DH viewer by checking the canvas is visible
    }

        //This is a failed login for negative scenarios
    wrongCredsLogin(wrongEmail,wrongPwd){

        this.enterCredentials(wrongEmail,wrongPwd)                              //Method to insert credentials and submit
        this.loginObjects.getErrorMsg().should('have.text','Wrong email or password.') //Validate error message is the expected one: "Wrong email or password."
        this.loginObjects.getLoginForm().should('be.visible')

    }

}
export default LoginMethods;
import LoginMethods from "../../pages/login/loginMethods"
import HambMenuMethods from "../../pages/viewer/hambMenu/hambMenuMethods"


describe('Test Cases related to the hamburguer Menu',function(){

    const loginMethods = new LoginMethods()
    const hambMenuMethods = new HambMenuMethods()


    before(function(){
        cy.fixture('DataHub/links').then(function(data){

            this.links=data
        })
        
        cy.fixture('DataHub/prodUserCreds').then(function(data){
        this.creds=data
    
        })
    })

    //Validate the Hamburguer Menu Details
    it('003_HambMenu_Details',function(){
        
        loginMethods.navigateToDataHubLogin(this.links.dataHubURL)          //Navigate to DataHub Login
        loginMethods.login(this.creds.validEmail,this.creds.validPwd)       //Login with valid creds
        hambMenuMethods.clickOnHambMenu()                                   //Click on hamburguer Menu
        hambMenuMethods.checkFieldsInSideMenuDetails(this.creds.validEmail) //Check Menu details. Also provide email to compare vs the expected one
        
    })

})
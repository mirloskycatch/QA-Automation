import LoginMethods from "../../pages/login/loginMethods"

describe('Successful Login',function(){

    const loginMethods = new LoginMethods()

    before(function(){
    
        cy.fixture('DataHub/links').then(function(data){
            this.links=data
        })
        
        cy.fixture('DataHub/prodUserCreds').then(function(data){
        this.creds=data
        })
    })  

        //Validate Successful Login through Skycatch.com
        it('001_Login_Successful',function(){
            loginMethods.navigateToDataHubLogin(this.links.dataHubURL)          //Navigate to DataHub Login
            loginMethods.login(this.creds.validEmail,this.creds.validPwd)       //Login with valid creds
        })

})
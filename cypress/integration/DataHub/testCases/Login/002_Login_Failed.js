import LoginMethods from "../../pages/login/loginMethods"

describe('Failed Logins',function(){


    const loginMethods = new LoginMethods()

    before(function(){
    
        cy.fixture('DataHub/links').then(function(data){
            this.links=data
        })
        
        cy.fixture('DataHub/stgUserCreds').then(function(data){
        this.creds=data
    
        })
    })

    //Validate Failed Login through Skycatch.com
    it('002_Login_Failed',function(){

        loginMethods.navigateToDataHubLogin(this.links.dataHubURLSTG)              //Navigate to DH Login
        loginMethods.wrongCredsLogin(this.creds.wrongEmail,this.creds.wrongPwd) //Do a login with invalid credentials
    })

})
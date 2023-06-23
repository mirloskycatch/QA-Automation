import CommonCommands from "../../../../../support/commands"

beforeEach(function(){

    const commonCommands = new CommonCommands()

    cy.fixture('DataHub/links').then(function(data){
        this.links=data
    })
    
    cy.fixture('DataHub/stgUserCreds').then(function(data){
        this.creds=data
    })

    commonCommands.hideRequests()
    commonCommands.avoidUncaughtError()
}) 
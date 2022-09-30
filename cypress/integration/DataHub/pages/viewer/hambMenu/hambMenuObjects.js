class HambMenuObjects{
    getSideHeader(){
        return cy.get('.sc-bdVaJa.sc-EHOje.sc-fyjhYU.deJcfv')
    }
    
    getSideDHName(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.kipONF')                            
    }

    getSideMenuIcon(){
        return cy.get('.sc-eIHaNI.daeWrX')
    }

    getSideMenuEmail(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.lukkO')
    }

    getSideMenuManageUsrAccntsAndRols(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.Jixho').contains('Manage user accounts and roles')  //Element exists and contains the expected text
    }

    getSideMenuUsrGuide(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.Jixho').contains('User Guide')                       //Element exists and contains the expected text
    }

    getSideMenuEmailSupport(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.Jixho').contains('Email support')                       //Element exists and contains the expected text
    }

    getSideMenuSupportChat(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.Jixho').contains('Open Support Chat')                       //Element exists and contains the expected text
    }

    getSideMenuSignOut(){
        return cy.get('.sc-ipZHIp.piUNw.sc-dEoRIm.iJHMkT').contains('Sign out')                       //Element exists and contains the expected text
    }
}
export default HambMenuObjects;
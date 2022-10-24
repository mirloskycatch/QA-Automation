/// <reference types="Cypress" />
import HambMenuObjects from "./hambMenuObjects"

class HambMenuMethods{
   
    hambMenuObjects = new HambMenuObjects()

    //Method to validate and click the hamburguer Menu
    openOnHambMenu(){
        this.hambMenuObjects.getSideMenuIcon().should('be.visible')
        this.hambMenuObjects.getSideMenuIcon().click()
        this.hambMenuObjects.getHambMenuComponent().should('be.visible')
    }

    //Method to validate the Hamb Menu details
   assertHambMenuDetails(email){
        this.hambMenuObjects.getSideMenuEmail().should('have.text',email)                      //Element is visible and email is the expected/provided one
        this.hambMenuObjects.getSideMenuManageUsrAccntsAndRols().should('be.visible')          //Element is visible
        this.hambMenuObjects.getSideMenuUsrGuide().should('be.visible')                         //Element is visible
        this.hambMenuObjects.getSideMenuEmailSupport().should('be.visible')                    //Element is visible
        this.hambMenuObjects.getSideMenuSupportChat().should('be.visible')                     //Element is visible
        this.hambMenuObjects.getSideMenuSignOut().should('be.visible')                         //Element is visible
    }

    closeHambMenu(){
        this.hambMenuObjects.getCloseBttn().should('be.visible')                                //Element is visible
        this.hambMenuObjects.getCloseBttn().click()                                             //Close hamb menu
        this.hambMenuObjects.getHambMenuComponent().should('not.exist')                         //hambMenu component does not exist
    }


}
export default HambMenuMethods;
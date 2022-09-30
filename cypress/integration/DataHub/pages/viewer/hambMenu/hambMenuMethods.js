import HambMenuObjects from "./hambMenuObjects"

class HambMenuMethods{
   
    hambMenuObjects = new HambMenuObjects()

    //Method to validate and click the hamburguer Menu
    clickOnHambMenu(){
        this.hambMenuObjects.getSideMenuIcon().should('be.visible')
        this.hambMenuObjects.getSideMenuIcon().click()
    }

    //Method to validate the Hamb Menu details
   checkFieldsInSideMenuDetails(email){
        this.hambMenuObjects.getSideMenuEmail().should('have.text',email)                      //Element is visible and email is the expected/provided one
        this.hambMenuObjects.getSideMenuManageUsrAccntsAndRols().should('be.visible')          //Element is visible
        this.hambMenuObjects.getSideMenuUsrGuide().should('be.visible')                        //Element is visible
        this.hambMenuObjects.getSideMenuEmailSupport().should('be.visible')                    //Element is visible
        this.hambMenuObjects.getSideMenuSupportChat().should('be.visible')                     //Element is visible
        this.hambMenuObjects.getSideMenuSignOut().should('be.visible')                         //Element is visible
    }
}
export default HambMenuMethods;
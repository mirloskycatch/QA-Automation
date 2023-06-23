import SkycatchObjects from "./skycatchObjects";

class SkycatchMethods{

    skycatchObjects = new SkycatchObjects()

    navigateToSkycatchPage(link){

        cy.visit(link)      //navigate to URL provided in fixtures
        this.skycatchObjects.getHeaderlogo().should('be.visible')      //Skycatch logo visible
        this.skycatchObjects.getHeaderNavBar().should('be.visible')    //Header nav bar visible
    }

}
export default SkycatchMethods;
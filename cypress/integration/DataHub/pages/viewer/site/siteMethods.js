/// <reference types="Cypress" />
import SiteObjects from "./siteObjects"

class SiteMethods{

siteObjects = new SiteObjects()

    //Open Site menu/details
    assertSiteSection(){
        this.siteObjects.getSiteMenu().should('be.visible')                         //Site title is visible
        this.siteObjects.getSiteIcon().should('be.visible')                         //Site icon is visible
        this.siteObjects.getSiteMenu().contains('CopalitaHWS')                      //('have.text',this site name is coming from a given URL
        this.siteObjects.getSiteMenu().should('be.visible')          
    }

    expandSiteSection(){
        this.siteObjects.getSiteName().click()                                      //Expand the Site content
        this.siteObjects.getSiteMenuList().should('be.visible')                     //Site content list is visible
    }

    assertSiteMenuContent(){
        this.siteObjects.getSiteInformation().should('be.visible')                  //Site information option is visible
        this.siteObjects.getFileManager().should('be.visible')                      //File Manager option is viisble
        this.siteObjects.getUsrAccntsRls().should('be.visible')                     //Usr Accnts and Rls option is viisble
        this.siteObjects.getIntegrations().should('be.visible')                     //Integrations option is visible
    }

    findSiteSection(){
        this.siteObjects.getSiteSectionContainer().should('be.visible')             //The site section component is visible
    }
}
export default SiteMethods
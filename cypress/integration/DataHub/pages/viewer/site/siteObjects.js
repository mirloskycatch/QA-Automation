class SiteObjects{

    getSiteSectionContainer(){
        return cy.get('[data-locator="site.menu__details"]')
    }

    getSiteMenu(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.sc-hIVACf.gYTSKL') 
    }

    getSiteName(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.sc-hIVACf.gYTSKL')
    }

    getSiteIcon(){
        return cy.get('[data-name="ico site"]')
    }
    
    getSiteMenuIcon(){
        return cy.get('[data-locator="site.menu-item-header__open"]')
    }

    getSiteMenuList(){
        return cy.get(".sc-dqBHgY.ctZfsV.sc-fHxwqH.dWZmeF")
    }
    
    getSiteInformation(){
        return cy.get('[data-locator="site.details-menu-item__site-info"]').contains('Site information')
    }

    getFileManager(){
        return cy.get('[data-locator="fileManager.file-manager__open"]').contains('File manager')
    }

    getUsrAccntsRls(){
        return cy.get('[data-locator="userManagement.menu-item__open"]').contains('User accounts and roles')
    }

    getIntegrations(){
        return cy.get('[data-locator="integrations.open"]').contains('Integrations')
    }

    
}
export default SiteObjects;
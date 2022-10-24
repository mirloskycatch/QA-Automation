export class DatasetsObjects{
    getDatasetMenu(){
        return cy.get('[data-locator="datasets.menu-item-header__open"]')
    }

    getDatasetDate(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.Jixho')
    }

    getDatasetIcon(){
        return cy.get('[data-name="Ico date"]')
    }

    getdatasetsExpandedContainer(){
        return cy.get('.sc-ckVGcZ.cTVQAV')
    }

    getDatasetsSectionContainer(){
        return cy.get(':nth-child(2) > .chaYff')
    }
    
}

export class DatasetsModal{

    getSfMUploadBttn(){
        return cy.get('.sc-kcbnda.kXpcCv').invoke('removeAttr','target')
    }

    getPPFUploadBttn(){
        return cy.get('.sc-bdVaJa.sc-gzVnrw.sc-hcmgZB')
    }
}

export class PPFUploaderModal{
    
    getCCRSSelector(){

        return cy.get('[data-locator="datasets.create-new-from-ppf__coordinate-system"]')
    }

    getCCRSList(){

        return cy.get('.sc-hqyNC.fNFJMn.css-26l3qy-menu')

    }

    getCCRSOption(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.eJAoRX')
    }

    getDateSelector(){
        return cy.get('.sc-bdVaJa.sc-tilXH.ZmqPf')
    }

    getCalendar(){
        return cy.get('.rdtPicker')
    }

    getDay(){
        return cy.get('.rdtDay')
    }
}
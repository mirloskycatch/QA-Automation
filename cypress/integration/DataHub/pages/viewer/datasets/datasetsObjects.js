export class DatasetsObjects {
    getDatasetMenu() {
        return cy.get('[data-locator="datasets.menu-item-header__open"]')
    }

    getDatasetDate() {
        return cy.get('.sc-bdVaJa.sc-jTzLTM.Jixho')
    }

    getDatasetIcon() {
        return cy.get('[data-name="Ico date"]')
    }

    getdatasetsExpandedContainer() {
        return cy.get('.sc-ckVGcZ.cTVQAV')
    }

    getDatasetsSectionContainer() {
        return cy.get(':nth-child(2) > .chaYff')
    }

}

export class DatasetsModal {

    getSfMUploadBttn() {
        return cy.get('.sc-kkbgRg.eTvFrh').invoke('removeAttr', 'target')
    }

    getPPFUploadBttn() {
        return cy.get('[data-locator="datasets.select-modal-header__upload-ppf"]')
    }

    getDatasetsStatusList(){
        return cy.get('.sc-jzJRlG.sc-bwCtUz.jpiBQb')
    }

    uploadInProgress(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.dYGqSG',{ timeout: 10000 }).should('be.visible')
    }

}

export class PPFUploaderModal {

    getPPFContainer() {
        return cy.get('[data-locator="datasets.create-new-from-ppf__form"]')
    }

    getCCRSSelector() {

        return cy.get('[data-locator="datasets.create-new-from-ppf__coordinate-system"]')
    }

    getCCRSList() {

        return cy.get('.sc-hqyNC.fNFJMn.css-26l3qy-menu').should('be.visible')

    }

    getCCRSOption() {
        return cy.get('.sc-bdVaJa.sc-jTzLTM.eJAoRX')
    }

    getDateSelector() {
        return cy.get('.sc-bdVaJa.sc-EHOje.kLWRKI .rdt.sc-ecaExY.fJzOHp')
    }

    getCalendar() {
        return cy.get('.rdtPicker')
    }

    getDay() {
        return cy.get('.rdtDay.rdtToday')
    }

    getPPFName() {
        return cy.get('input[data-locator="datasets.create-new-from-ppf__dataset-name"]')
    }

    getLaserScan() {
        return cy.get('.css-2b097c-container>div').eq(1).should('be.visible')
    }

    getLaserScanNo() {
        return cy.get('.sc-hqyNC.jfjsbV.css-26l3qy-menu').contains('No')
    }

    getStartUpload() {
        return cy.get('[data-locator="datasets.create-new-from-ppf__submit"')
    }
}


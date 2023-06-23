class CanvasObjects{

    getViewerPanel(){
        return cy.get('.cesium-widget')
    }

    getDatasetName(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.sc-elNKlv.gbPwMi')
    }

    getDatasetDate(){
        return cy.get('.sc-bdVaJa.sc-jTzLTM.sc-elNKlv.gKhZSo')
    }

}
export default CanvasObjects;
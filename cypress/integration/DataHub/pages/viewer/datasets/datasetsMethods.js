class DatasetsMethods{

    //This method upload the provided PPF type into the viewer
    uploadPPF(ppfType){

        switch(ppfType){
            case 'PointCloud':
                cy.get('[type=file]').eq(0).attachFile('DataHub/preProcessedFiles/Koriyama-localized_-2018-01-19-T03-04-11-000-Z_1491189199729_KoriyamaICTdemocenter-tp3_pointcloud.las')
                break;
            case 'DSM':
                cy.get('[type=file]').eq(1).attachFile('DataHub/preProcessedFiles/Koriyama-localized_-2018-01-19-T03-04-11-000-Z_1491189199729_KoriyamaICTdemocenter-tp3_dsm.tif')
                break;
            case 'DTM':
                cy.get('[type=file]').eq(2).attachFile('DataHub/preProcessedFiles/Koriyama-localized_-2018-01-19-T03-04-11-000-Z_1491189199729_KoriyamaICTdemocenter-tp3_dtm.tif')
                break;
            case 'Orthophoto':
                cy.get('[type=file]').eq(3).attachFile('DataHub/preProcessedFiles/Koriyama-localized_-2018-01-19-T03-04-11-000-Z_1491189199729_KoriyamaICTdemocenter-tp3_orthophoto.tif')
                break;
        }
    }
       //Select Localized CCRS for a PPF upload
       selectPPFCCRS(ccrs){
        this.ppfUploader.getCCRSSelector()
            .should('be.visible')         //CCRS Dropdown to be visible
            .click()                      //Click on CCRS dropdown
        this.ppfUploader.getCCRSList().should('be.visible')             //Dropdown is expanded
       
        this.ppfUploader.getCCRSOption().each(($el, index , $list) => {       //Start each
            const textOptionCCRS = $el.text()        //save the text $el
            if(textOptionCCRS.includes(ccrs)){
             $el.trigger('click')
            }
        })
    }

    //Select the date for the PPF upload
    selectPPFDate(){

        this.ppfUploader.getDateSelector() 
            .should('be.visible')         //Date Selector to be visible
            .click()
        this.ppfUploader.getCalendar().scrollIntoView().should('exist')           //elemento to be visible
        
        this.ppfUploader.getDay().each(($el,index,$list) => {

            const rndmDay = Math.floor(Math.random() * 40)
            const dayNumber = $el.invoke('attr','data-value')

            if(dayNumber.eq(rndmDay)){
                $el.trigger('click')
            }
        })
    }
            

}
export default DatasetsMethods;
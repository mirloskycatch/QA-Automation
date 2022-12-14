import CommonCommands from "../../../../../support/commands";
import IngestorObjects from "../../ingestor/ingestorObjects";
import CanvasObjects from "../canvas/CanvasObjects";
import { DatasetsModal, DatasetsObjects } from "./datasetsObjects";
import 'cypress-iframe'

class DatasetsMethods{

    canvasObjects = new CanvasObjects()
    datasetsObjects = new DatasetsObjects()
    commonCommands = new CommonCommands
    datasetsModal = new DatasetsModal()
    ingestorOjects = new IngestorObjects()

    //This method upload the provided PPF type into the viewer
    uploadSinglePPF(ppfType){

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

    //Select a random date for the PPF upload    ----------->  <<<<<<<<<< IN PROGRESS >>>>>>>>>>>>>
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

    //Validate the Datasets section before expanding the list
    assertDatasetsSection(){
        this.datasetsObjects.getDatasetMenu().should('be.visible')                                          //element to be visible
        this.datasetsObjects.getDatasetDate().should('be.visible')                                           //element to be visible
        this.compareDSDateWithCanvasDate(this.datasetsObjects.getDatasetDate(),this.canvasObjects.getDatasetDate())
        this.datasetsObjects.getDatasetIcon().should('be.visible')                                            //elemento to be visible
    }  

   //This method compares the Dataset name in the Side menu vs the DS date in the canvas
   compareDSDateWithCanvasDate(el1,el2){
    let Text1
        el1.then(($we1) => {
            Text1 = $we1.text()
        })

        el2.then(($we2) => {
            expect(Text1).equal($we2.text().substring(0,12))                //Substring is limited to exclude time
        })
    }

    //Expand the datasets section
    expandDatasetsSection(){
        this.datasetsObjects.getDatasetDate().click()                                                       //Clck on the DS name to expand the list 
        this.datasetsObjects.getdatasetsExpandedContainer().should('be.visible')                            //Validate the new container is visible/exist (this comp oonly exists if the list is expanded)
    }

    //Open Ingestor   <<<<<<<<<< IN PROGRESS >>>>>>>>>>>>>
    navigateToIngestorFromDatasets(){
        this.datasetsObjects.getDatasetMenu().click()                   //Expand Dataset Menu
        this.datasetsModal.getSfMUploadBttn().click()                   //Navigate to ingestor
    }
    
    //Focus on the Datasets section
    findDatasetsSection(){
        this.datasetsObjects.getDatasetsSectionContainer().should('be.visible')                   //Focus on the Datasets section
    }

}
export default DatasetsMethods;
///  <reference types="Cypress" />
import { Canvas, SideMenu } from "../objects/MainViewer";
import SkycatchPage from "../objects/SkycatchPage";
import LoginPage from "../objects/LoginPage";
import DatasetsModal from "../objects/DatasetsModal";
import PPFUploaderModal from "../objects/PPFUploaderModal";



class Methods{

    loginPage = new LoginPage
    skycatchPage = new SkycatchPage()
    sideMenu = new SideMenu()
    canvas = new Canvas()
    datasetModal = new DatasetsModal()
    ppfUploader = new PPFUploaderModal()

    //This method takes the user to DataHub Login page through the Skycatch official website 
    navigateToDataHubLogin(link){

        cy.visit(link)      //navigate to URL provided in fixtures
        this.skycatchPage.getHeaderlogo().should('be.visible')      //Skycatch logo visible
        this.skycatchPage.getHeaderNavBar().should('be.visible')    //Header nav bar visible
        this.skycatchPage.getHeaderLogin().click()                  //Click on login header option
        this.loginPage.getLoginHeader().should('be.visible')        //Login header visible
        this.loginPage.getLoginForm().should('be.visible')          //Login form visible
        this.loginPage.getLoginButton().should('be.visible')        //Login button visile
    
    }



    //This methods logs in the user to DataHub using the creds provided in the prodUserCreds file under fixture
    login(email,pwd){

        this.insertCredsAndSubmit(email,pwd)                                //Method to insert credentials and submit
        this.sideMenu.getSideDHName().should('have.text','DataHub')         //Validate the user landed at DH viewer by checking the sideMenu header
        this.canvas.getViewerPanel().should('be.visible')                   //Validate the user landed at DH viewer by checking the canvas is visible

    }

    //This is a failed login for negative scenarios
    wrongCredsLogin(wrongEmail,wrongPwd){

        this.insertCredsAndSubmit(wrongEmail,wrongPwd)                              //Method to insert credentials and submit
        this.loginPage.getErrorMsg().should('have.text','Wrong email or password.') //Validate error message is the expected one: "Wrong email or password."
        cy.wait(1500)                                                               //Wait 1.5 seg
        this.loginPage.getLoginForm().should('be.visible')

    }

    //Method to validate the Side Menu details
    checkFieldsInSideMenuDetails(email){

    this.sideMenu.getSideMenuEmail().should('have.text',email)                      //Element is visible and email is the expected/provided one
    this.sideMenu.getSideMenuManageUsrAccntsAndRols().should('be.visible')          //Element is visible
    this.sideMenu.getSideMenuUsrGuide().should('be.visible')                        //Element is visible
    this.sideMenu.getSideMenuEmailSupport().should('be.visible')                    //Element is visible
    this.sideMenu.getSideMenuSupportChat().should('be.visible')                     //Element is visible
    this.sideMenu.getSideMenuSignOut().should('be.visible')                         //Element is visible
    
    }

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

export default Methods;
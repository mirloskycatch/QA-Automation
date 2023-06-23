import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import LoginMethods from "../../../pages/login/loginMethods"
import DatasetsMethods from "../../../pages/viewer/datasets/datasetsMethods"

const loginMethods = new LoginMethods()
const datasetsMethods = new DatasetsMethods()

Given('I am in the Login page', function () {
    loginMethods.navigateToDataHubLoginPage(this.links.DHSTG)
})

When('I enter some valid credentials', function () {
    loginMethods.enterCredentials(this.creds.validEmail, this.creds.validPwd)
})

Then('I can navigate to the DataHub viewer successfully by submitting', () => {
    loginMethods.submitValidCredentials()
})

And('I can upload a Ortho PPF', () => {

    datasetsMethods.expandDatasetsSection()
    datasetsMethods.expandPPFSection()
    datasetsMethods.uploadSinglePPF('Orthophoto')
    datasetsMethods.selectPPFName('233 Ortho')
    datasetsMethods.selectPPFDate()
    datasetsMethods.selectPPFCCRS('tp3')
    datasetsMethods.selectLaserScan()
    datasetsMethods.startUpload()
    datasetsMethods.pPPFuploadComplete()
})
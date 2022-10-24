import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps"
import LoginMethods from "../../../pages/login/loginMethods"
import DatasetsMethods from "../../../pages/viewer/datasets/datasetsMethods"

const datasetsMethods = new DatasetsMethods()
const loginMethods = new LoginMethods()

Given('I log in successfully and navigate to DataHub viewer', function () {
    loginMethods.navigateToDataHubLoginPage(this.links.DHSTG)
    loginMethods.enterCredentials(this.creds.validEmail,this.creds.validPwd)
    loginMethods.submitValidCredentials()
})
When('I focus on the Datasets section', () => {
    datasetsMethods.findDatasetsSection()
})

Then('I can see the Dataset icon, title and menu button', function () {
    datasetsMethods.assertDatasetsSection()
})

And('I can expand the existing DS list', () => {
    datasetsMethods.expandDatasetsSection()
})
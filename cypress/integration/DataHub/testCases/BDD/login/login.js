import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps"
import LoginMethods from "../../../pages/login/loginMethods"

const loginMethods = new LoginMethods()

Given('I am in the Login page', function () {
    loginMethods.navigateToDataHubLoginPage(this.links.DHSTG)
})

When('I enter some valid credentials', function() {
    loginMethods.enterCredentials(this.creds.validEmail,this.creds.validPwd)
})

Then('I can navigate to the DataHub viewer successfully by submitting', () => {
    loginMethods.submitValidCredentials()
})
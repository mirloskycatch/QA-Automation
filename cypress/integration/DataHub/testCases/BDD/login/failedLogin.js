import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps"
import LoginMethods from "../../../pages/login/loginMethods"

const loginMethods = new LoginMethods()

Given('I am in the Login page', function () {
    loginMethods.navigateToDataHubLoginPage(this.links.DHSTG)
})

When('I enter non-valid credentials', function() {
    loginMethods.enterCredentials(this.creds.wrongEmail,this.creds.wrongPwd)
})

Then('I cannot access to DataHub when submitting', () => {
    loginMethods.submitWrongCredentials()
})
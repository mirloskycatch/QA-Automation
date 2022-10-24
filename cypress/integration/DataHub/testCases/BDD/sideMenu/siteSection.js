import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps"
import LoginMethods from "../../../pages/login/loginMethods"
import SiteMethods from "../../../pages/viewer/site/siteMethods"

const siteMethods = new SiteMethods()
const loginMethods = new LoginMethods()

Given('I log in successfully and navigate to DataHub viewer', function () {
    loginMethods.navigateToDataHubLoginPage(this.links.DHSTG)
    loginMethods.enterCredentials(this.creds.validEmail,this.creds.validPwd)
    loginMethods.submitValidCredentials()
})

When('I focus on the Site section', () => {
    siteMethods.findSiteSection()
})

Then('I can see the Site title, Site icon and Site menu', () => {
    siteMethods.assertSiteSection()
})

And('I can validate the Site menu list contains the Site info, File Manager, User accounts and roles and Integrations options by expanding the list', () => {
    siteMethods.expandSiteSection()
    siteMethods.assertSiteMenuContent()
})
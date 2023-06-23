import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps"
import LoginMethods from "../../../pages/login/loginMethods"
import HambMenuMethods from "../../../pages/viewer/hambMenu/hambMenuMethods"

const hambMenuMethods = new HambMenuMethods()
const loginMethods = new LoginMethods()

Given('I log in successfully and navigate to DataHub viewer', function () {
    loginMethods.navigateToDataHubLoginPage(this.links.DHSTG)
    loginMethods.enterCredentials(this.creds.validEmail,this.creds.validPwd)
    loginMethods.submitValidCredentials()
})

When('I open the Hamburguer Menu by clicking on the icon', () => {
    hambMenuMethods.openOnHambMenu()
})

Then('The expected content is displayed', function() {
    hambMenuMethods.assertHambMenuDetails(this.creds.validEmail)
})

And('Close the Hamb Menu', () => {
    hambMenuMethods.closeHambMenu()
})
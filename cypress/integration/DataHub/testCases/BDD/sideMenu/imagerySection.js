import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps"
import LoginMethods from "../../../pages/login/loginMethods"
import ImageryMethods from "../../../pages/viewer/imagery/imageryMethods"


const loginMethods = new LoginMethods()
const imageryMethods = new ImageryMethods()

Given('I log in successfully and navigate to DataHub viewer', function () {
    loginMethods.navigateToDataHubLoginPage(this.links.DHSTG)
    loginMethods.enterCredentials(this.creds.validEmail,this.creds.validPwd)
    loginMethods.submitValidCredentials()
})

When('I am located on the Imagery section', () => {
    imageryMethods.findImagerySection()
})

Then('I can validate there is an icon and title for Imagery', () => {
    imageryMethods.assertImagerySection()
})

And('the Imagery options are displayed after expanding the section', () => {
    imageryMethods.expandImagery()
})

And('the options can be checked or unchecked depending on the Dataset type', () => {
    imageryMethods.AssertImageryOptions()
})
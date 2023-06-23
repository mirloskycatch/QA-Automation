// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

class CommonCommands{

    //This methods compares the text between two received Webelements
    compareTwoWebElementsText(webElement1,webElement2){
       
        let Text1
        webElement1.then(($we1) => {
            Text1 = $we1.text()
        })

        webElement2.then(($we2) => {
            expect(Text1).equal($we2.text())
        })
    }

    //Check if an element is hidden
    isHidden(el) {
        return (el.offsetParent === null)
    }

    //Replace the DS ID in the URL
    replaceDSID(DSID){
        cy.go('https://datahub-stage.skycatch.com/organization/tzAeNpK6sFCVf7Sqk4XTj9/site/n8zESsR2q65GJSna89ybff/dataset/' + DSID)
        cy.submit()
    }

    // Hide fetch/XHR requests
    hideRequests(){
        const app = window.top;
    if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style');
    style.innerHTML =
        '.command-name-request, .command-name-xhr { display: none }';
    style.setAttribute('data-hide-command-log-request', '');

    app.document.head.appendChild(style);
    }
    }

    //Avoid uncaught errors
    avoidUncaughtError(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    }

} export default CommonCommands

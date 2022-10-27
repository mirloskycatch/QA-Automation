import ImageryObjects from "./imageryObjects"

class ImageryMethods{

    imageryObjects = new ImageryObjects()

    expandImagery(){
        this.imageryObjects.getImageryComponent().should('be.visible')                            //Element visible
        this.imageryObjects.getImageryComponent().click()                                         //Click on element
        this.imageryObjects.getImageryContainerExpanded().should('be.visible')                    //List is expanded and visible
        cy.wait(1500)
    }

    assertImagerySection(){
        this.imageryObjects.getImageryComponent().should('be.visible')                            //Element visible
        this.imageryObjects.getImageryIcon().should('be.visible')                                 //Imagery icon is visible
        this.imageryObjects.getImageryText().should('have.text','Imagery (3)')                    //Text is Imagery (3)
    }

    findImagerySection(){
        this.imageryObjects.getImageryComponent().should('be.visible')                            //Element visible
    }

    // <<<<<<<<<<<<<<<< in progress >>>>>>>>>>>>>>>>>.
    AssertImageryOptions(){
        cy.wait(3000)
        this.imageryObjects.getImageryOptionText().each(($el, index, $list) => {
            const elementText = $el.find('div').text()
            cy.log(elementText)
            if(elementText.includes("Point Cloud") || elementText.includes("3D Mesh (Ortho+Terrain)") || elementText.includes("Raw Photos")){
                cy.log($el)
                if($el.find('svg').is(':visible')){
                    cy.log('eye is visible')
                    $el.find('svg').one('click')
                }else{
                    cy.log('eye not visible')
                }
            }else{
                cy.log(elementText + ' not visible')

            }
        })
    }
} 
export default ImageryMethods;
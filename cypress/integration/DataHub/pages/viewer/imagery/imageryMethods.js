import ImageryObjects from "./imageryObjects"

class ImageryMethods{

    imageryObjects = new ImageryObjects()

    expandImagery(){
        this.imageryObjects.getImageryComponent().should('be.visible')                            //Element visible
        this.imageryObjects.getImageryComponent().click()                                         //Click on element
    }
} 
export default ImageryMethods;
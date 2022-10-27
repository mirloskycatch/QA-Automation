class ImageryObjects{

    getImageryComponent(){
        return cy.get('[data-locator="imagery.item-header__header"]')
    }

    getImageryText(){
        return cy.get('[data-locator="imagery.item-header__text"]')
    }

    getImageryIcon(){
        return cy.get('.sc-bdVaJa.sc-EHOje.sc-kGXeez.chaYff > svg')
    }

    getImageryContainerExpanded(){
        return cy.get('.sc-ckVGcZ.cTVQAV')
    }
    
    getImageryAnyOption(){
        return cy.get('.sc-dxgOiQ.iOPlKd .sc-jKJlTe.jCHszd .sc-ckVGcZ.eLXPyn')
    }

    getImageryOptionText(){
        return cy.get('.sc-dxgOiQ.iOPlKd .sc-jKJlTe.jCHszd .sc-ckVGcZ.eLXPyn .sc-bdVaJa.sc-EHOje.sc-kGXeez.crTHem')
    }

    getOptionIconEnabled(){
        return cy.get('.sc-dxgOiQ.iOPlKd .sc-jKJlTe.jCHszd .sc-ckVGcZ.eLXPyn [data-name="ico group minimize"]')
    }

    getOptionCheckboxEnabled(){
        return cy.get('.sc-dxgOiQ.iOPlKd .sc-jKJlTe.jCHszd .sc-ckVGcZ.eLXPyn [data-name="action make visible"]')
    }

    getOptionCheckboxDisabled(){
        return cy.get('.sc-dxgOiQ.iOPlKd .sc-jKJlTe.jCHszd .sc-ckVGcZ.eLXPyn [data-name="action make invisible"]')
    }

    getOptionIconDisabled(){
        return cy.get('[data-name="List not available"]')
    }
}

export default ImageryObjects;
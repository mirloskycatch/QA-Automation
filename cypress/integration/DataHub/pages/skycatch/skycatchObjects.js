class SkycatchObjects{
    getHeaderlogo(){
        return  cy.get('.relative.mr-4.h-16.w-40.text-left')
    }
        
    getHeaderNavBar(){
        return  cy.get('.menu.list-reset')
    }
        
    getHeaderLogin(){
        return  cy.get('.menu.list-reset').contains('login')                       //Element exists and contains the expected text
    }
}
export default SkycatchObjects;
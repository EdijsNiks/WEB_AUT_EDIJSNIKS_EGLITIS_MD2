class KatalonPage{
    static get url(){
        return "/";
    }
    static get makeAppointment(){
        return cy.get("#btn-make-appointment");
    } 
    static visit (){
        cy.visit(this.url);
    }
    static get passwordField(){
        return cy.get("#txt-password");
    }   
    static get usernameField(){
        return cy.get("#txt-username");
    }
    static get clickLogin(){
        return cy.get("#btn-login");
    }


}
export default KatalonPage;
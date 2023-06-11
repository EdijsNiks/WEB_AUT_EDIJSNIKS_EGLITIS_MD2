class AppointmentPage{
    static get url(){
        return "/appointment";
    }

    static get setFacility(){
        return cy.get("#combo_facility");
    }
    static get checkReadmission(){
        return cy.get("#chk_hospotal_readmission");
    }
    static get setMedicaid(){
        return cy.get("#radio_program_medicaid");
    }
    static get setDate(){
        return cy.get("#txt_visit_date");
    }
    static get setComment(){
        return cy.get("#txt_comment");
    }
    static get clickBook(){
        return cy.get("#btn-book-appointment");
    }
    static get validateField(){
        return cy.get("#radio_program_medicaid");
    }
    static get clickBurgerIcon(){
        return cy.get("#menu-toggle");
    }
    static get checkSideBar(){
        return cy.get("#sidebar-wrapper");
    }
    static get clickHistory(){
        return cy.get(".sidebar-nav > :nth-child(4)");
    }


}
export default AppointmentPage;
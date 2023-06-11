class SummaryPage{
    static get url(){
        return "/appointment.php#summary";
    }

    static get validateFacility(){
        return cy.get("#facility");
    }
    static get validateReadmission(){
        return cy.get("#hospital_readmission");
    }
    static get validateProgram(){
        return cy.get("#program");
    }
    static get validateDate(){
        return cy.get("#visit_date");
    }
    static get validateComment(){
        return cy.get("#comment");
    }



}
export default SummaryPage;
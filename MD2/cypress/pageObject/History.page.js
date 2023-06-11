class HistoryPage{
    static get url(){
        return "/history.php#history";
    }

    static get validateHistory(){
        return cy.get("#history >  .container > :nth-child(1) > :nth-child(1) > :nth-child(3)");
    }

}
export default HistoryPage;
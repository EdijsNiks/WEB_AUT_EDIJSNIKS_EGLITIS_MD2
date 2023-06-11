import AppointmentPage from "../pageObject/Appointment.page";
import HistoryPage from "../pageObject/History.page";
import KatalonPage from "../pageObject/Katalon.page";
import SummaryPage from "../pageObject/Summary.page";

describe("Katalon spec", () => {
  context("Katalon scenarios", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("TextBox - Negative Case", () => {
      //Set Email field with incorrect value
     KatalonPage.makeAppointment.click();
     KatalonPage.usernameField.type("John Doe");
     KatalonPage.passwordField.type("ThisIsNotAPassword");
     KatalonPage.clickLogin.click();

     AppointmentPage.setFacility.select("Seoul CURA Healthcare Center")
     AppointmentPage.checkReadmission.click();
     AppointmentPage.setMedicaid.click();
     AppointmentPage.setDate.click()
     AppointmentPage.setComment.type("CURA Healthcare Service");
     AppointmentPage.clickBook.click();

     SummaryPage.validateFacility.should("have.text", "Seoul CURA Healthcare Center")
     SummaryPage.validateReadmission.should("have.text", "Yes")
     SummaryPage.validateProgram.should("have.text", "Medicare")
     //SummaryPage.validateDate.should("have.text", )
     SummaryPage.validateComment.should("have.text", "CURA Healthcare Center")
 
    })
    it.only("Appointment - History Case", () => {
      //Set Email field with incorrect value
     KatalonPage.makeAppointment.click();
     KatalonPage.usernameField.type("John Doe");
     KatalonPage.passwordField.type("ThisIsNotAPassword");
     KatalonPage.clickLogin.click();

     AppointmentPage.clickBurgerIcon.click();
     AppointmentPage.checkSideBar.should("have.class","active")
     AppointmentPage.clickHistory.click();

     HistoryPage.validateHistory.should("have.text", "No appointment.")
    })

  });
});
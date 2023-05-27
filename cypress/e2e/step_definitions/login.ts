import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from '@pages/login.page'

When("I open login page", () => {
  loginPage.visitLoginPage()
});

When("I sign in", () => {
    cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  });
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "@pages/home.page";

When("I visit home page", () => {
  cy.visit("/");
});

Then("I see page was successfully loaded", () => {
  homePage.validateHomePage();
});

When("I search for {string}", (value: string) => {
  cy.search(value);
});

Then("I verify search result {string}", (value: string) => {
  homePage.verifySearchResult(value);
});

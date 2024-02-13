import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import LayoutHeaderComponent from "../../componenets/LayoutHeaderComponent";
import SearchBarComponent from "../../componenets/SearchBarComponent";
import TodayTomorrowTrucksComponent from '../../componenets/TodayTomorrowTrucksComponent'

Given("trucks are filtered by {string}", function (string) {
    LayoutHeaderComponent.searchButton.click();
    SearchBarComponent.input.type(`${string}{enter}`);
    TodayTomorrowTrucksComponent.truckCardLicenses.should("contain.text", string);
});

When("I click clear search button", function () {
    TodayTomorrowTrucksComponent.clearSearchButton.click();
});

When("I type {string} into simple search input", function (string) {
    LayoutHeaderComponent.searchButton.click();
    SearchBarComponent.input.type(string)
});

Then("I see search results are cleared on TODAY | TOMORROW truck tab", function () {
    TodayTomorrowTrucksComponent.clearSearchButton.should("not.be.visible");
    //Implement more assertions
});

Then("I see list of results for license plates {string}", function (string) {
    SearchBarComponent.searchResults.then($els => {
        Cypress._.map(Cypress.$.makeArray($els), 'innerText').forEach(txt => {
            expect(txt.startsWith(string), `Result should start with ${string}`).to.be.true;
            expect(txt.endsWith(" - Truck license plate"), `Result should end with - Truck license plate`).to.be.true;
        })
    });
});

Then("I see list of results for provider {string}", function (string) {
    SearchBarComponent.searchResults.then($els => {
        Cypress._.map(Cypress.$.makeArray($els), 'innerText').forEach(txt => {
            expect(txt.startsWith(string), `Result should start with ${string}`).to.be.true;
            expect(txt.endsWith("- Provider description"), `Result should end with - Provider description`).to.be.true;
        })
    });
});

Then("I see list of results for order {string}", function (string) {
    SearchBarComponent.searchResults.then($els => {
        Cypress._.map(Cypress.$.makeArray($els), 'innerText').forEach(txt => {
            expect(txt.startsWith(string), `Result should start with ${string}`).to.be.true;
            expect(txt.endsWith("- Order ID"), `Result should end with - Provider description`).to.be.true;
        })
    });
});

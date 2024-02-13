import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { assertSimpleSearchResultList, 
    clickClearSearchButton, 
    fillSimpleSearchInput, 
    openSimpleSearch, 
    assertTodayTomorrowTrucksFiltered,
    assertClearSearchButtonNotExists } from "./functions";

Given("trucks are filtered by {string}", function (string) {
    openSimpleSearch();
    fillSimpleSearchInput(`${string}{enter}`);
    assertTodayTomorrowTrucksFiltered(string);
});

When("I click clear search button", function () {
    clickClearSearchButton();
});

When("I type {string} into simple search input", function (string) {
    openSimpleSearch();
    fillSimpleSearchInput(string);
});

Then("I see search results are cleared on TODAY | TOMORROW truck tab", function () {
    assertClearSearchButtonNotExists();
    //Implement more assertions
});

Then("I see list of results for license plates {string}", function (string) {
    assertSimpleSearchResultList(string, " - Truck license plate");
});

Then("I see list of results for provider {string}", function (string) {
    assertSimpleSearchResultList(string, "- Provider description");
});

Then("I see list of results for order {string}", function (string) {
    assertSimpleSearchResultList(string, "- Order ID");
});

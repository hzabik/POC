import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {
    assertSimpleSearchResultList,
    fillSimpleSearchInput,
    openSimpleSearch,
} from "../actions/search";
import { findTruckWithSingleOrder, findTruckWithSingleProvider } from "../actions/filters";


When("I type intercepted truck {string} into simple search input", function (property) {
    openSimpleSearch();
    fillSimpleSearchInput(`${this.interceptedTruck[property]}`);
});

Then("I see list of results for intercepted truck {string}", function (property) {
    assertSimpleSearchResultList(this.interceptedTruck, property);
});

When("I have intercepted truck with single provider", function () {
    this.interceptedTruck = findTruckWithSingleProvider(this.interceptedTrucks);
});

When("I have intercepted truck with single order", function () {
    this.interceptedTruck = findTruckWithSingleOrder(this.interceptedTrucks);
});

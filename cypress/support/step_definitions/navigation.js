import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { navigateToCurrentTab, navigateToTodayTomorrowTab } from "../actions/navigation";
import interceptors from "../actions/interceptors";

Given("I am on CURRENT tab with interceptor enabled for {string}", function (requestName) {
    interceptors[requestName].set();
    navigateToCurrentTab();
    interceptors[requestName].get().then(trucks=>{
        this.interceptedTrucks = trucks;
        this.interceptedTruck = trucks[0];
    })
});

Given("I am on TODAY | TOMORROW tab with interceptor enabled for {string}", function (requestName) {
    interceptors[requestName].set();
    navigateToTodayTomorrowTab();
    interceptors[requestName].get().then(trucks=>{
        this.interceptedTrucks = trucks;
        this.interceptedTruck = trucks[0];
    })
});
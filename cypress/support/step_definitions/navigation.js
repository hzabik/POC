import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { navigateToCurrentTab, navigateToTodayTomorrowTab,navigateToCreateTruck } from "../actions/navigation";


Given("I am on CURRENT tab", navigateToCurrentTab);

Given("I am on TODAY | TOMORROW tab", navigateToTodayTomorrowTab);

Given("I am on on create truck page", navigateToCreateTruck)
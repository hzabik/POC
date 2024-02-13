import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { navigateToCurrentTab, navigateToTodayTomorrowTab } from "./functions";


Given("I am on CURRENT tab", navigateToCurrentTab);

Given("I am on TODAY | TOMORROW tab", navigateToTodayTomorrowTab);

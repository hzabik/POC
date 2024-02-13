import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { setAmlbCookie, getItxToken, setItxCookie } from '../../utils/auth';

Given("I am on CURRENT tab", () => {
    authenticate();
    cy.visit('/web', {
        onBeforeLoad: setSkipModalCookie
    });
    cy.wait(10 * 1000);
});

Given("I am on TODAY | TOMORROW tab", function () {
    authenticate();
    cy.visit('/web/unloads/today-tomorrow', {
        onBeforeLoad: setSkipModalCookie
    });
    cy.wait(10 * 1000);
});

function authenticate() {
    setAmlbCookie();
    getItxToken(Cypress.env("authUser"),ypress.env("authPassword"))
        .then(res => {
            setItxCookie(res.tokenId);
        });
}
function setSkipModalCookie(window) {
    const skipModal = {
        "lastDisplayTime": 1703838511964,
        "returningVisitor": true,
        "displayCount": 6,
        "optedOut": false,
        "dontShowAgain": true,
        "added": false,
        "pageViews": 869
    }
    window.localStorage.setItem('rmumspa', JSON.stringify(skipModal));
}
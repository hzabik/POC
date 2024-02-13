export function navigateToCurrentTab() {
    navigate('current');
};
export function navigateToTodayTomorrowTab() {
    navigate('todayTomorrow');
}

const endpoints = {
    current: '/web',
    todayTomorrow: '/web/unloads/today-tomorrow'
}
function navigate(page) {
    authenticate();
    const url = endpoints[page];
    cy.visit(url, {
        onBeforeLoad: setSkipModalCookie
    });
    cy.wait(10 * 1000);
}

function authenticate() {
    setAmlbCookie();
    getItxToken(Cypress.env("authUser"), Cypress.env("authPassword"))
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


export function setAmlbCookie() {
    cy.setCookie("amlbcookie", "01", {
        domain: Cypress.env('openamdomain'),
        secure: true,
        httpOnly: true,
        sameSite: "no_restriction",
    });
}
export function setItxCookie(token) {
    cy.setCookie("itxtoken", token, {
        domain: Cypress.env('openamdomain'),
        secure: true,
        httpOnly: true,
        sameSite: "no_restriction",
    });
}

export function getItxToken(username, password) {
    return cy.request({
        method: "POST",
        url: Cypress.env('openamurl'),
        headers: {
            "X-OpenAM-Username": username,
            "X-OpenAM-Password": password,
            "Content-Type": "application/json",
            "Accept-API-Version": "resource=2.0, protocol=1.0",
        },
    }).then(response => {
        expect(response.status).to.eq(200);
        return { username, tokenId: response.body.tokenId };
    });
}
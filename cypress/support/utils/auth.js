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
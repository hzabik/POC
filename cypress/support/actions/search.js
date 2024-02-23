
export function openSimpleSearch() {
    cy.get('[data-testid="ENABLE_SEARCHBAR_BTN_TEST_ID"]').click();
}
export function fillSimpleSearchInput(text) {
    cy.get('[data-testid="searchbar-modal"] input').type(text);
}

export function assertSimpleSearchResultList(truck, property) {
    const postfixes = {
        license:  " - Truck license plate",
        provider: "- Provider description",
        order: "- Order ID"
    };

    const text = truck[property];
    const postfix = postfixes[property];

    cy.get('[data-testid="dropdown-list"] .searchbar-dropdown__item')
        .each($searchResult => {
            const searchResultText = $searchResult.text();
            expect(searchResultText.startsWith(text)).to.be.true;
            expect(searchResultText.endsWith(postfix)).to.be.true;
        })
}
export function clickClearSearchButton() {
    cy.get('[data-testid="remove-filters-text"]').click();
};
export function assertClearSearchButtonNotExists() {
    cy.get('[data-testid="remove-filters-text"]').should("not.exist");
}
export function openSimpleSearch() {
    cy.get('[data-testid="ENABLE_SEARCHBAR_BTN_TEST_ID"]').click();
}
export function fillSimpleSearchInput(text) {
    cy.get('[data-testid="searchbar-modal"] input').type(text);
}

export function assertTodayTomorrowTrucksFiltered(text) {
    cy.get('[data-testid="scheduled-truck-card-test-id"]')
        .find('[data-testid="scheduled-card-license"]')
        .should("contain.text", text);
}

export function assertSimpleSearchResultList(text, postfix) {
    cy.get('[data-testid="dropdown-list"] .searchbar-dropdown__item')
        .then($els => {
            Cypress._.map(Cypress.$.makeArray($els), 'innerText').forEach(txt => {
                expect(txt.startsWith(text), `Result should start with ${text}`).to.be.true;
                expect(txt.endsWith(postfix), `Result should end with ${postfix}`).to.be.true;
            })
        });
}

class LayoutHeaderComponent{
    get addButton() {
        return cy.get('[data-testid="ENABLE_ADD_BTN_TEST_ID"]');
    }

    get newTruckButton() {
        return cy.get('[data-testid="ADD_TRUCK_TEST_ID"]')
    }

    get searchButton(){
        return cy.get('[data-testid="ENABLE_SEARCHBAR_BTN_TEST_ID"]');
    }
}
export default new LayoutHeaderComponent();
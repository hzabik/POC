class SearchBarComponent{
    get input(){
        return cy.get('[data-testid="searchbar-modal"] input');
    }

    get searchResults(){
        return cy.get('[data-testid="dropdown-list"] .searchbar-dropdown__item');
    }
}

export default new SearchBarComponent();
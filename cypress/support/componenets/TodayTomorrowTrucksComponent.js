class TodayTomorrowTrucksComponent{
    get truckCards(){
        return cy.get('[data-testid="scheduled-truck-card-test-id"]');
    }

    get truckCardLicenses(){
        return this.truckCards.find('[data-testid="scheduled-card-license"]');
    }

    get clearSearchButton(){
       return  cy.get('[data-testid="remove-filters-text"]');
    }
}

class ScheduledTruckCard{
    constructor(root){
        this.root = root;
    }
    get licenseText(){
        return this.root.find('[data-testid="scheduled-card-license"]').invoke('innerText');
    }
}

export default new TodayTomorrowTrucksComponent();
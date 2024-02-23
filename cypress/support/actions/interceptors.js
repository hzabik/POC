
const requestHooks = {
    scheduled: '**/trucks?period=TODAY&status=SCHEDULED**',
    ongoing: '**/ongoing-trucks**',
};

const interceptors = {
    ongoingTrucks: {
        set: () => { cy.intercept(requestHooks.ongoing).as("truckList"); },
        get: () => { return cy.get('@truckList.1').its("response.body.onHoldTrucks"); }
    },
    scheduledTrucks: {
        set: () => { cy.intercept(requestHooks.scheduled).as("scheduledTrucks"); },
        get: () => { return cy.get('@scheduledTrucks').its("response.body"); }
    },
}

export default interceptors;
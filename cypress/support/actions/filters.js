export function findTruckWithSingleProvider(trucks){
    if(!Array.isArray(trucks)) throw new Error("You need to provide array!");

    const truck =  trucks.find(truck => truck.searchTags.providerDescriptions.length == 1);
    truck.provider = truck.searchTags.providerDescriptions[0].split(" ")[0];
    return truck;
}

export function findTruckWithSingleOrder(trucks){
    if(!Array.isArray(trucks)) throw new Error("You need to provide array!");
    
    const truck =  trucks.find(truck => truck.searchTags.orderIds.length == 1);
    truck.order = truck.searchTags.orderIds[0].match(/(\d+)\w\s/)[0].trim();
    return truck;
}
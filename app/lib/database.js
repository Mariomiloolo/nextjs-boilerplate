let contractors = [
{id: 1, name: “Mario (TEST)”, phone: “07308141302”, email: “mario.grimsby@gmail.com”, city: “Grimsby”, specialty: “handyman”, availability: “available”}
]
let workOrders = []
export function getContractors() {
return contractors
}
export function addContractor(contractor) {
contractors.push({…contractor, id: contractors.length + 1})
return contractor
}
export function getWorkOrders() {
return workOrders
}
export function addWorkOrder(order) {
workOrders.push({…order, id: workOrders.length + 1})
return order
}
export async function sendSMSToContractor(contractor, workOrder) {
const message = New work order: ${workOrder.summary} at ${workOrder.address}. Contact tenant: ${workOrder.tenant.name} ${workOrder.tenant.phone}. Reply YES to accept.
console.log(SMS to ${contractor.phone}: ${message})
// Tutaj będzie prawdziwe SMS API (Twilio)
return {
success: true,
message: ‘SMS sent successfully’,
to: contractor.phone
}
}
export async function sendSMSToTenant(tenant, contractor) {
const message = PropertyFlow: Contractor ${contractor.name} (${contractor.phone}) has been assigned to your work order. They will contact you shortly.
console.log(SMS to ${tenant.phone}: ${message})
return {
success: true,
message: ‘SMS sent successfully’,
to: tenant.phone
}
}
export async function sendEmailToManager(manager, workOrder, contractor) {
const subject = Work Order ${workOrder.reference} - Contractor Assigned
const body = Contractor ${contractor.name} has been assigned to work order ${workOrder.reference}. Contact: ${contractor.phone}
console.log(Email to ${manager.email}: ${subject})
return {
success: true,
message: ‘Email sent successfully’
}
}
export async function checkGmailForOrders() {
console.log(‘Checking Gmail for new work orders…’)
return []
}
export async function parseWorkOrderEmail(emailContent) {
const lines = emailContent.split(’\n’)
const workOrder = {
reference: extractValue(lines, ‘Reference:’),
summary: extractValue(lines, ‘Summary:’),
address: extractValue(lines, ‘Property:’),
tenant: {
name: extractValue(lines, ‘Tenant’),
phone: extractValue(lines, ‘m:’),
email: extractValue(lines, ‘e:’)
},
manager: {
email: extractValue(lines, ‘Property Manager’)
}
}
return workOrder
}
function extractValue(lines, keyword) {
const line = lines.find(l => l.includes(keyword))
return line ? line.split(keyword)[1]?.trim() : ‘’
}
export function analyzeWorkType(summary) {
const workTypes = {
‘blocked sink’: ‘plumber’,
‘leaking tap’: ‘plumber’,
‘electrical’: ‘electrician’,
‘door repair’: ‘handyman’,
‘painting’: ‘painter’
}
const desc = summary.toLowerCase()
for (const [key, value] of Object.entries(workTypes)) {
if (desc.includes(key)) return value
}
return ‘handyman’
}
export async function GET() {
return Response.json([
{
id: 1,
name: "Mario (TEST)",
phone: "07308141302",
email: "mario.grimsby@gmail.com",
city: "Grimsby",
specialty: "handyman",
availability: "available"
}
])
}
export async function POST(request) {
const data = await request.json()
console.log(‘New contractor:’, data)
return Response.json({success: true, message: ‘Contractor added’})
}
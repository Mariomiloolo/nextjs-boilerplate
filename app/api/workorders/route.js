export async function GET() {
return Response.json([])
}
export async function POST(request) {
const data = await request.json()
console.log(‘New work order:’, data)
return Response.json({success: true, message: ‘Work order created’})
}
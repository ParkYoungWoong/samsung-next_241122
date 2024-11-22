// /api/test

export async function GET() {
  return Response.json('나는 GET 요청을 받았어!')
}
export async function POST(request: Request) {
  const data = await request.json()
  console.log()
  return Response.json({
    message: '나는 POST 요청을 받았어!',
    data
  })
}
export async function PUT() {
  return Response.json('나는 PUT 요청을 받았어!')
}
export async function PATCH() {
  return Response.json('나는 PATCH 요청을 받았어!')
}
export async function DELETE() {
  return Response.json('나는 DELETE 요청을 받았어!')
}

import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(request: NextRequest) {
  // const secret = request.nextUrl.searchParams.get('secret')

  // short-circuit if the secret is invalid
  /* if (secret !== process.env.REVALIDATE_SECRET) {
    return new NextResponse(JSON.stringify({ message: 'Invalid secret' }), {
      status: 401,
      statusText: 'Unauthorized',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } */

  // se revalida la ruta especificada en el query param `path` o la raiz del sitio
  const path = request.nextUrl.searchParams.get('path') || '/'

  revalidatePath(path)

  return NextResponse.json({ revalidated: true, now: Date.now() })
}

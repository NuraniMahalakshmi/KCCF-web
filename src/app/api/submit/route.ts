import { NextResponse } from 'next/server'

const GAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwnIcWQ0qBR2iSd52sWcWQSGsPAHyPiGq_Y2YUjoGJtBS0XclmXaoUAtxku17SW1GFLvQ/exec'

export async function POST(request: Request) {
  try {
    const referer = request.headers.get('referer') || ''
    const url = new URL(referer || 'https://thekccf.org')
    const pagePath = url.pathname || '/'
    const isDebug = url.searchParams.get('debug') === '1'

    const contentType = request.headers.get('content-type') || ''

    let payload: Record<string, unknown> = {}

    if (contentType.includes('application/json')) {
      const json = await request.json()
      payload = { ...json }
    } else {
      const formData = await request.formData()
      for (const [key, value] of formData.entries()) {
        payload[key] = typeof value === 'string' ? value : (value as File).name
      }
    }

    // Ensure we always include pagePath and formType
    if (!('pagePath' in payload)) {
      payload.pagePath = pagePath
    }
    if (!('formType' in payload)) {
      payload.formType = 'unknown'
    }

    const forward = await fetch(GAS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // Avoid Next.js edge caching issues
      cache: 'no-store'
    })

    const responseText = await forward.text()
    let ok = forward.ok
    try {
      const parsed = JSON.parse(responseText)
      if (parsed && parsed.status) {
        ok = ok && parsed.status === 'success'
      }
    } catch (_) {
      // non-JSON body, keep ok as status-based
    }

    if (!ok) {
      console.error('GAS submit failed', { status: forward.status, body: responseText, payload })
    }

    if (isDebug) {
      return new Response(responseText || JSON.stringify({ ok }), {
        status: ok ? 200 : 502,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Determine base URL by environment
    const envBase = process.env.NEXT_PUBLIC_SITE_URL
      || (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : '')
      || 'http://localhost:3000'

    // Prefer provided pagePath in payload, then referer path, else root
    const targetPath = (typeof payload.pagePath === 'string' && payload.pagePath) || pagePath || '/'

    // Build redirect URL
    const redirectUrl = referer ? new URL(referer) : new URL(targetPath, envBase)
    redirectUrl.searchParams.set('submitted', ok ? '1' : '0')
    return NextResponse.redirect(redirectUrl.toString(), { status: 303 })
  } catch (error) {
    const referer = request.headers.get('referer') || ''
    const envBase = process.env.NEXT_PUBLIC_SITE_URL
      || (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : '')
      || 'http://localhost:3000'
    const redirectUrl = referer ? new URL(referer) : new URL('/', envBase)
    redirectUrl.searchParams.set('submitted', '0')
    return NextResponse.redirect(redirectUrl.toString(), { status: 303 })
  }
}



import { NextResponse } from 'next/server'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
  const { email, website } = await req.json().catch(() => ({}))

  // Honeypot spam field
  if (typeof website === 'string' && website.length > 0) {
    return NextResponse.json({ ok: true }) // pretend success
  }

  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 })
  }

  const apiKey = process.env.EMAILOCTOPUS_API_KEY
  const listId = process.env.EMAILOCTOPUS_LIST_ID

  if (!apiKey || !listId) {
    return NextResponse.json({ error: 'Server error. Please try again later' }, { status: 500 })
  }

  const eoRes = await fetch(`https://emailoctopus.com/api/1.6/lists/${listId}/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: apiKey,
      email_address: email,
    }),
  })

  const data = await eoRes.json().catch(() => ({}))

  if (!eoRes.ok) {
    return NextResponse.json(
      { error: data.error.message ?? 'Subscription failed.' },
      { status: 400 }
    )
  }

  return NextResponse.json({ ok: true, status: data?.status })
}

'use client'

import { useState } from 'react'
import { Form, Input, Button } from '@heroui/react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    setMsg('')

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        website: '',
      }),
    })

    const data = await res.json().catch(() => ({}))

    if (!res.ok) {
      setState('error')
      setMsg(data?.error ?? 'Something went wrong. Please try again')
      return
    }

    setState('success')
    setMsg('Thanks for joining! Please check your inbox to confirm your subscription.')
    setEmail('')
  }

  return (
    <div className="gap-0 items-center justify-center flex flex-col">
      <input tabIndex={-1} autoComplete="off" className="hidden" name="website" value="" readOnly />

      <Form className="flex flex-row items-start gap-2" onSubmit={onSubmit}>
        <Input
          isRequired
          name="email"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          classNames={{
            base: 'flex-1 min-w-0',
            mainWrapper: 'flex-1 min-w-0',
            inputWrapper: 'w-full',
          }}
        />

        <Button type="submit" variant="ghost" disabled={state === 'loading'} color="secondary">
          {state === 'loading' ? 'Joining…' : 'Join our Newsletter'}
        </Button>
      </Form>
      {state === 'success' && msg && (
        <p className="text-sm" style={{ color: 'var(--secondary)' }}>
          {msg}
        </p>
      )}
      {state === 'error' && msg && <p className="text-sm text-danger-600">{msg}</p>}
    </div>
  )
}

'use client'

import React from 'react'
import { Form, Textarea, Input } from '@heroui/react'

type EmailFormProps = {
  setLoading: (load: boolean) => void
}

export default function SendEmailForm({ setLoading }: EmailFormProps) {
  const [value, setValue] = React.useState('')
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setLoading(true)
    setError(null)
    setSuccess(false)

    const data = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Failed to send email')
      }

      setSuccess(true)
      form.reset()
      setValue('')
    } catch (err) {
      setError(`Failed to send message. Error: ${err}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form id="send-email-form" className="w-full max-w-xs" onSubmit={onSubmit}>
      <Input
        isRequired
        errorMessage="Please enter a valid email"
        name="email"
        placeholder="Enter your email"
        type="email"
        classNames={{
          input: 'text-primary dark:text-primary',
        }}
      />
      <Textarea
        isRequired
        isClearable
        name="message"
        className="max-w-xs"
        value={value}
        placeholder="Enter a message"
        onValueChange={setValue}
        validate={(value) => {
          if (value.length === 0) return null
          if (value.length < 3) {
            return 'Message must be atleast 3 characters'
          }
        }}
        classNames={{
          input: 'text-primary caret-black dark:caret-black',
        }}
      />
      {success && <p className="text-sm text-green-600">Email sent!</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </Form>
  )
}

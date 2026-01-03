import React from 'react'

interface EmailTemplateProps {
  senderEmail: string
  message: string
}

export function EmailTemplate({ senderEmail, message }: EmailTemplateProps) {
  return (
    <div>
      <h4>New message from {senderEmail}:</h4>
      <blockquote>
        <p>{message}</p>
      </blockquote>
    </div>
  )
}

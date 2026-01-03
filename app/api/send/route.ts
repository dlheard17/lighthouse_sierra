import { EmailTemplate } from '@/components/email/EmailTemplate'
import { Resend } from 'resend'

console.log(`Got resend api key: ${process.env.RESEND_API_KEY}`)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json()

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['derekhawthorne95@gmail.com'],
      subject: 'LightHouse Sierra Contact Form Message',
      react: EmailTemplate({ senderEmail: email, message }),
    })

    if (error) {
      console.log('0resend error:', error)
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    console.log('1resend error:', error)
    return Response.json({ error }, { status: 500 })
  }
}

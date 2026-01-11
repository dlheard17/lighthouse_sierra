'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ContactButton from '@/components/email/ContactButton'
import Footer from '@/components/Footer'
import NewsletterSignup from '@/components/newsletter/NewsletterSignup'

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center font-avenir-medium">
        <motion.h1
          className="flex items-center gap-2 text-5xl font-semibold leading-10 tracking-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ color: 'var(--text-dark' }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: 'easeOut',
          }}
        >
          <Image src="/logo-v0.svg" alt="Logo" width={600} height={0} priority />
        </motion.h1>
        <motion.h2
          className="flex items-center text-2xl leading-10 tracking-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: 1.0,
            ease: 'easeIn',
          }}
        >
          <span style={{ color: 'var(--app-primary' }}> Coming Soon! </span>
        </motion.h2>
        {/* <motion.h2
        className="flex items-center text-2xl tracking-tight text-black dark:text-zinc-50"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 1.6,
          ease: 'easeIn',
        }}
      >
        <DonateButton />
      </motion.h2> */}
        <motion.h2
          className="flex items-center text-2xl tracking-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.3,
          }}
        >
          <div className="flex flex-col items-center gap-8 tracking-50">
            <ContactButton />
            <NewsletterSignup />
          </div>
        </motion.h2>
      </div>
      <Footer />
    </>
  )
}

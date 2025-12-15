'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <motion.h1
        className="flex items-center gap-2 text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: 'easeOut',
        }}
      >
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Logo"
          width={100}
          height={40}
          priority
        />
        <span>LightHouse Sierra</span>
      </motion.h1>
      <motion.h2
        className="flex items-center text-2xl tracking-tight text-black dark:text-zinc-50"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          ease: 'easeOut',
        }}
      >
        Coming Soon
      </motion.h2>
    </div>
  )
}

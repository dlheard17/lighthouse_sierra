'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Copyright © {year} Lighthouse Sierra - All Rights Reserved.
      </div>
    </footer>
  )
}

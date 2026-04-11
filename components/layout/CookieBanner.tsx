'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie_accepted')) {
      setShow(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_accepted', '1')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-surface border border-white/10 rounded-xl p-4 shadow-2xl">
      <p className="text-white/80 text-xs mb-3 leading-relaxed">
        Używamy plików cookie, aby poprawić Twoje doświadczenie. Korzystając z naszej strony, wyrażasz zgodę na ich użycie.{' '}
        <Link href="#" className="text-gold hover:underline">Polityka cookie</Link>
      </p>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 bg-gold text-black text-xs font-bold py-2 rounded-lg hover:bg-gold/90 transition-colors"
        >
          Akceptuj
        </button>
        <button
          onClick={() => setShow(false)}
          className="flex-1 border border-white/20 text-white/60 text-xs py-2 rounded-lg hover:bg-white/5 transition-colors"
        >
          Odrzuć
        </button>
      </div>
    </div>
  )
}

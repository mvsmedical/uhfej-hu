'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Főoldal' },
  { href: '/ultrahang-fej-javitas', label: 'Javítás' },
  { href: '/hibak', label: 'Hibalehetőségek' },
  { href: '/kompatibilis-ultrahang-fejek', label: 'Kompatibilis fejek' },
  { href: '/kapcsolat', label: 'Kapcsolat' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-navbar' : 'bg-primary'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
              scrolled ? 'bg-primary' : 'bg-white/20'
            }`}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className={`font-bold text-lg tracking-tight transition-colors ${
              scrolled ? 'text-primary' : 'text-white'
            }`}>
              uhfej<span className="text-accent">.</span>hu
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  scrolled 
                    ? 'text-text-secondary hover:text-primary hover:bg-surface-muted'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/ultrahang-fej-javitas#inquiry"
              className="ml-3 bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm"
            >
              Ajánlat kérése
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-primary hover:bg-surface-muted' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menü megnyitása"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 bg-white/95 backdrop-blur-md rounded-b-2xl mt-1 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-text-secondary hover:text-primary hover:bg-surface-muted rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/ultrahang-fej-javitas#inquiry"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-2 bg-accent hover:bg-accent-dark text-white px-4 py-2.5 rounded-lg text-sm font-semibold text-center transition-all"
            >
              Ajánlat kérése
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'

const placeholderImages = [
  { src: '/images/probe-damage-1.jpg', alt: 'Sérült ultrahang fej' },
  { src: '/images/probe-cable-damage.jpg', alt: 'Kábelhiba ultrahang fejen' },
  { src: '/images/image-artifact-1.jpg', alt: 'Képminőségi artefaktum' },
  { src: '/images/connector-damage.jpg', alt: 'Csatlakozó sérülés' },
  { src: '/images/probe-lens-damage.jpg', alt: 'Lencse sérülés' },
  { src: '/images/probe-damage-2.jpg', alt: 'Zajos ultrahang kép' },
  { src: '/images/probe-damage-3.jpg', alt: 'Kieső elemek a képen' },
]

export default function ImageScroller() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        return next >= placeholderImages.length ? 0 : next
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.children[0]?.clientWidth || 300
      scrollRef.current.scrollTo({
        left: currentIndex * (scrollAmount + 24), // 24 a gap mérete
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  return (
    <div
      className="relative overflow-hidden bg-surface-alt py-8 border-b border-gray-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden"
        >
          {placeholderImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 h-48 relative group cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#d6e8f7] to-[#e8f0f8] rounded-xl border border-gray-200 flex items-center justify-center overflow-hidden shadow-card group-hover:shadow-card-hover transition-all">
                {/* Placeholder, amíg nincs valódi kép */}
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-xs text-text-muted font-medium">{image.alt}</p>
                </div>
              </div>
              
              {/* Sorszám indikátor */}
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-medium text-text-muted shadow-sm">
                {index + 1}/{placeholderImages.length}
              </div>
            </div>
          ))}
        </div>

        {/* Vizuális indikátorok */}
        <div className="flex justify-center gap-2 mt-4">
          {placeholderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-accent w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ugrás a(z) ${index + 1}. képhez`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

export default function ExpandableFAQ({ items, initialCount = 12 }: { items: FAQItem[], initialCount?: number }) {
  const [showAll, setShowAll] = useState(false)
  const visibleItems = showAll ? items : items.slice(0, initialCount)

  return (
    <div>
      <div className="space-y-3">
        {visibleItems.map((faq, index) => (
          <details key={index} className="card p-5 group">
            <summary className="font-semibold text-text-primary cursor-pointer list-none flex justify-between items-center">
              {faq.q}
              <svg className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed">{faq.a}</p>
          </details>
        ))}
      </div>
      
      {items.length > initialCount && !showAll && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
          >
            Összes kérdés megjelenítése ({items.length} db)
          </button>
        </div>
      )}
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    institution: '',
    contactName: '',
    email: '',
    phone: '',
    manufacturer: '',
    deviceType: '',
    probeType: '',
    description: '',
    urgent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [files, setFiles] = useState<FileList | null>(null)
  const [captchaToken, setCaptchaToken] = useState<string>('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!captchaToken) {
      setError('Kérjük, igazolja, hogy nem robot.')
      return
    }

    setSending(true)

    const submitData = new FormData()
    
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, String(value))
    })
    
    submitData.append('captchaToken', captchaToken)

    if (files) {
      Array.from(files).forEach((file) => {
        submitData.append('attachment', file)
      })
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: submitData,
    })

    if (response.ok) {
      setSubmitted(true)
    } else {
      const data = await response.json()
      setError(data.error || 'Hiba történt a beküldés során.')
    }
    setSending(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value })
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Köszönjük megkeresését!</h3>
        <p className="text-text-muted">A beküldött adatokat és képeket email-ben megkaptuk. Felvesszük Önnel a kapcsolatot.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="institution" className="block text-sm font-medium text-text-primary mb-1">Intézmény neve *</label>
          <input type="text" id="institution" name="institution" required value={formData.institution} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary outline-none transition-all text-sm" />
        </div>
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-text-primary mb-1">Kapcsolattartó neve *</label>
          <input type="text" id="contactName" name="contactName" required value={formData.contactName} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary outline-none transition-all text-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">Email *</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary outline-none transition-all text-sm" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1">Telefonszám</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary outline-none transition-all text-sm" />
        </div>
        <div>
          <label htmlFor="manufacturer" className="block text-sm font-medium text-text-primary mb-1">Gyártó *</label>
          <select id="manufacturer" name="manufacturer" required value={formData.manufacturer} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary outline-none transition-all text-sm bg-white">
            <option value="">Válasszon gyártót</option>
            <option>GE HealthCare</option><option>Philips</option><option>Siemens Healthineers</option>
            <option>Canon / Toshiba</option><option>Mindray</option><option>Esaote</option>
            <option>Fujifilm Sonosite</option><option>Samsung Medison</option><option>Egyéb</option>
          </select>
        </div>
        <div>
          <label htmlFor="deviceType" className="block text-sm font-medium text-text-primary mb-1">Készülék típusa</label>
          <input type="text" id="deviceType" name="deviceType" value={formData.deviceType} onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary outline-none transition-all text-sm" />
        </div>
      </div>

      <div>
        <label htmlFor="probeType" className="block text-sm font-medium text-text-primary mb-1">Ultrahang fej típusa *</label>
        <input type="text" id="probeType" name="probeType" required value={formData.probeType} onChange={handleChange}
          placeholder="pl. GE RAB6-D, Philips C5-1"
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary outline-none transition-all text-sm" />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-text-primary mb-1">Hiba leírása *</label>
        <textarea id="description" name="description" required rows={4} value={formData.description} onChange={handleChange}
          placeholder="Írja le a tapasztalt hibát, tüneteket..."
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-light focus:border-primary outline-none transition-all text-sm resize-y" />
      </div>

      {/* Több kép feltöltése */}
      <div>
        <label htmlFor="files" className="block text-sm font-medium text-text-primary mb-1">
          Képek csatolása
        </label>
        <input
          type="file"
          id="files"
          name="attachment"
          multiple
          accept="image/*"
          onChange={(e) => setFiles(e.target.files)}
          className="w-full text-sm text-text-secondary
            file:mr-4 file:py-2.5 file:px-5
            file:rounded-lg file:border-0
            file:text-sm file:font-medium
            file:bg-surface-alt file:text-text-primary
            hover:file:bg-surface-muted
            file:cursor-pointer file:transition-colors"
        />
        {files && files.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {Array.from(files).map((file, i) => (
              <span key={i} className="text-xs bg-surface-alt text-text-secondary px-2.5 py-1 rounded-full">
                📎 {file.name} ({(file.size / 1024).toFixed(0)} KB)
              </span>
            ))}
          </div>
        )}
        <p className="text-xs text-text-muted mt-2">
          Több kép is csatolható. Csatolhat fotót a hibás fejről, kábelről, csatlakozóról, képernyőn látható hibáról.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <input type="checkbox" id="urgent" name="urgent" checked={formData.urgent} onChange={handleChange}
          className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent" />
        <label htmlFor="urgent" className="text-sm text-text-secondary">
          Sürgősségi javítást kérek
        </label>
      </div>

      {/* Cloudflare Turnstile Captcha */}
      <div className="flex justify-center">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'}
          onSuccess={(token) => setCaptchaToken(token)}
          onError={() => setError('Captcha hiba. Kérjük, frissítse az oldalt.')}
          onExpire={() => setCaptchaToken('')}
          options={{ theme: 'light', language: 'hu' }}
        />
      </div>

      <button type="submit" disabled={sending}
        className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg text-base disabled:opacity-50">
        {sending ? 'Beküldés folyamatban...' : 'Beküldés'}
      </button>

      <p className="text-xs text-text-muted text-center">
        A beküldéssel elfogadja az <a href="/adatkezeles" className="text-accent hover:underline">Adatkezelési tájékoztatót</a>.
      </p>
    </form>
  )
}

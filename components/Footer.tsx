import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 mt-auto relative">
      <div className="h-1 bg-gradient-to-r from-accent via-primary-light to-primary-light/50" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg">uhfej.hu</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Ultrahang fej javítás, bevizsgálás és kompatibilis ultrahang fejek szakmai szervize egészségügyi intézmények számára.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigáció</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Főoldal</Link></li>
              <li><Link href="/ultrahang-fej-javitas" className="hover:text-white transition-colors">Ultrahang fej javítás</Link></li>
              <li><Link href="/hibak" className="hover:text-white transition-colors">Hibák</Link></li>
              <li><Link href="/kompatibilis-ultrahang-fejek" className="hover:text-white transition-colors">Kompatibilis fejek</Link></li>
              <li><Link href="/kapcsolat" className="hover:text-white transition-colors">Kapcsolat</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Cégadatok</h3>
            <p className="text-sm">MVS Medical Plusz Kft.</p>
            <p className="text-sm mt-1">1204 Budapest,<br />Ady Endre utca 90-92.</p>
            <p className="text-sm mt-2">
              <a href="mailto:info@uhfej.hu" className="hover:text-white transition-colors">info@uhfej.hu</a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-400">
            © {new Date().getFullYear()} MVS Medical Plusz Kft. Minden jog fenntartva.
          </div>
          <div className="flex gap-4 text-xs text-gray-400">
            <Link href="/aszf" className="hover:text-white transition-colors">ÁSZF</Link>
            <Link href="/adatkezeles" className="hover:text-white transition-colors">Adatkezelés</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

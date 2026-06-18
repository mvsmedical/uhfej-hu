import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Általános Szerződési Feltételek',
  description: 'Az uhfej.hu és az MVS Medical Plusz Kft. általános szerződési feltételei.',
}

export default function ASZFPage() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Általános Szerződési Feltételek</h1>
          <p className="text-xl text-white/80">Az uhfej.hu szolgáltatásainak igénybevételi feltételei</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="card p-8 space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Bevezetés</h2>
              <p>Jelen Általános Szerződési Feltételek az MVS Medical Plusz Kft. (székhely: 1204 Budapest, Ady Endre utca 90-92., cégjegyzékszám: 01-09-456275, adószám: 33047067-2-43) által üzemeltetett uhfej.hu weboldalon keresztül nyújtott szolgáltatások feltételeit tartalmazza.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Szolgáltatások köre</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Ultrahang fejek diagnosztikai bevizsgálása</li>
                <li>Ultrahang fejek javítása, szervize</li>
                <li>Kompatibilis és utángyártott ultrahang fejek értékesítése</li>
                <li>Szakmai tanácsadás</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Ajánlatkérés és szerződéskötés</h2>
              <p>A weboldalon benyújtott ajánlatkérés nem minősül szerződéskötésnek. Az ajánlatkérés alapján egyedi árajánlatot készítünk, amelynek elfogadása esetén jön létre a szerződéses jogviszony.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Kapcsolat</h2>
              <p>Kérdéseiket az <a href="mailto:info@uhfej.hu" className="text-accent hover:underline">info@uhfej.hu</a> email címen fogadjuk.</p>
            </div>
            <p className="text-sm text-text-muted pt-4 border-t border-gray-100">Utolsó módosítás: 2024. január 1.</p>
          </div>
        </div>
      </section>
    </>
  )
}

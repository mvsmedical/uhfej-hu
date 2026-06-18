import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kapcsolat | uhfej.hu',
  description: 'MVS Medical Plusz Kft. – ultrahang fej javítás, bevizsgálás, kompatibilis fejek. info@uhfej.hu | 1204 Budapest, Ady Endre utca 90-92.',
}

export default function ContactPage() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kapcsolat</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Vegye fel velünk a kapcsolatot – kérését hamarosan intézzük.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-text-primary mb-8">Cégadatok</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-primary mb-1">MVS Medical Plusz Kft.</h3>
              <p className="text-text-muted text-sm">uhfej.hu – Ultrahang fejek javítása és kompatibilis (utángyártott) eszközök elérhetősége garanciával.</p>
            </div>
            <div className="card p-6">
              <h4 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1">Email</h4>
              <a href="mailto:info@uhfej.hu" className="text-accent hover:text-accent-dark font-medium transition-colors">info@uhfej.hu</a>
            </div>
            <div className="card p-6">
              <h4 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1">Cím</h4>
              <p className="text-text-primary">1204 Budapest, Ady Endre utca 90-92.</p>
            </div>
            
            <div className="card p-6">
              <h4 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1">Cégjegyzékszám</h4>
              <p className="text-text-primary">01-09-456275</p>
            </div>
            <div className="card p-6">
              <h4 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-1">Adószám</h4>
              <p className="text-text-primary">33047067-2-43</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kompatibilis és utángyártott ultrahang fejek | uhfej.hu',
  description: 'Kompatibilis ultrahang fejek vezető gyártók rendszereihez: GE, Philips, Siemens, Mindray, Canon, Esaote, Sonosite. Kompatibilitás ellenőrzés és egyedi árajánlat.',
}

interface ProbeEntry {
  model: string
  type: string
  brand: string
}

const probes: ProbeEntry[] = [
  // GE
  { model: 'RAB6-D', type: '4D Convex', brand: 'GE' },
  { model: 'ML6-15-D', type: '1.5D Linear Array', brand: 'GE' },
  { model: 'C1-6-D', type: 'Convex', brand: 'GE' },
  { model: 'C1-6-D low', type: 'Convex', brand: 'GE' },
  { model: 'M5S-D', type: 'Phase', brand: 'GE' },
  { model: 'M5Sc-D', type: 'Phase', brand: 'GE' },
  { model: 'C1-5-RS', type: 'Convex', brand: 'GE' },
  { model: 'C1-5-D', type: 'Convex', brand: 'GE' },
  { model: '8C', type: 'Convex', brand: 'GE' },
  { model: '8C-RS', type: 'Convex', brand: 'GE' },
  { model: '4C', type: 'Convex', brand: 'GE' },
  { model: '4C-RS', type: 'Convex', brand: 'GE' },
  { model: 'C2-5-RS', type: 'Convex', brand: 'GE' },
  { model: 'L6-12-RS', type: 'Linear', brand: 'GE' },
  { model: '7L', type: 'Linear', brand: 'GE' },
  { model: '8L', type: 'Linear', brand: 'GE' },
  { model: '9L', type: 'Linear', brand: 'GE' },
  { model: '10L', type: 'Linear', brand: 'GE' },
  { model: '11L-D', type: 'Linear', brand: 'GE' },
  { model: '3S', type: 'Phase', brand: 'GE' },
  { model: '3S-RS', type: 'Phase', brand: 'GE' },
  { model: '3SP', type: 'Phase', brand: 'GE' },
  { model: '3Sc-RS', type: 'Phase', brand: 'GE' },
  { model: '6S-RS', type: 'Phase', brand: 'GE' },
  { model: '12S', type: 'Phase', brand: 'GE' },
  { model: 'E8C', type: 'Endocavity', brand: 'GE' },
  { model: 'E8CS-RS', type: 'Endocavity', brand: 'GE' },
  { model: 'IC5-9-D', type: 'Endocavity', brand: 'GE' },
  { model: 'RIC5-9-D', type: '4D Endo', brand: 'GE' },
  { model: 'RAB4-8-D', type: '4D Convex', brand: 'GE' },
  { model: 'RIC5-9A-RS', type: '4D Endo', brand: 'GE' },
  { model: 'RIC5-9W-D', type: 'Endocavity', brand: 'GE' },
  { model: 'M4S-RS', type: 'Phase', brand: 'GE' },
  { model: 'E8CS', type: 'Endocavity', brand: 'GE' },
  // Philips
  { model: 'C5-1 PUC', type: 'Convex', brand: 'Philips' },
  { model: 'C5-1 COM', type: 'Convex', brand: 'Philips' },
  { model: 'C5-2', type: 'Convex', brand: 'Philips' },
  { model: 'C6-2', type: 'Convex', brand: 'Philips' },
  { model: 'C6-3', type: 'Convex', brand: 'Philips' },
  { model: 'C8-4V', type: 'Endocavity', brand: 'Philips' },
  { model: 'C8-5', type: 'Convex', brand: 'Philips' },
  { model: 'C9-4v PUC', type: 'Endocavity', brand: 'Philips' },
  { model: 'C9-4v COM', type: 'Endocavity', brand: 'Philips' },
  { model: 'C10-3v', type: 'Endocavity', brand: 'Philips' },
  { model: 'L9-3', type: 'Linear', brand: 'Philips' },
  { model: 'L12-3', type: 'Linear', brand: 'Philips' },
  { model: 'L12-4', type: 'Linear', brand: 'Philips' },
  { model: 'L12-5 50mm', type: 'Linear', brand: 'Philips' },
  { model: 'L12-3 ERGO', type: 'Linear', brand: 'Philips' },
  { model: 'eL18-4', type: 'Linear', brand: 'Philips' },
  { model: 'S4-2', type: 'Phase', brand: 'Philips' },
  { model: 'S5-1', type: 'Phase', brand: 'Philips' },
  { model: 'S8-3 PUC', type: 'Phase', brand: 'Philips' },
  { model: 'S12-4', type: 'Phase', brand: 'Philips' },
  // Toshiba
  { model: 'PVT-375AT', type: 'Convex', brand: 'Toshiba' },
  { model: 'PVT-375BT', type: 'Convex', brand: 'Toshiba' },
  { model: 'PVU-375BT', type: 'Convex', brand: 'Toshiba' },
  { model: 'PVM-375AT', type: 'Convex', brand: 'Toshiba' },
  { model: 'PVG-366M', type: 'Convex', brand: 'Toshiba' },
  { model: 'PLT-704AT', type: 'Linear', brand: 'Toshiba' },
  { model: 'PLT-704SBT', type: 'Linear', brand: 'Toshiba' },
  { model: 'PLT-705AT', type: 'Linear', brand: 'Toshiba' },
  { model: 'PLT-805AT', type: 'Linear', brand: 'Toshiba' },
  { model: 'PLT-1005BT', type: 'Linear', brand: 'Toshiba' },
  { model: 'PLT-1204AT', type: 'Linear', brand: 'Toshiba' },
  { model: 'PLT-1204BT', type: 'Linear', brand: 'Toshiba' },
  { model: 'PLU-1005BT', type: 'Linear', brand: 'Toshiba' },
  { model: 'PST-25BT', type: 'Phase', brand: 'Toshiba' },
  { model: 'PST-30BT', type: 'Phase', brand: 'Toshiba' },
  { model: 'PSU-25BT', type: 'Phase', brand: 'Toshiba' },
  { model: 'PVT-661VT', type: 'Endocavity', brand: 'Toshiba' },
  { model: 'PVT-781VT', type: 'Endocavity', brand: 'Toshiba' },
  // Mindray
  { model: '3C5', type: 'Convex', brand: 'Mindray' },
  { model: '3C5A', type: 'Convex', brand: 'Mindray' },
  { model: '3C5s', type: 'Convex', brand: 'Mindray' },
  { model: 'C5-2', type: 'Convex', brand: 'Mindray' },
  { model: 'C5-2E', type: 'Convex', brand: 'Mindray' },
  { model: 'C5-2s', type: 'Convex', brand: 'Mindray' },
  { model: 'C11-3s', type: 'Convex', brand: 'Mindray' },
  { model: 'C11-3E', type: 'Convex', brand: 'Mindray' },
  { model: '35C50EB', type: 'Convex', brand: 'Mindray' },
  { model: '35C50P', type: 'Convex', brand: 'Mindray' },
  { model: '7L4A', type: 'Linear', brand: 'Mindray' },
  { model: '7L4s', type: 'Linear', brand: 'Mindray' },
  { model: 'L12-3E', type: 'Linear', brand: 'Mindray' },
  { model: 'L14-6NE', type: 'Linear', brand: 'Mindray' },
  { model: 'L14-6s', type: 'Linear', brand: 'Mindray' },
  { model: 'P4-2', type: 'Phase', brand: 'Mindray' },
  { model: 'P4-2E', type: 'Phase', brand: 'Mindray' },
  { model: '2P2', type: 'Phase', brand: 'Mindray' },
  { model: '6CV1P', type: 'Phase', brand: 'Mindray' },
  { model: 'V10-4', type: 'Endocavity', brand: 'Mindray' },
  { model: 'V11-3E', type: 'Endocavity', brand: 'Mindray' },
]

const brands = [
  { key: 'GE', name: 'GE HealthCare', color: '#0F4C81' },
  { key: 'Philips', name: 'Philips', color: '#0066A1' },
  { key: 'Toshiba', name: 'Canon / Toshiba', color: '#CC0000' },
  { key: 'Mindray', name: 'Mindray', color: '#005A9C' },
]

const typeIcons: Record<string, string> = {
  'Convex': '🔵',
  'Linear': '🟢',
  'Phase': '🟡',
  'Endocavity': '🟣',
  '4D Convex': '🔷',
  '4D Endo': '🟪',
  '1.5D Linear Array': '🟩',
}

export default function CompatibleProbesPage() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kompatibilis ultrahang fejek</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Új, kompatibilis transzducerek kedvező áron, garanciával.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="/kapcsolat" className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Kapcsolatfelvétel
            </Link>
            <a href="#lista" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all border border-white/20">
              Lista megtekintése ↓
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="lista">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-text-primary mb-10 text-center">
            Utángyártott, kompatibilis fejek – lista 2026
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => {
              const brandProbes = probes.filter(p => p.brand === brand.key)
              
              const grouped: Record<string, ProbeEntry[]> = {}
              brandProbes.forEach(p => {
                if (!grouped[p.type]) grouped[p.type] = []
                grouped[p.type].push(p)
              })

              return (
                <div key={brand.key} className="card overflow-hidden flex flex-col">
                  <div 
                    className="p-4 text-white text-center"
                    style={{ background: `linear-gradient(135deg, ${brand.color}, ${brand.color}dd)` }}
                  >
                    <h3 className="font-bold text-lg">{brand.name}</h3>
                    <p className="text-xs text-white/70 mt-0.5">{brandProbes.length} modell</p>
                  </div>

                  <div className="p-4 flex-grow space-y-4">
                    {Object.entries(grouped).map(([type, items]) => (
                      <div key={type}>
                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <span>{typeIcons[type] || '⚪'}</span>
                          {type}
                        </h4>
                        <div className="space-y-1">
                          {items.map((probe, i) => (
                            <div 
                              key={i}
                              className="text-sm font-mono text-text-primary bg-surface-alt px-2.5 py-1 rounded-md hover:bg-primary/5 hover:text-primary transition-colors cursor-default"
                              title={probe.type}
                            >
                              {probe.model}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-4 pb-4">
                    <Link 
                      href="/kapcsolat" 
                      className="block text-center text-xs text-accent hover:text-accent-dark font-medium transition-colors"
                    >
                      Érdeklődés →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Jelmagyarázat – lista ALATT */}
          <div className="mt-12 card p-6 bg-surface-alt">
            <h3 className="text-sm font-semibold text-text-primary mb-4 text-center">Típusok jelmagyarázata</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {Object.entries(typeIcons).map(([type, icon]) => (
                <div key={type} className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="text-base">{icon}</span>
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 bg-surface-alt text-center mt-6">
            <p className="text-text-secondary">
              A lista tájékoztató jellegű. Az aktuális készletről és árakról kérjen{' '}
              <Link href="/kapcsolat" className="text-accent font-semibold hover:underline">egyedi ajánlatot</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

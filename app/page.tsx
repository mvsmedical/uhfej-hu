import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ultrahang fej javítás és kompatibilis fejek | uhfej.hu',
  description: 'Ultrahang transzducer javítás, bevizsgálás és kompatibilis ultrahang fejek. GE, Philips, Siemens, Mindray, Canon, Esaote, Sonosite és további gyártók.',
}

const quickReference = [
  { symptom: 'Repedt, karcolt lencse', cause: 'Fizikai behatás, vegyszer', repairable: true },
  { symptom: 'Szakadt kábel', cause: 'Ráhajtás, kopás, hőkárosodás', repairable: true },
  { symptom: 'Nincs kép', cause: 'Csatlakozó hiba, belső elektronika', repairable: 'conditional' },
  { symptom: 'Zajos kép', cause: 'Kábel árnyékolás hiba, kristály öregedés', repairable: true },
  { symptom: 'Csíkok a képen', cause: 'Elemhiba, földelési probléma', repairable: 'conditional' },
  { symptom: 'Fekete vonalak (dropout)', cause: 'Kieső elemek, kristálysérülés', repairable: 'conditional' },
  { symptom: 'Folyadék a fejben', cause: 'Tömítés hiba, lencse repedés', repairable: 'conditional' },
  { symptom: 'Nem mozog (3D/4D)', cause: 'Motorhiba, mechanikai kopás', repairable: true },
  { symptom: 'Törött csatlakozó', cause: 'Leesés, nem megfelelő kezelés', repairable: true },
  { symptom: 'Repedt fejház', cause: 'Fizikai behatás', repairable: true },
]

const benefits = [
  {
    title: 'Költséghatékony megoldás',
    description: 'A szakszerű javítás jellemzően az új fej árának 15-50%-a. Egy egyszerű kábelcsere a fej árának 10-15%-át teszi ki.',
    icon: '💰'
  },
  {
    title: 'Jótállás a javításra',
    description: 'Minden elvégzett javításra 6-12 hónap jótállást vállalunk, a javítás típusától függően. A feltételeket a javítási dokumentáció tartalmazza.',
    icon: '🛡️'
  },
  {
    title: 'Megszakítás nélküli betegellátás',
    description: 'Visszakapja a megszokott fejet, amelyet a kollégák ismernek és a munkafolyamatokba beillesztettek. Nincs szükség új eszköz betanulására.',
    icon: '🏥'
  },
  {
    title: 'Dokumentált minőségellenőrzés',
    description: 'Minden javított fej átesik funkcionális teszten, képminőség validáláson és elektromos biztonsági mérésen (IEC 60601-1).',
    icon: '📋'
  },
]

const stats = [
  { number: '90% felett', label: 'Javíthatóság' },
  { number: '15+', label: 'Év szakmai tapasztalat' },
  { number: '1-4 hét', label: 'Átlagos átfutási idő' },
  { number: '6-12 hónap', label: 'Jótállás a javításra' },
]

const manufacturers = [
  {
    name: 'GE HealthCare',
    systems: 'Voluson, LOGIQ, Vivid',
    models: 'RAB6-D, ML6-15-D, C1-6-D, M5S-D, IC5-9-D és továbbiak',
    color: '#0F4C81',
    count: '30+ modell'
  },
  {
    name: 'Philips',
    systems: 'EPIQ, Affiniti, iU22, HD',
    models: 'C5-1, L12-3, L12-5, S5-1, C9-4v és továbbiak',
    color: '#0066A1',
    count: '20+ modell'
  },
  {
    name: 'Siemens Healthineers',
    systems: 'ACUSON sorozatok',
    models: '9L4, 4C1, CH5-2, VF10-5, EC9-4 és továbbiak',
    color: '#007A78',
    count: '15+ modell'
  },
  {
    name: 'Canon / Toshiba',
    systems: 'Aplio, Xario, Viamo',
    models: 'PVT-375BT, PLT-1204BT, PLT-805AT és továbbiak',
    color: '#CC0000',
    count: '18+ modell'
  },
  {
    name: 'Mindray',
    systems: 'DC, M, TE sorozatok',
    models: 'C5-2E, L12-3E, V11-3E, P4-2E és továbbiak',
    color: '#005A9C',
    count: '20+ modell'
  },
  {
    name: 'Esaote',
    systems: 'MyLab sorozatok',
    models: 'CA541, LA523, PA230E és továbbiak',
    color: '#E07A5F',
    count: '10+ modell'
  },
  {
    name: 'Fujifilm Sonosite',
    systems: 'Edge, X-Porte, M-Turbo',
    models: 'L25X, HFL38x, C60X, P21X és továbbiak',
    color: '#5B2C6F',
    count: '10+ modell'
  },
  {
    name: 'Samsung Medison',
    systems: 'HS, RS, WS sorozatok',
    models: 'CA1-7A, LA3-16A, CV1-8A és továbbiak',
    color: '#1428A0',
    count: '8+ modell'
  },
]

const additionalBrands = ['Aloka', 'Hitachi', 'Chison', 'SonoScape', 'SIUI']

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-medium tracking-wide uppercase mb-4">
              Ultrahang transzducer javítás és bevizsgálás
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Ultrahang fej javítás, bevizsgálás és kompatibilis fejek
            </h1>
            <p className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-2xl">
              Hibás ultrahang fejét a legtöbb esetben nem szükséges cserélni. Kábelsérülés, lencserepedés, 
              csatlakozóhiba, képminőség-romlás – ezek a problémák szakszerűen javíthatók. 
              A javítás költsége jellemzően az új fej árának töredéke.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/ultrahang-fej-javitas#inquiry"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Bevizsgálás kérése
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/kompatibilis-ultrahang-fejek"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Kompatibilis fejek
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATISZTIKÁK */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MIÉRT JAVÍTÁS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Miért érdemes javíttatni?</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              A javítás költséghatékony alternatíva, jótállással és dokumentált minőségellenőrzéssel
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-8 flex gap-6">
                <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="font-bold text-xl text-text-primary mb-2">{benefit.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIBA TÁBLÁZAT */}
      <section className="py-20 gradient-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Milyen hibák javíthatók?</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Az alábbi táblázat a leggyakoribb hibajelenségeket és azok javíthatóságát mutatja
            </p>
          </div>
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface-muted">
                    <th className="text-left p-4 font-semibold text-text-primary">Tapasztalt jelenség</th>
                    <th className="text-left p-4 font-semibold text-text-primary">Lehetséges ok</th>
                    <th className="text-left p-4 font-semibold text-text-primary">Javíthatóság</th>
                  </tr>
                </thead>
                <tbody>
                  {quickReference.map((row, index) => (
                    <tr key={index} className="border-t border-gray-50 hover:bg-surface-alt/50 transition-colors">
                      <td className="p-4 font-medium text-text-primary">{row.symptom}</td>
                      <td className="p-4 text-text-secondary">{row.cause}</td>
                      <td className="p-4">
                        {row.repairable === true ? (
                          <span className="inline-flex items-center gap-1 text-green-700 bg-green-50 px-2.5 py-1 rounded-full text-xs font-medium">Javítható</span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full text-xs font-medium">Esetfüggő</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card p-6 mt-6 bg-surface-alt">
            <p className="text-text-secondary text-sm text-center">
              A részletes hibalistát a{' '}
              <Link href="/hibak" className="text-accent font-semibold hover:underline">Hibák oldalon</Link> találja.
            </p>
          </div>
        </div>
      </section>

      {/* TÁMOGATOTT GYÁRTÓK – kártyás stílus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Támogatott gyártók</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Gyártófüggetlen szerviz – vezető gyártók teljes rendszercsaládjaihoz
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {manufacturers.map((mfr, index) => (
              <div key={index} className="card overflow-hidden flex flex-col group hover:shadow-card-hover transition-all">
                {/* Színes fejléc */}
                <div 
                  className="p-4 text-white"
                  style={{ background: `linear-gradient(135deg, ${mfr.color}, ${mfr.color}cc)` }}
                >
                  <h3 className="font-bold text-base">{mfr.name}</h3>
                  <p className="text-xs text-white/70 mt-0.5">{mfr.count}</p>
                </div>
                
                {/* Tartalom */}
                <div className="p-4 flex-grow space-y-3">
                  <div>
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Rendszerek</h4>
                    <p className="text-sm text-text-secondary">{mfr.systems}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Fejtípusok</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{mfr.models}</p>
                  </div>
                </div>
                
                {/* Lábléc */}
                <div className="px-4 pb-4">
                  <Link 
                    href="/ultrahang-fej-javitas#inquiry" 
                    className="text-xs text-accent hover:text-accent-dark font-medium transition-colors"
                  >
                    Javítás és bevizsgálás →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* További gyártók */}
          <div className="mt-8 text-center">
            <p className="text-sm text-text-muted mb-3">További támogatott gyártók</p>
            <div className="flex flex-wrap justify-center gap-2">
              {additionalBrands.map((brand, index) => (
                <span 
                  key={index}
                  className="bg-surface-alt text-text-secondary px-4 py-1.5 rounded-full text-sm border border-gray-100"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kérjen bevizsgálást</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Vegye fel velünk a kapcsolatot – a beérkezést követően tájékoztatjuk a diagnosztika várható idejéről.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ultrahang-fej-javitas#inquiry"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Bevizsgálás kérése
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/hibak"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/20"
            >
              Hibák áttekintése
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

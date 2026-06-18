import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ultrahang fej hibák – tünetek, okok, javíthatóság',
  description: 'Ultrahang transzducerek leggyakoribb hibái: lencse sérülés, kábelhiba, képminőségi problémák, csatlakozó hiba, folyadékbehatolás, motorhiba. Tünetek és okok.',
}

const probeIssues = [
  {
    title: 'Akusztikus lencse sérülés',
    severity: 'Kritikus',
    severityColor: 'red',
    repairable: true,
    symptoms: ['Homályos vagy torzult kép', 'Zselé szivárgás a lencse alól', 'Látható repedés vagy deformáció', 'Páciens diszkomfort érzés'],
    causes: ['Fizikai behatás (leejtés)', 'Vegyi anyagok (nem megfelelő tisztítószer)', 'Természetes kopás', 'Túlzott nyomás a vizsgálat során'],
    solution: 'Lencsecsere speciális akusztikus anyaggal.',
    riskIfIgnored: 'Progresszív delamináció, folyadékbehatolás a fej belsejébe – ez teljes tönkremenetelhez vezethet.'
  },
  {
    title: 'Kábel sérülés',
    severity: 'Gyakori',
    severityColor: 'orange',
    repairable: true,
    symptoms: ['Időszakos képkimaradás', 'Interferencia a képen', 'Látható kábeltörés vagy repedés'],
    causes: ['Rendszeres hajlítás ugyanazon a ponton', 'Cart rágurítása a kábelre', 'Éles tárggyal való érintkezés', 'Hőkárosodás'],
    solution: 'Kábelcsere vagy sérült szakasz javítása, árnyékolás helyreállítása.',
    riskIfIgnored: 'Rövidzárlat, elektromos veszély, teljes jeltörés.'
  },
  {
    title: 'Kristályhiba',
    severity: 'Változó',
    severityColor: 'orange',
    repairable: 'conditional',
    symptoms: ['Képminőség romlás', 'Függőleges csíkok', 'Kieső képrészek (dropout)', 'Árnyékoltság és vakfoltok'],
    causes: ['Piezo-elektromos elemek sérülése mechanikai behatásra (leejtés, géles flakon)', 'Elöregedés', 'Belső elektronika hiba'],
    solution: 'Diagnosztikai bevizsgálás után célzott javítás. A pontos teendő a hiba jellegétől függ.',
    riskIfIgnored: 'Téves diagnózis kockázata, fokozódó képromlás.'
  },
  {
    title: 'Csatlakozó sérülés',
    severity: 'Kritikus',
    severityColor: 'red',
    repairable: true,
    symptoms: ['Nincs kép vagy hibajelzés', 'Időszakos működés', 'Látható sérülés a PIN-eken', 'Laza csatlakozás'],
    causes: ['Nem megfelelő csatlakoztatás', 'Fizikai sérülés', 'Korrózió', 'Kopás'],
    solution: 'Csatlakozó csere vagy PIN-javítás, tesztelés referencia rendszeren.',
    riskIfIgnored: 'A készülék csatlakozóaljzatának sérülése – további költséges javítást igényelhet.'
  },
  {
    title: 'Beszivárgott folyadék',
    severity: 'Kritikus',
    severityColor: 'red',
    repairable: 'conditional',
    symptoms: ['Fokozatos képromlás', 'Párásodás a lencse alatt', 'Teljes meghibásodás', 'Rövidzárlat jelei'],
    causes: ['Sérült tömítés, szigetelés', 'Lencse repedés', 'Nem megfelelő tisztítás'],
    solution: 'Szárítás, korrózió eltávolítás, tömítéscsere, tesztelés. Korai szakaszban jó eséllyel menthető.',
    riskIfIgnored: 'Teljes és végleges meghibásodás, a fej menthetetlenné válik.'
  },
  {
    title: '3D/4D motorhiba',
    severity: 'Kritikus',
    severityColor: 'red',
    repairable: true,
    symptoms: ['Szokatlan zaj működés közben', 'Nincs 3D/4D kép', 'Hibakód a rendszeren'],
    causes: ['Belső mechanikus hiba', 'Kenés elégtelensége', 'Motor vagy áttétel sérülés', 'Elektromos hiba'],
    solution: 'Motor-, mechanika csere, mechanikai javítás, kenés, kalibrálás.',
    riskIfIgnored: 'Teljes mechanikai meghibásodás, a 3D/4D funkció végleges elvesztése.'
  }
]

export default function HibakPage() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-white/90">Hiba-adatlapok</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ultrahang fej hibák – tünetek, okok, javíthatóság</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            A leggyakoribb ultrahang transzducer hibák áttekintése a tapasztalt jelenségek és a lehetséges okok szerint
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {probeIssues.map((issue, index) => (
              <div key={index} className="card p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-text-primary">{issue.title}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    issue.severityColor === 'red' 
                      ? 'bg-red-100 text-red-700'
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {issue.severity}
                  </span>
                </div>

                <div className="space-y-4 flex-grow">
                  <div>
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">Tünetek</h4>
                    <ul className="space-y-1">
                      {issue.symptoms.map((symptom, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-2">Lehetséges okok</h4>
                    <ul className="space-y-1">
                      {issue.causes.map((cause, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-100 p-3 rounded-lg">
                    <h4 className="text-sm font-semibold text-red-700 mb-1">Kockázat</h4>
                    <p className="text-xs text-red-600">{issue.riskIfIgnored}</p>
                  </div>

                  <div className="bg-surface-alt p-4 rounded-xl">
                    <h4 className="text-sm font-semibold text-primary mb-1">Megoldás</h4>
                    <p className="text-sm text-text-secondary">{issue.solution}</p>
                    <p className="text-xs text-text-muted mt-2">
                      Javíthatóság:{' '}
                      <strong className={issue.repairable === true ? 'text-green-600' : 'text-orange-600'}>
                        {issue.repairable === true ? 'Javítható' : 'Esetfüggő – diagnosztika szükséges'}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-2">Egyéb hibát tapasztal?</h3>
            <p className="text-text-muted mb-6">
              Vegye fel velünk a kapcsolatot – a beérkezést követően tájékoztatjuk a diagnosztika várható idejéről.
            </p>
            <Link
              href="/ultrahang-fej-javitas#inquiry"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md"
            >
              Bevizsgálás kérése
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import InquiryForm from '@/components/InquiryForm'
import ExpandableFAQ from '@/components/ExpandableFAQ'

export const metadata: Metadata = {
  title: 'Ultrahang fej javítás és bevizsgálás | uhfej.hu',
  description: 'Ultrahang transzducer javítás: kábelcsere, lencsecsere, csatlakozó javítás. 1-4 hét átfutás, jótállás. GE, Philips, Siemens, Mindray és további gyártók.',
}

const repairSteps = [
  { step: '01', title: 'Kapcsolatfelvétel', description: 'Lépjen velünk kapcsolatba telefonon vagy online. Adja meg a fej típusát és a tapasztalt hiba leírását. A rendelkezésre álló adatok alapján indikatív javítási költségbecslést adunk.', icon: '💬', time: 'Azonnali' },
  { step: '02', title: 'Elszállítás', description: 'Részletes csomagolási útmutatót biztosítunk: a fejet lehetőleg az eredeti dobozában, a kábelt éles törés nélkül kérjük elhelyezni. Ezt követően jelentkezik a futár a hibás fejért.', icon: '📦', time: '1-2 munkanap' },
  { step: '03', title: 'Diagnosztika', description: 'A fejet egyedi azonosítóval látjuk el. Teljes körű diagnosztikai vizsgálat: elektromos paraméterek mérése, akusztikus teszt, képminőség ellenőrzés dedikált mérőrendszeren.', icon: '🔬', time: '1-5 munkanap' },
  { step: '04', title: 'Árajánlat', description: 'A diagnosztika eredménye alapján tételes árajánlatot küldünk. Az árajánlat tartalmazza a szükséges munkálatokat és a várható átfutási időt. Elfogadásáig költség nem merül fel.', icon: '📋', time: 'Diagnosztikát követően' },
  { step: '05', title: 'Javítás', description: 'A javítást a gyártói specifikációknak megfelelő alkatrészekkel és eljárásokkal végezzük. Minden lépés dokumentált.', icon: '🔧', time: 'elfogadott ajánlat után 1-7 nap' },
  { step: '06', title: 'Minőségellenőrzés', description: 'Funkcionális teszt, képminőség validálás teszt fantomokon, elektromos biztonsági mérés (IEC 60601-1). Csak az ellenőrzésen megfelelt fej kerül visszaszállításra.', icon: '✅', time: '1-4 munkanap' },
  { step: '07', title: 'Visszaszállítás és jótállás', description: 'A megjavított fejet a javítási dokumentációval együtt visszajuttatjuk. Minden javításra 6-12 hónap jótállást vállalunk.', icon: '🛡️', time: '1-5 nap' },
]

const allFaqItems = [
  { q: 'Mennyibe kerül egy ultrahang fej javítása?', a: 'A javítás költsége a hiba típusától függ. Egy egyszerű kábelcsere a fej árának 10-15%-a, míg egy komplex 3D/4D motorjavítás 30-50% között mozog. Pontos árajánlatot a diagnosztikai bevizsgálás után adunk.' },
  { q: 'Mennyi idő alatt javítanak meg egy ultrahang fejet?', a: 'Az átfutási idő a hiba jellegétől függően 1-4 hét. Az indikatív időtartamot az árajánlat tartalmazza.' },
  { q: 'Milyen garanciát vállalnak a javításra?', a: 'Minden javításra 6-12 hónap jótállást vállalunk a javítás típusától függően. A jótállás a javított alkatrészekre és az elvégzett munkára vonatkozik.' },
  { q: 'Mi történik, ha nem javítható a fej?', a: 'Amennyiben a diagnosztika alapján a javítás nem gazdaságos, kompatibilis cserefej ajánlatot teszünk.' },
  { q: 'Hogyan kell becsomagolni a hibás fejet?', a: 'A fejet lehetőleg az eredeti tárolódobozában, rögzítve kérjük visszaküldeni. A kábelt ne törje meg élesen. Részletes útmutatót küldünk, és futárt is biztosítunk.' },
  { q: 'Vállalnak sürgősségi javítást?', a: 'Indokolt esetben expressz szolgáltatást is biztosítunk. Kérjük, ezt az igényét a hibabejelentéskor jelezze.' },
  { q: 'Biztonságos a javított ultrahang fej?', a: 'Igen. Minden javított fej átesik elektromos biztonsági teszten (szivárgási áram mérés) és megfelel az IEC 60601-1 szabvány követelményeinek.' },
  { q: 'Változik-e a képminőség javítás után?', a: 'A javítás utáni képminőségnek meg kell egyeznie a gyári specifikációval. Ezt teszt fantomokon ellenőrizzük.' },
  { q: 'Milyen dokumentációt kapok a javításról?', a: 'Részletes jegyzőkönyvet, amely tartalmazza az elvégzett munkálatokat, a felhasznált alkatrészeket és a minőségellenőrzés eredményeit.' },
  { q: 'Mely gyártók fejeit javítják?', a: 'Gyártófüggetlen szerviz vagyunk: GE, Philips, Siemens, Canon, Mindray, Esaote, Sonosite, Samsung és további gyártók termékeit javítjuk.' },
  { q: 'Mi a különbség a gyártói és a független javítás között?', a: 'A gyártói javítás gyakran hosszabb átfutású és magasabb költségű. A független javítás – megfelelő szakértelemmel – azonos minőséget biztosít kedvezőbb áron.' },
  { q: 'Hogyan ellenőrzik a javítás minőségét?', a: 'Minden fej átesik funkcionális teszten, képminőség validáláson és elektromos biztonsági mérésen, mielőtt visszaszállítanánk.' },
  { q: 'Mi a teendő, ha folyadék került a fejbe?', a: 'Azonnal hagyja abba a használatát. Minél hamarabb megkezdjük a szárítást, annál nagyobb az esély a fej megmentésére.' },
  { q: 'Javítható-e a megtört kábel?', a: 'Igen, a kábelsérülés a leggyakrabban javított hiba. A sérülés súlyosságától függően a kábel javítható vagy cserélhető.' },
  { q: 'Mit jelent a lencse delamináció?', a: 'A lencse rétegeinek elválása egymástól. Látható jele a buborékok megjelenése a lencse alatt. Oka lehet vegyszer, ütés vagy gyártási hiba.' },
  { q: 'Hogyan ismerhető fel a csatlakozó hiba?', a: 'Ha a rendszer nem ismeri fel a fejet, hibakódot jelez, vagy a kép időszakosan eltűnik, valószínű a csatlakozó hiba.' },
  { q: 'Mi az elektromos szivárgási teszt?', a: 'Biztonsági mérés, amely ellenőrzi, hogy a fej nem enged-e veszélyes áramot a páciensbe. Kötelező vizsgálat minden javítás után.' },
  { q: 'Vállalnak helyszíni javítást?', a: 'A javítás speciális berendezést és környezetet igényel, ezért szervizlaboratóriumunkban végezzük. A beszállításban futárral segítünk.' },
  { q: 'Meddig használható biztonságosan egy javított fej?', a: 'Megfelelő javítás után a fej élettartama összemérhető egy új fej élettartamával. A rendszeres bevizsgálás segít a problémák korai felismerésében.' },
  { q: 'Hogyan előzhető meg az ultrahang fej sérülése?', a: 'Rendszeres tisztítás megfelelő szerekkel, a kábel kíméletes kezelése, a fej tárolódobozban tartása, rendszeres ellenőrzés.' },
  { q: 'Milyen tisztítószert használjak?', a: 'Kizárólag a gyártó által jóváhagyott tisztító- és fertőtlenítőszereket. Alkohol, aceton és más oldószerek károsíthatják a lencse anyagát.' },
  { q: 'Mi a strain relief?', a: 'A kábeltehermentesítő az a gumirész, ahol a kábel a fejbe csatlakozik. Védi a kábelereket a megtöréstől. Sérülése esetén a kábelerek hamar tönkremennek.' },
  { q: 'Visszakapom a régi alkatrészeket?', a: 'Igen, kérésre a kicserélt alkatrészeket visszaküldjük. Ezt kérjük, már a javítás megrendelésekor jelezze.' },
  { q: 'Hogyan működik a kompatibilis cserefej program?', a: 'Ha a fej nem javítható gazdaságosan, kompatibilis cserefejet ajánlunk, amely kedvezőbb árú, mint az eredeti gyártói cserefej.' },
  { q: 'Milyen gyakran érdemes bevizsgáltatni a fejeket?', a: 'Évente egyszer javasolt a megelőző bevizsgálás. Intenzíven használt fejek esetén félévente is érdemes ellenőriztetni.' },
]

export default function RepairPage() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/20">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
            </svg>
            <span className="text-sm font-medium text-white/90">Ultrahang transzducer javítás</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ultrahang fej javítás és bevizsgálás</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Szakszerű javítás és diagnosztikai bevizsgálás valamennyi vezető gyártó rendszereihez
          </p>
          <div className="flex gap-4 mt-8">
            <Link href="/kapcsolat" className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Kapcsolat
            </Link>
            <Link href="/hibak" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all border border-white/20">
              Hibák áttekintése
            </Link>
          </div>
        </div>
      </section>

      {/* Javítási folyamat */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">A javítás folyamata</h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Átlátható, dokumentált folyamat az átvételtől a visszaszállításig
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-px" />
            {repairSteps.map((step, index) => (
              <div key={index} className={`relative flex items-start mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-white border-2 border-primary rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-sm">
                  <span className="text-xs font-bold text-primary">{index + 1}</span>
                </div>
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="card p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{step.icon}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">Lépés {step.step}</span>
                          <span className="text-xs text-text-muted">{step.time}</span>
                        </div>
                        <h3 className="font-bold text-text-primary mb-1">{step.title}</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ – Client Component */}
      <section className="py-16 gradient-section">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Gyakori kérdések</h2>
          <ExpandableFAQ items={allFaqItems} initialCount={12} />
        </div>
      </section>

      {/* Űrlap */}
      <section className="py-16 bg-white" id="inquiry">
        <div className="max-w-2xl mx-auto px-4">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-2">Bevizsgálási igény</h2>
            <p className="text-text-muted mb-6">
              Töltse ki az űrlapot – a beküldést követően hamarosan felvesszük Önnel a kapcsolatot.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adatkezelési tájékoztató | uhfej.hu',
  description: 'Az MVS Medical Plusz Kft. adatkezelési tájékoztatója. Részletes tájékoztatás a személyes adatok kezeléséről, az érintettek jogairól és az adatbiztonsági intézkedésekről.',
}

export default function PrivacyPage() {
  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Adatkezelési tájékoztató</h1>
          <p className="text-xl text-white/80">Az Ön személyes adatainak védelme fontos számunkra</p>
          <p className="text-sm text-white/60 mt-4">Utolsó módosítás: 2024. január 1.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="card p-8 space-y-10 text-text-secondary leading-relaxed text-sm">
            
            {/* 1. Bevezetés */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">1. A tájékoztató célja és hatálya</h2>
              <p className="mb-3">
                Az MVS Medical Plusz Kft. (a továbbiakban: Adatkezelő) jelen adatkezelési tájékoztató közzétételével 
                biztosítja, hogy az érintettek az adatkezelés megkezdése előtt és annak folyamán is világos, 
                közérthető és részletes tájékoztatást kapjanak személyes adataik kezelésének valamennyi lényeges 
                körülményéről.
              </p>
              <p className="mb-3">
                Az Adatkezelő tevékenysége során kiemelt figyelmet fordít a személyes adatok védelmére, 
                a hatályos jogszabályok – különösen az Európai Parlament és a Tanács (EU) 2016/679 rendelete 
                (GDPR), valamint az információs önrendelkezési jogról és az információszabadságról szóló 
                2011. évi CXII. törvény – maradéktalan betartására.
              </p>
              <p>
                A tájékoztató az Adatkezelő által üzemeltetett uhfej.hu weboldalon (a továbbiakban: Weboldal) 
                keresztül megvalósuló adatkezelésekre terjed ki. Az Adatkezelő fenntartja a jogot a jelen 
                tájékoztató egyoldalú módosítására, amelyről a Weboldalon keresztül értesíti az érintetteket.
              </p>
            </div>

            {/* 2. Adatkezelő adatai */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">2. Az Adatkezelő adatai</h2>
              <div className="bg-surface-alt p-5 rounded-xl space-y-2">
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <span className="font-medium text-text-primary">Megnevezés:</span>
                  <span>MVS Medical Plusz Kft.</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <span className="font-medium text-text-primary">Székhely:</span>
                  <span>1204 Budapest, Ady Endre utca 90-92.</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <span className="font-medium text-text-primary">Cégjegyzékszám:</span>
                  <span>01-09-456275</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <span className="font-medium text-text-primary">Adószám:</span>
                  <span>33047067-2-43</span>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <span className="font-medium text-text-primary">E-mail:</span>
                  <a href="mailto:info@uhfej.hu" className="text-accent hover:underline">info@uhfej.hu</a>
                </div>
                <div className="grid grid-cols-[140px_1fr] gap-2">
                  <span className="font-medium text-text-primary">Weboldal:</span>
                  <span>uhfej.hu</span>
                </div>
              </div>
              <p className="mt-4">
                Az Adatkezelő a hozzá beérkező valamennyi elektronikus megkeresést – a közölt személyes 
                adatokkal együtt – az adatközléstől számított legfeljebb 5 év elteltével törli.
              </p>
            </div>

            {/* 3. A kezelt adatok köre */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">3. A kezelt személyes adatok köre</h2>
              
              <h3 className="font-semibold text-text-primary mb-2">3.1. Ajánlatkérés és kapcsolatfelvétel során megadott adatok</h3>
              <p className="mb-3">
                A Weboldalon található ajánlatkérő űrlap kitöltése során az alábbi adatok megadása történhet:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Intézmény neve</li>
                <li>Kapcsolattartó neve (kötelező)</li>
                <li>E-mail cím (kötelező)</li>
                <li>Telefonszám</li>
                <li>Az ultrahang készülék gyártója és típusa</li>
                <li>Az ultrahang fej típusa</li>
                <li>A tapasztalt hiba leírása</li>
                <li>Csatolt fájlok (fotók, dokumentumok)</li>
              </ul>

              <h3 className="font-semibold text-text-primary mb-2">3.2. Technikai adatok</h3>
              <p className="mb-3">
                Az Adatkezelő a szolgáltatás nyújtása során alkalmazott informatikai eszközöket úgy választja 
                meg és üzemelteti, hogy a kezelt adatok tekintetében az alábbi követelmények teljesüljenek:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li><strong>Rendelkezésre állás:</strong> az adatok az arra jogosultak számára elérhetőek legyenek, amikor szükség van rájuk</li>
                <li><strong>Adatbizalmasság:</strong> az adatokhoz kizárólag az arra feljogosított személyek férhessenek hozzá</li>
                <li><strong>Adatintegritás:</strong> az adatok pontossága, teljessége és változatlansága biztosított legyen</li>
                <li><strong>Hitelesség:</strong> az adatok eredete és a feldolgozás módja ellenőrizhető legyen</li>
              </ul>

              <h3 className="font-semibold text-text-primary mb-2">3.3. Cookie-k (sütik) kezelése</h3>
              <p className="mb-3">
                A Weboldal kizárólag a működéshez feltétlenül szükséges, úgynevezett munkamenet (session) 
                cookie-kat használ. Ezek a sütik a böngészés befejezésével automatikusan törlődnek, és 
                nem gyűjtenek személyes adatokat. A Weboldal nem használ marketing, analitikai vagy 
                harmadik féltől származó nyomkövető sütiket.
              </p>
              <p>
                A cookie-k célja a Weboldal alapvető funkcióinak biztosítása, a böngészés zavartalanságának 
                fenntartása. Használatuk nélkül a Weboldal egyes funkciói nem, vagy csak korlátozottan 
                működnének.
              </p>
            </div>

            {/* 4. Adatkezelés célja és jogalapja */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">4. Az adatkezelés célja, jogalapja és időtartama</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-muted">
                      <th className="text-left p-3 font-semibold text-text-primary border border-gray-200">Kezelt adat</th>
                      <th className="text-left p-3 font-semibold text-text-primary border border-gray-200">Az adatkezelés célja</th>
                      <th className="text-left p-3 font-semibold text-text-primary border border-gray-200">Jogalap</th>
                      <th className="text-left p-3 font-semibold text-text-primary border border-gray-200">Megőrzési idő</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-surface-alt/50">
                      <td className="p-3 border border-gray-100">Név, intézmény neve</td>
                      <td className="p-3 border border-gray-100">Kapcsolattartás, ajánlatadás</td>
                      <td className="p-3 border border-gray-100">Az érintett hozzájárulása (GDPR 6. cikk (1) a))</td>
                      <td className="p-3 border border-gray-100">5 év</td>
                    </tr>
                    <tr className="hover:bg-surface-alt/50">
                      <td className="p-3 border border-gray-100">E-mail cím</td>
                      <td className="p-3 border border-gray-100">Kapcsolattartás, ajánlatküldés</td>
                      <td className="p-3 border border-gray-100">Az érintett hozzájárulása (GDPR 6. cikk (1) a))</td>
                      <td className="p-3 border border-gray-100">5 év</td>
                    </tr>
                    <tr className="hover:bg-surface-alt/50">
                      <td className="p-3 border border-gray-100">Telefonszám</td>
                      <td className="p-3 border border-gray-100">Kapcsolattartás, egyeztetés</td>
                      <td className="p-3 border border-gray-100">Az érintett hozzájárulása (GDPR 6. cikk (1) a))</td>
                      <td className="p-3 border border-gray-100">5 év</td>
                    </tr>
                    <tr className="hover:bg-surface-alt/50">
                      <td className="p-3 border border-gray-100">Készülék és fej adatai</td>
                      <td className="p-3 border border-gray-100">Diagnosztika, árajánlat készítése</td>
                      <td className="p-3 border border-gray-100">Szerződés teljesítése (GDPR 6. cikk (1) b))</td>
                      <td className="p-3 border border-gray-100">5 év</td>
                    </tr>
                    <tr className="hover:bg-surface-alt/50">
                      <td className="p-3 border border-gray-100">Hibaleírás, csatolt fájlok</td>
                      <td className="p-3 border border-gray-100">Műszaki diagnosztika, javítás</td>
                      <td className="p-3 border border-gray-100">Szerződés teljesítése (GDPR 6. cikk (1) b))</td>
                      <td className="p-3 border border-gray-100">5 év</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                Az Adatkezelő adatkezelései az érintett önkéntes hozzájárulásán, illetve szerződés 
                teljesítéséhez fűződő jogos érdeken alapulnak. Az érintett hozzájárulását az adatkezelés 
                bármely szakaszában jogosult visszavonni, ami azonban nem érinti a visszavonás előtti 
                adatkezelés jogszerűségét.
              </p>
            </div>

            {/* 5. Adattárolás és adatbiztonság */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">5. Adattárolás és adatbiztonság</h2>
              <p className="mb-3">
                A Weboldalon keresztül megadott személyes adatok tárolása az Európai Unió területén 
                található szervereken történik. Az adatokhoz kizárólag az Adatkezelő erre felhatalmazott 
                munkatársai férhetnek hozzá, munkakörükhöz kapcsolódó feladataik ellátása érdekében.
              </p>
              <p className="mb-3">
                Az Adatkezelő a személyes adatok védelme érdekében az alábbi intézkedéseket alkalmazza:
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Az informatikai rendszerekhez való hozzáférés szigorú jogosultságkezelése</li>
                <li>Tűzfal és behatolásvédelmi rendszerek alkalmazása</li>
                <li>Titkosított adatkapcsolatok (SSL/TLS) használata a Weboldalon</li>
                <li>Rendszeres biztonsági mentések készítése</li>
                <li>Az alkalmazott szoftverek folyamatos frissítése és javítása</li>
                <li>Fizikai beléptetés-korlátozás az adatokat tároló eszközökhöz</li>
              </ul>
              <p>
                Az Adatkezelő az adatbiztonság szintjét rendszeresen felülvizsgálja, és a felmerülő 
                kockázatokkal arányos védelmi intézkedéseket alkalmaz.
              </p>
            </div>

            {/* 6. Adattovábbítás */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">6. Adattovábbítás és adatfeldolgozás</h2>
              <p className="mb-3">
                Az Adatkezelő a személyes adatokat harmadik fél számára nem értékesíti, nem adja bérbe, 
                és nem teszi közzé – kivéve, ha ahhoz az érintett kifejezetten hozzájárult, vagy azt 
                jogszabály kötelezően előírja.
              </p>
              <p className="mb-3">
                Az Adatkezelő a Weboldal üzemeltetéséhez tárhelyszolgáltatást vesz igénybe. A 
                tárhelyszolgáltató az Adatkezelővel kötött szerződés alapján, az Adatkezelő utasításainak 
                megfelelően kezeli a személyes adatokat, azokhoz önálló felhasználási joggal nem rendelkezik.
              </p>
              <p>
                Az Adatkezelő hatósági megkeresésre – a megkeresés pontos céljának és az igényelt adatok 
                körének ismeretében – kizárólag a megkeresés céljának megvalósításához elengedhetetlenül 
                szükséges személyes adatokat adja ki.
              </p>
            </div>

            {/* 7. Érintetti jogok */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">7. Az érintett jogai</h2>
              <p className="mb-3">
                Az érintett az Adatkezelőhöz címzett, az info@uhfej.hu e-mail címre küldött kérelemmel 
                gyakorolhatja az alábbi jogait. Az Adatkezelő a kérelmet a beérkezéstől számított legfeljebb 
                egy hónapon belül, indokolt esetben további két hónappal meghosszabbítva teljesíti.
              </p>

              <div className="space-y-5 mt-4">
                <div className="bg-surface-alt p-4 rounded-xl">
                  <h3 className="font-semibold text-primary mb-1">7.1. Tájékoztatáshoz és hozzáféréshez való jog</h3>
                  <p>Az érintett jogosult visszajelzést kapni arra vonatkozóan, hogy személyes adatainak kezelése folyamatban van-e, és ha igen, hozzáférést kaphat a kezelt adatokhoz, valamint az adatkezelés céljaira, jogalapjára, időtartamára, az adatok címzettjeire és az érintetti jogokra vonatkozó információkhoz.</p>
                </div>

                <div className="bg-surface-alt p-4 rounded-xl">
                  <h3 className="font-semibold text-primary mb-1">7.2. Helyesbítéshez való jog</h3>
                  <p>Az érintett kérheti a rá vonatkozó pontatlan személyes adatok helyesbítését, illetve a hiányos adatok kiegészítését.</p>
                </div>

                <div className="bg-surface-alt p-4 rounded-xl">
                  <h3 className="font-semibold text-primary mb-1">7.3. Törléshez való jog („elfeledtetéshez való jog”)</h3>
                  <p>Az érintett kérheti személyes adatainak törlését, amennyiben az adatkezelés célja megszűnt, az érintett visszavonja hozzájárulását, az adatkezelés jogellenes, vagy azt jogszabály írja elő. A törlés nem tagadható meg, ha az adatkezelésre jogi kötelezettség teljesítése vagy jogi igények érvényesítése érdekében van szükség.</p>
                </div>

                <div className="bg-surface-alt p-4 rounded-xl">
                  <h3 className="font-semibold text-primary mb-1">7.4. Az adatkezelés korlátozásához való jog</h3>
                  <p>Az érintett kérheti az adatkezelés korlátozását, ha vitatja az adatok pontosságát, az adatkezelés jogellenes, de ellenzi a törlést, az Adatkezelőnek már nincs szüksége az adatokra, de az érintett igényli azokat jogi igények érvényesítéséhez, vagy az érintett tiltakozott az adatkezelés ellen. A korlátozás időtartama alatt az adatok – a tárolás kivételével – kizárólag az érintett hozzájárulásával vagy meghatározott célokból kezelhetők.</p>
                </div>

                <div className="bg-surface-alt p-4 rounded-xl">
                  <h3 className="font-semibold text-primary mb-1">7.5. Adathordozhatósághoz való jog</h3>
                  <p>Az érintett jogosult arra, hogy az általa megadott személyes adatokat tagolt, széles körben használt, géppel olvasható formátumban megkapja, és ezeket az adatokat egy másik adatkezelőnek továbbítsa, amennyiben az adatkezelés hozzájáruláson vagy szerződésen alapul.</p>
                </div>

                <div className="bg-surface-alt p-4 rounded-xl">
                  <h3 className="font-semibold text-primary mb-1">7.6. Tiltakozáshoz való jog</h3>
                  <p>Az érintett a saját helyzetével kapcsolatos okokból bármikor tiltakozhat személyes adatainak kezelése ellen, ha az adatkezelés közérdekű feladat végrehajtásához vagy jogos érdek érvényesítéséhez szükséges. Tiltakozás esetén az Adatkezelő a személyes adatokat nem kezelheti tovább, kivéve, ha azt kényszerítő erejű jogos okok indokolják, amelyek elsőbbséget élveznek az érintett érdekeivel szemben.</p>
                </div>

                <div className="bg-surface-alt p-4 rounded-xl">
                  <h3 className="font-semibold text-primary mb-1">7.7. Hozzájárulás visszavonásának joga</h3>
                  <p>Az érintett a hozzájárulását bármikor visszavonhatja. A visszavonás nem érinti a korábbi, hozzájáruláson alapuló adatkezelés jogszerűségét.</p>
                </div>
              </div>
            </div>

            {/* 8. Jogorvoslat */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">8. Jogorvoslati lehetőségek</h2>
              
              <h3 className="font-semibold text-text-primary mb-2">8.1. Panasztétel a felügyeleti hatóságnál</h3>
              <p className="mb-3">
                Az érintett a jogainak megsértése esetén panasszal élhet a felügyeleti hatóságnál:
              </p>
              <div className="bg-surface-alt p-4 rounded-xl space-y-1 mb-4">
                <p><strong>Nemzeti Adatvédelmi és Információszabadság Hatóság</strong></p>
                <p>Székhely: 1055 Budapest, Falk Miksa utca 9-11.</p>
                <p>Levelezési cím: 1363 Budapest, Pf. 9.</p>
                <p>Telefon: +36 (1) 391-1400</p>
                <p>E-mail: ugyfelszolgalat@naih.hu</p>
                <p>Honlap: www.naih.hu</p>
              </div>

              <h3 className="font-semibold text-text-primary mb-2">8.2. Bírósághoz fordulás joga</h3>
              <p>
                Az érintett személyes adatai jogellenes kezelése esetén – választása szerint – az 
                Adatkezelő székhelye szerint illetékes törvényszék előtt, vagy a lakóhelye szerint 
                illetékes törvényszék előtt polgári pert indíthat. A bíróság az ügyben soron kívül jár el.
              </p>
            </div>

            {/* 9. Záró rendelkezések */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-4">9. Záró rendelkezések</h2>
              <p className="mb-3">
                Az Adatkezelő a jelen tájékoztatóban fel nem sorolt adatkezelésekről az adat felvételekor 
                ad tájékoztatást. Az Adatkezelő kötelezettséget vállal arra, hogy tevékenységével 
                kapcsolatos minden adatkezelés megfelel a jelen tájékoztatóban és a hatályos 
                jogszabályokban meghatározott elvárásoknak.
              </p>
              <p className="mb-3">
                Az Adatkezelő a hatóságok részére – amennyiben a hatóság a pontos célt és az adatok 
                körét megjelölte – személyes adatot csak annyit és olyan mértékben ad ki, amely a 
                megkeresés céljának megvalósításához elengedhetetlenül szükséges.
              </p>
              <p>
                Amennyiben a jelen tájékoztatóval vagy az adatkezeléssel kapcsolatban kérdése merül 
                fel, kérjük, vegye fel velünk a kapcsolatot az info@uhfej.hu e-mail címen.
              </p>
            </div>

            <div className="text-sm text-text-muted pt-6 border-t border-gray-100">
              <p>Utolsó módosítás: 2024. január 1.</p>
              <p>Jelen tájékoztató a www.uhfej.hu weboldalon folyamatosan elérhető.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

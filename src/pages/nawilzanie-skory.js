import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const NawilzanieSkory = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Nawilżanie skóry</h1>
        <section>
          <h2>
            Preparaty na bazie kwasu hialuronowego pozwalają w naturalny sposób
            nawilżyć skórę twarzy, szyi, dekoltu i dłoni.
          </h2>
        </section>
        <section>
          <p>
            Za stopień nawilżenia skóry odpowiedzialny jest kwas hialuronowy.
            Jest to substancja występująca naturalnie w skórze – stanowi aż 50%
            jej objętości. Kwas hialuronowy wypełnia wolne przestrzenie między
            komórkami, a jego funkcją jest wiązanie wody. Z biegiem lat ilość
            kwasu hialuronowego w tkankach maleje, stąd skóra staje się słabiej
            nawilżona, traci swą jędrność i sprężystość. Zaczynają pojawiać się
            zmarszczki. Dotyczy to nie tylko skóry twarzy, ale również szyi,
            dekoltu i dłoni. W tych miejscach oznaki starzenia widoczne są
            najszybciej.
          </p>
        </section>
        <section>
          <h3>
            Mezoterapia z wykorzystaniem kompleksu rozświetlająco-odmładzającego
          </h3>
          <p>
            Aby zatrzymać proces starzenia skóry i przywrócić nawilżenie skórze
            można przeprowadzić zabieg polegający na iniekcjach (mezoterapia)
            specjalnych preparatów (koktajli) z zawartością kwasu hialuronowego,
            aminokwasów, witamin, peptydów i minerałów.
          </p>
          <p>
            Stosowany przez nas preparat powoduje silną stymulację
            przeciwstarzeniową, poprawia koloryt i rozświetla skórę. Dedykowany
            jest do niwelowania oznak starzenia egzogennego spowodowanego
            fotostarzeniem, smogiem i zanieczyszczeniem środowiska. Składniki
            aktywne obecne w preparacie posiadają wysoki potencjał
            antyoksydacyjny i odmładzający, chroni i regeneruje DNA komórek.
            Zapobiega powstawaniu hiperpigmentacji posłonecznych (przebarwień) i
            pobudza remodeling kolagenu. Formuła przywraca skórze naturalny,
            piękny wyglą oraz młodzieńczy blask.
          </p>
        </section>
        <section>
          <h3>Jak przebiega zabieg?</h3>
          <p>
            Zabieg nawilżania skóry przeprowadzany jest przy wykorzystaniu
            urządzenia do mezoterapii podciśnieniowej. Dzięki temu uzyskujemy
            maksymalną skuteczność zabiegu. Zabieg można wykonać w znieczuleniu
            miejscowym. Po zabiegu mogą wystąpić miejscowo drobne siniaki i
            krwiaki – ryzyko zależy od predyspozycji Pacjenta i zwiększa się,
            gdy przed zabiegiem Pacjent przyjmuje leki wpływające na krzepnięcie
            krwi (np. aspirynę).
          </p>
          <p>
            Efekt terapeutyczny uzyskuje się po serii 4-6 zabiegów wykonywanych
            w odstępach 10-14 dniowych. Każdorazowo schemat terapii ustalany
            jest przez lekarza po analizie skóry Pacjenta.
          </p>
        </section>
        <section>
          <h3>Efekty zabiegu</h3>
          <ul>
            <li>
              Niwelowanie zmarszczek i oznak starzenia, pogrubienie struktury i
              jędrności skóry,
            </li>
            <li>Redukcja przebarwień i oznak fotostarzenia,</li>
            <li>Niwelowanie wolnych rodników i działanie antyglikacyjne,</li>
            <li>
              Rewitalizacja, nawodnienie i odmłodzenie skóry, w szczególności
              narażonej na oddziaływanie smogu i zanieczyszczeń powiertza.
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Nawilżanie skóry" description="Skuteczne nawilżanie skóry kwasem hialuronowym. Mezoterapia, vital injector, Dermapen. Umów wizytę!"/>
export default NawilzanieSkory

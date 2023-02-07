import * as React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const Toksyna = () => (
  <Layout>
    <div className="container pageContainer">
      <h1>Toksyna</h1>
      <section>
        <h2>Usuwanie głębokich zmarszczek mimicznych z użyciem toksyny</h2>
        <p>
          Głębokie zmarszczki dynamiczne (tzw. zmarszczki mimiczne) skutecznie
          usuwamy za pomocą toksyny. Substancja działa miejscowo, rozluźnia i
          wygładza zmarszczki. Toksyna to składnik aktywny wytwarzany przez
          beztlenowe szczepy bakterii z rodzaju Clostridium. Substancja aktywna
          podawana w miejscu widocznej, głębokiej zmarszczki mimicznej blokuje
          połączenie nerwów z tkanką mięśniową powodując paraliż mięśnia.
          Efektem działania preparatu jest widoczne miejscowe wygładzenie
          zmarszczki.
        </p>
        <p>
          Zabieg z użyciem toksyny wykonywany jest w celu redukcji zmarszczek
          mimicznych twarzy:
        </p>
        <ul>
          <li>zmarszczek między brwiami – “lwich zmarszczek”,</li>
          <li>zmarszczek poprzecznych czoła,</li>
          <li>zmarszczek wokół oczu – “kurzych łapek”,</li>
          <li>zmarszczek wokół ust, </li>
          <li>zmarszczek w okolicach powieki dolnej, </li>
          <li>zmarszczek w okolicach brody.</li>
        </ul>
        <p>
          W zależności od pierwotnej głębokości zmarszczki dobierana jest
          indywidualnie dla pacjenta właściwa dawka preparatu, który wprowadzany
          jest w miejsce powstania zmarszczki za pomocą strzykawki z cienką
          igłą. Zwykle substancję wstrzykuje się w kilka miejsc w bardzo małych
          ilościach. Minimalne dawki są całkowicie bezpieczne. Cały zabieg trwa
          około 15 minut. Zwykle znieczulenie nie jest konieczne, można jednak
          je podać na życzenie pacjenta. Efekty zabiegu widoczne są już po kilku
          dniach i utrzymują się przez 4-6 miesięcy.
        </p>
        <p>Zalecenia po zabiegu usuwania zmarszczek za pomocą toksyny: </p>
        <ul>
          <li>
            nie należy masować okolic, w które wstrzyknięta została toksyna{" "}
          </li>
          <li>
            przez 4 godziny po zabiegu nie należy pochylać głowy do przodu ani
            przebywać w pozycji leżącej
          </li>
          <li>należy unikać wysiłku fizycznego.</li>
        </ul>
      </section>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Toksyna" />

export default Toksyna

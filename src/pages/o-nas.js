import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const ONas = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>O nas</h1>
        <section>
          <h2>
          Dbamy kompleksowo nie tylko o wygląd, ale również o zdrowie, uśmiech i samopoczucie naszych Pacjentów.
          </h2>
        </section>
        <section>
          <h3>Dlaczego warto wybrać nasz gabinet?</h3>
          <p>
            Gabinet Medycyny Estetycznej Borczyk zlokalizowany jest na terenie
            Kliniki Implantologii i Stomatologii Estetycznej R. Borczyk w
            Katowicach. Kompleksowo dbamy nie tylko o uśmiech Pacjentów, ale
            również o ich młody wygląd, zdrowie i samopoczucie. Nasi
            wykwalifikowani lekarze wykonują pełen wachlarz zabiegów z zakresu
            medycyny estetycznej, a dostępny na miejscy dietetyk dba o
            prawidłowe odżywianie i smukłą sylwetkę Pacjentów.
          </p>
        </section>
        <section>
          <h3>Komfort i technologia</h3>
          <p>
            U nas możesz czuć się w pełni komfortowo. Przed lub po zabiegu
            uraczymy Cię pyszną kawą lub herbatą. Zabiegi wykonujemy w
            znieczuleniu miejscowym. Możesz również skorzystać z podtlenku azotu
            lub znieczulenia ogólnego. Aby zapewnić doskonałe efekty leczenia
            wyposażyliśmy gabinet w nowoczesny sprzęt m.in laser frakcyjny,
            urządzenie do mezoterapii podciśnieniowej Vital Injector 2,
            Dermapen, PELLEVE, urządzenie do stymulacji mięśni. Dla
            bezpieczeństwa stosujemy wyłacznie najwyższej jakości preparaty i
            kosmetyki renomowanych firm.
          </p>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Gabinet medycyny estetycznej Borczyk" />
export default ONas

import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const Lipoliza = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Lipoliza iniekcyjna</h1>
        <section>
          <h2>
            Chcesz w prosty i nieinwazyjny sposób pozbyć się zbędnego tłuszczu?
          </h2>
        </section>
        <section>
          <h3>Usuwanie tłuszczu bez skalpela</h3>
          <p>
            Lipoliza to metoda stosowana w medycynie estetycznej w celu redukcji
            tkanki tłuszczowej. Zabieg stanowi alternatywę dla metody
            chirurgicznej usuwania tłuszczu (liposukcji). Podczas zabiegu
            lipolizy preparat powodujący rozpuszczanie komórek tłuszczowych
            podawany jest w miejscu nagromadzenia tkanki tłuszczowej. Metoda
            jest bezpieczna, nie powoduje skutków ubocznych.
          </p>
        </section>
        <section>
          <h3>Dla kogo?</h3>
          <p>
            Zabieg wykonywany jest u osób, które ze względu na nadmiar tłuszczu
            odczuwają dyskomfort, a nie chcą poddać się zabiegom chirurgicznym
            lub nie mają motywacji by systematycznie ćwiczyć. Zabieg najczęściej
            wykonywany jest w miejscach, w których najtrudniej jest uzyskać
            pożądane rezultaty poprzez ćwiczenia sportowe – m.in. okolice
            brzucha (tzw. oponka), okolice kolan, talia. Lipolizę można także
            zastosować w okolicach twarzy – np. do redukcji podbródka,
            zmniejszenia policzków. Zawsze przed zabiegiem konieczna jest
            konsultacja z lekarzem, który ustali jakie okolice mogą zostać
            poddane terapii.
          </p>
          <p>
            Lipoliza iniekcyjna eliminuje miejscowo nagromadzoną tkankę
            tłuszczową i w żadnym wypadku nie pozwala wyleczyć otyłości. Jest to
            metoda stosowana w celu modelowania sylwetki. Metoda polecana jest
            osobom generalnie szczupłym, z miejscowym nadmiarem tkanki
            tłuszczowej.
          </p>
        </section>
        <section>
          <h3>
            Zaawansowany koncentrat peptydowy do niwelowania tkanki tłuszczowej
          </h3>
          <p>
            Zabieg lipolizy wykonywany jest przy użyciu koncentratu
            najsilniejszych substancji lipolitycznych, który powoduje
            enzymatyczną apoptozę adipocytów oraz uszkodzenie błon komórkowych,
            prowadząc do skutecznej redukcji lokalnej tkanki tłuszczowej i
            wygładzenia struktury skóry. Składniki aktywne preparatu gwarantują
            szybkie efekty zmniejszania obwodu tkanek. Formuła wzbogacona o
            L-karnitynę przyspiesza metabolizm uwolnionych kwasów tłuszczowych i
            optymalizuje działanie terapii. Poprzez stymulację produkcji
            kolagenu i krążenia preparat eliminuje efekt zwiotczenia tkanek. Pro
            zabiegu tkanki są gładkie, jędrne i widocznie wyszczuplone.
          </p>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Lipoliza iniekcyjna" />
export default Lipoliza

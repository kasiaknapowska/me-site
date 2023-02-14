import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const ZageszczanieWlosow = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Zagęszczanie włosów</h1>
        <section>
          <h2>
            Twoje włosy tracą gęstość i wypadają? Jesteś
            zmęczony/a stosowaniem kolejnych kosmetyków, które nie
            przynoszą efektów?
          </h2>
        </section>
        <section>
          <p>
            Stres, przemęczenie, nieodpowiednia dieta, przyjmowanie leków,
            anemia czy problemy z tarczycą, niewłaściwa pielęgnacja, czynniki
            genetyczne – to wszystko osłabia włosy i powoduje ich nadmierne
            wypadanie. A to odbija się na atrakcyjności i pogłębia jeszcze
            bardziej stres, który nasila utratę włosów. I koło się zamyka…
          </p>
          <p>
            Aby skutecznie poradzić sobie z problemem cienkich, wypadających
            włosów sama zmiana kosmetyków może okazać się niewystarczająca.
            Problem leży wewnątrz organizmu, dlatego trzeba najpierw poznać
            przyczynę przerzedzania włosów, wykonać odpowiednie badania
            laboratoryjne, przeprowadzić wywiad medyczny. Być może, by uporać
            się z problemem konieczna będzie modyfikacja stylu życia.
          </p>
          <p>
            Aby skutecznie poradzić sobie z utratą włosów opracowaliśmy dla
            naszych Pacjentów procedurę postępowania obejmującą dogłębną
            diagnostykę problemu, zindywidualizowany zestaw zaleceń oraz zabiegi
            zagęszczające włosy. Dzięki temu efekty leczenia są długotrwałe.
          </p>
          <p>Diagnostyka łysienia obejmuje:</p>
          <ul>
            <li>wywiad medyczny i badanie krwi</li>
            <li>badanie poziomu testosteronu</li>
            <li>
              szczegółowy wywiad pod kątem stylu życia, żywienia, predyspozycji
              genetycznych
            </li>
          </ul>
          <p>Leczenie opiera się m.in. na:</p>
          <ul>
            <li>uzupełnieniu mikroelementów i flory bakteryjnej</li>
            <li>wdrożeniu diety celowanej</li>
            <li>
              stymulacji regeneracji włosów poprzez mikroiniekcje własnych
              komórek macierzystych
            </li>
          </ul>
        </section>
        <section>
          <h3>Nieinwazyjne zagęszczanie włosów osoczem bogatopłytkowym</h3>
          <p>
            Za pomocą mezoterapii, będącej nieinwazyjną alternatywą dla
            chirurgicznych przeszczepów włosów, można skutecznie zagęszczać
            włosy poprzez aktywację i głębokie odżywianie cebulek włosowych.
            Podczas zabiegu do skóry głowy wprowadzane jest osocze
            bogatopłytkowe pobieranie z krwi pacjenta. Osocze powstrzymuje
            wypadanie włosów i stymulują nieaktywne cebulki włosowe do wzrostu.
            Dzięki temu uzyskuje się efekt pogrubienia i zagęszczenia włosów.
          </p>
        </section>
        <section>
          <h3>Bogaty kompleks rewitalizujący przeciw wypadaniu włosów</h3>
          <p>
            Obok osocza bogatopłytkowego podczas zabiegów zagęszczania włosów
            stosujemy także unikalny kompleks 26 składników o szerokim spektrum
            działania. Działanie preparatu oparte jest na mieszaninie peptydów
            biomimetycznych, czynników wzrostu, witamin, minerałów i
            aminokwasów. Dzięki dużej zawartości metabolitów i intensywnemu
            pobudzaniu mikrocyrkulacji krwi, preparat intensywnie zwiększa
            rozmiar mieszka włosowego, co powoduje jego lepsze zakotwiczenie i
            poprawę witalności włosa. Kompleks zapobiega nadmiernej utracie
            włosów, hamuje proces ich ścieńczenia i stymuluje ich wzrost.
            Zawartość peptydów gwarantuje wysoką efektywność i terapię celowaną
            na wszystkie problemy występujące w obrębie skóry głowy.
          </p>
          <p>Efekty zabiegu:</p>
          <ul>
            <li>Głęboka rewitalizacja i mineralizacja włosa,</li>
            <li>Zwiększenie grubości łodygi i wielkości mieszka włosowego, </li>
            <li>Przeciwdziałanie nadmiernej utracie włosów, </li>
            <li>
              Stymulacja wzrostu włosów poprzez wydłuzenie faz życiowych włosa,{" "}
            </li>
            <li>Poprawa ukrwienia skóry głowy.</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Zagęszczanie włosów" description="Na podstawie badań poznamy przyczynę wypadania włosów i wdrożymy celowane postępowanie. Za pomocą mikroiniekcji komórek macierzystych zagęścimy Twoje włosy, zwiększymy ich grubość i przyspieszymy wzrost."/>
export default ZageszczanieWlosow

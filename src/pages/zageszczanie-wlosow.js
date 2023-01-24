import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const ZageszczanieWlosow = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Zagęszczanie włosów</h1>
        <section>
          <h2>
            Borykasz się z problemem łysienia lub chcesz odzyskać mocne, zdrowe
            włosy?
          </h2>
        </section>
        <section>
          <h3>Szukamy przyczyn utraty włosów</h3>
          <p>
            Utrata włosów to dolegliwość występująca zarówno u mężczyzn jak i u
            kobiet. Istotne są tutaj predyspozycje genetyczne. Wpływ na stopień
            rozrzedzania włosów mają również takie czynniki jak: styl życia,
            nieodpowiednia dieta, stres, choroba. Utrata włosów następuje na
            skutek nieprawidłowego odżywiania cebulek i zaburzenia równowagi
            skóry głowy.
          </p>
          <p>
            Aby skutecznie poradzić sobie z problemem cienkich, wypadających
            włosów nie wystarczy wykonać kilku zabiegów, ponieważ efekt może nie
            być satysfakcjonujący. Problem leży wewnątrz organizmu, dlatego
            trzeba najpierw poznać przyczynę przerzedzania włosów, wykonać
            odpowiednie badania laboratoryjne, przeprowadzić wywiad medyczny.
            Być może, by uporać się z problemem konieczna będzie modyfikacja
            stylu życia.
          </p>
          <p>
            W naszym gabinecie właśnie w taki sposób leczymy łysienie.
            Rozpoczynamy od badań krwi, analizujemy stan zdrowia i styl życia
            Pacjenta, podpowiadamy, co zrobić, by zapobiec utracie włosów oraz
            wykonujemy szereg zabiegów zagęszczających włosy. Dzięki temu efekty
            leczenia są długotrwałe.
          </p>
        </section>
        <section>
          <h3>Nieinwazyjne zagęszczanie włosów osoczem bogatopłytkowym</h3>
          <p>
            Aby przywrócić włosom dawną objętość chirurgia plastyczna oferuje
            zabiegi przeszczepu włosów. Metoda jest inwazyjna, stąd nie wszyscy
            pacjenci skłonni są podjąć tego typu terapię. Alternatywą dla
            zabiegów przeszczepu włosów są nieinwazyjne zabiegi z zakresu
            medycyny estetycznej. Za pomocą mezoterapii można skutecznie
            zagęszczać włosy poprzez aktywację i głębokie odżywianie cebulek
            włosowych. Podczas zabiegu do skóry głowy wprowadzane jest
            iniekcyjnie osocze bogatopłytkowe pobieranie z krwi pacjenta. Osocze
            powstrzymuje wypadanie włosów i stymulują nieaktywne cebulki włosowe
            do wzrostu. Dzięki temu uzyskuje się efekt pogrubienia i
            zagęszczenia włosów.
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
export const Head = () => <Seo title="Zagęszczanie włosów" />
export default ZageszczanieWlosow

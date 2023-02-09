import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const Dietetyka = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Dietetyka</h1>
        <section>
          <h2>Jesteś tym, co jesz...</h2>
        </section>
        <section>
          <p>
            To, co jemy, ma ogromny wpływ nie tylko na naszą figurę, ale także
            na zdrowie. Bardzo ważne dla zdrowia jest utrzymanie prawidłowej
            flory bakteryjnej w jelitach. Spożywanie wysokoprzetworzonej
            żywności ma niekorzystny wpływ na florę jelitową. Konserwanty
            zawarte w takim pożywieniu (np. benzoesan sodu) niszczą nie tylko
            bakterie w produktach, przedłużając ich datę przydatności do
            spożycia, ale również niszczą „dobre” bakterie w naszych jelitach.
          </p>
          <p>
            Chemiczne dodatki do żywności, wszechobecny toksyczny plastik,
            nawozy, herbicydy zaburzają działanie systemu immunologicznego,
            powodują alergie oraz przyczyniają się do rozwoju chorób, w tym
            nowotworów.
          </p>
          <p>
            Prawidłowe nawyki dietetyczne przynoszą liczne korzyści Pacjentom:
          </p>
          <ul>
            <li>lepsze samopoczucie</li>
            <li>mniej stresu</li>
            <li>lepsza jakość skóry, włosów i paznokci</li>
            <li>młodszy wygląd</li>
            <li>utrzymanie prawidłowej masy ciała</li>
            <li>lepsze trawienie</li>
            <li>poprawa odporności</li>
            <li>pozytywny wpływ na efekty leczenia chorób</li>
            <li>zmniejszenie dolegliwości bólowych</li>
          </ul>
        </section>
        <section>
          <p>
            Terapia żywieniowa opiera się na stałej współpracy z dietetykiem
            klinicznym. Polega ona na odpowiedniej diagnostyce, doborze
            indywidualnej diety i suplementacji wg zapotrzebowania organizmu
            oraz edukacji żywieniowej.
          </p>
        </section>
        <section>
          <h3>Diagnostyka</h3>
          <p>
            Wykorzystujemy szereg narzędzi i metod pozwalających na jak
            najdokładniejsze poznanie potrzeb każdego pacjenta:
          </p>
          <ol>
            <li>
              Ankieta medyczna – uwzględniająca choroby, dolegliwości,
              przyjmowane leki, antybiotyki, suplementy, alergie i nietolerancje
              pokarmowe, poziom odporności.
            </li>
            <li>
              Szczegółowa ankieta dotycząca stylu życia - uwzględniająca
              wcześnie doświadczenia z dietami, aktywność fizyczną, styl życia,
              plan dnia, preferencje kulinarne, umiejętności kulinarne,
              możliwości czasowe, nałogi, stan psychofizyczny, poziom stresu.
            </li>
            <li>
              Badania medyczne wraz z analizą wyników przez lekarza i dietetyka
              klinicznego - analiza składu ciała metodą bioimpedancji
              elektrycznej, pomiar obwodów ciała, ocena parametrów życiowych,
              badania diagnostyczne na alergie i nietolerancje pokarmowe,
              analiza flory bakteryjnej jamy ustnej, morfologia krwi, CRP,
              poziom witaminy D, profil aminokwasów, poziom testosteronu.
            </li>
            <li>Interpretacja wyników pozostałych badań diagnostycznych.</li>
          </ol>
        </section>
        <section>
          <h3>Dieta celowana</h3>
          <p>
            Dietetyk ustala jadłospis oraz rodzaj posiłków dostosowany do
            potrzeb i preferencji Pacjenta. Jadłospisy są przejrzyste,
            praktyczne i łatwe do zastosowania w życiu codziennym. Uwzględniany
            jest czas przygotowania posiłków, ilość i rodzaj produktów, wszystko
            dostosowujemy do możliwości i stylu życia Pacjenta. Pacjent
            otrzymuje gotową listę zakupów, która ułatwia przystosowanie się do
            nowej rzeczywistości.
          </p>
        </section>
        <section>
          <h3>Prawidłowa suplementacja</h3>
          <p>
            Dostosowany do potrzeb dobór probiotyków i suplementów, w tym
            witaminy D, jest podstawą zachowania zdrowia i dobrego samopoczucia.
            Na podstawie wykonanych badań lekarz wraz z dietetykiem analizują
            indywidualne zapotrzebowanie organizmu i dobierają suplementację,
            która wraz z odpowiednią dietą skutecznie eliminuje niedobory
            witamin, mikro i makroelementów. Szczegółowo analizujemy skład
            proponowanych suplementów pod kątem ich działania, tak, aby ich
            zakup stanowił wartość dla zdrowia Pacjenta.
          </p>
        </section>
        <section>
          <h3>Edukacja żywieniowa</h3>
          <p>
            Naszym celem jest przygotowanie diety przyjaznej dla Pacjenta, nie
            wymagającej wielu poświęceń i nie nasilającej stresu. Wszystko
            dostosowane jest do możliwości Pacjenta. Chodzi nam o to, by dieta
            była przyjemnością, a nie dodatkowym stresem i obciążeniem
            psychicznym. Podczas terapii obalamy liczne mity żywieniowe,
            odpowiadamy na nurtujące pytania Pacjentów i rozwiewamy ich
            wątpliwości. Zmieniamy również podejście Pacjenta do żywienia
            (psychodietetyka), uświadamiamy, motywujemy. Edukujemy, jak wybierać
            produkty jak robić zakupy, jak czytać skład produktów i dobierać
            odpowiednie produkty dla danej osoby. Zależy nam, by tak zmienić
            nawyki Pacjenta, by po pewnym czasie bez specjalnie ustalonej diety,
            Pacjent był w stanie sam dobierać produkty i dania z korzyścią dla
            swojego zdrowia.
          </p>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Dietetyka" description="Prawidłowe nawyki żywieniowe przynoszą liczne korzyści - młodszy wygląd, zgrabna sylwetka, lepsze samopoczucie. Współpraca z naszym dietetykiem opiera się na odpowiedniej diagnostyce, ustaleniu diety celowanej, suplementacji oraz edukacji żywieniowej."/>
export default Dietetyka

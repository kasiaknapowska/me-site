import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const PolitykaPrywatnosci = () => {
  return (
    <Layout>
      <div className="container pageContainer">
        <h1>Polityka Prywatności</h1>
        <section>
          <h3>
            Informacje dla użytkowników strony www.medycynaestetycznaborczyk.pl
          </h3>
          <p>
            Zgodnie z Rozporządzeniem Parlamentu Europejskiego I Rady (UE)
            2016/679 z dnia 27 kwietnia 2016r, które wchodzi w życie dnia 25
            maja 2018 roku, związanych z ochroną osób fizycznych w związku z
            przetwarzaniem danych osobowych i ich swobodnym przepływem
            informujemy, że:
          </p>
          <ul>
            <li>
              Administratorem danych osobowych jest firma Roman Borczyk Klinika
              Implantologii i Stomatologii Estetycznej sp.j. w Katowicach, ul.
              Czajek 5a, 40-533 Katowice;
            </li>
            <li>
              Przysługuje Państwu prawo dostępu do treści danych osobowych, ich
              poprawienia, złożenia sprzeciwu wobec przetwarzania danych w
              celach marketingowych lub przekazania ich innym odbiorcom, w tym
              prawo do zaprzestania ich przetwarzania w celach marketingowych;
            </li>
            <li>
              Podanie danych oraz zgoda na ich przetwarzanie w celach nie
              związanych z procesem leczenia jest dobrowolna;
            </li>
            <li>
              Niniejsze zgody obejmują przetwarzanie danych w przyszłości, jeśli
              nie zmieni się cel przetwarzania lub jeśli zgoda nie zostanie
              cofnięta;
            </li>
            <li>
              Dostęp do Państwa danych osobowych w celu poprawienia, złożenia
              sprzeciwu wobec przetwarzania danych w celach marketingowych lub
              przekazania ich innym odbiorcom, w tym prawo do zaprzestania ich
              przetwarzania w celach marketingowych możliwy jest osobiście w
              recepcji Kliniki przy ulicy Czajek 5a, telefonicznie pod nr
              telefonu +48 32 606 04 27 lub mailowo pod adresem
              obsluga.pacjenta@borczyk.pl;
            </li>
          </ul>
        </section>
        <section id="zgoda">
          <h3>
            Zgoda na przetwarzanie danych udostępnionych za pośrednictwem
            formularza kontaktowego
          </h3>
          <p>
            Na podstawie art. 6 ust 1 lit a) Rozporządzenia Parlamentu
            Europejskiego i Radcy(UE) 2016/679 z dnia 27 kwietnia 2016 r. w
            sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
            osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia Dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
            danych) wyrażam zgodę na przetwarzanie danych osobowych zawartych w
            umowie i przekazanych dokumentach w celu obsługi kontaktu poprzez
            elektroniczny formularz kontaktu.
          </p>
          <p>
            Korzystając z formularza kontaktowego i przekazując za jego
            pośrednictwem jakiekolwiek dane osobowe przyjmuję do wiadomości, iż:
          </p>
          <ul>
            <li>
              Administratorem danych osobowych jest firma Roman Borczyk Klinika
              Implantologii i Stomatologii Estetycznej sp.j. w Katowicach, ul.
              Czajek 5a, 40-533 Katowice;
            </li>
            <li>
              Podanie danych jest dobrowolne, jednakże w celu otrzymania
              informacji zwrotnej ma charakter obowiązkowy;
            </li>
            <li>
              Celem przetwarzania danych jest nawiązanie kontaktu za
              pośrednictwem formularza znajdującego się na stronie
              Administratora;
            </li>
            <li>Odbiorcą danych jest Administrator;</li>
            <li>
              Dane nie będą przekazywane do państwa trzeciego ani do organizacji
              międzynarodowych;
            </li>
            <li>
              Dane będą przechowywane przez okres niezbędny dla utrzymywania
              kontaktu, a po jego zakończeniu ( o ile nie dojdzie do nawiązania
              dalszej współpracy) przez okres 10 lat;
            </li>
            <li>
              Mam prawo do dostępów do danych, żądania ich sprostowania,
              usunięcia, ograniczenia przetwarzania telefonicznie pod nr
              telefonu +48 32 606 04 27 lub mailowo pod adresem
              obsluga.pacjenta@borczyk.pl;
            </li>
            <li>
              Mam prawo do wycofania zgody na przetwarzanie danych osobowych w
              każdym momencie, wycofanie zgody na przetwarzanie danych osobowych
              w myśl art. 7 ust. 3 w/w Rozporządzenia nie wpływa na zgodność z
              prawem przetwarzania, którego dokonano na podstawie zgody przed
              jej wycofaniem;
            </li>
            <li>Mam prawo wniesienia skargi do organu nadzorczego, którym jest Urząd Ochrony Danych Osobowych;</li>
            <li>Dane nie będą profilowane;</li>
            <li>Mam prawdo do złożenia sprzeciwu w związku z przetwarzaniem danych osobowych.</li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}
export const Head = () => (
  <Seo title="Polityka prywatności Medycyna Estetyczna Borczyk" />
)
export default PolitykaPrywatnosci

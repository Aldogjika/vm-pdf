import React, { useState, useEffect } from "react";
import requests from "./requests";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import sectionOneImg from "./logo/images/section-1.png";
import sectionTwoImg from "./logo/images/Story-Telling.jpg";
import sectionThreeImg from "./logo/images/Zielsetzung.jpg";
import sectionFourImg from "./logo/images/handball.jpg";
import sectionFiveImg from "./logo/images/section-5.jpg";
import sectionSixImg from "./logo/images/section-6.jpg";

function App() {
  const [contentArray, setContentArray] = useState([
    {
      id: "part1",
      title: "Basic Thought Part I",
      // text: `Mit diesem Konzept zeige ich Profi-Sportvereinen und Unternehmen eine neue und innovative Sales-Strategie auf, wie sich virtuelle Rundgänge als Einkaufserlebnis für den Käufer/Fan oder spezifische Zielgruppen gewinnbringend für deren zukünftige Visual-Merch-Online-Shops einsetzen lassen. <br><br> Weiterhin stelle ich mit meinem Konzept einen Relaunch herkömmlicher Shop-in-Shop-Systeme vor - in Verbindung mit einer 3-D Visualisierung/Animation, sowie einem effizienten und integrierten Bezahlsystem - denn Visual Merchandising bedeutet für mich weit mehr als nur eine schlichte/weitere Verkaufsförderungsmaßname. <br><br> Ich bin der festen Überzeugung, dass eine effiziente Umsetzung und richtige Anwendung von meinem Konzept die Identifikation und Bindung des Fans mit seinem jeweiligen Verein und damit auch mit der Marke stärkt, das Kaufverhalten der jeweiligen Zielgruppen beeinflusst und somit letztlich den Merch-Umsatz signifikant erhöht. <br><br> Darüber hinaus ist es meine Intention, das Interesse für Visual Sport- Merchandising-Shopping zu wecken, zu inspirieren und potentielle „Berührungsängste“ abzubauen, um durch eine innovative Visualisierung der Merchandising-Produkte und durch deren optimale Präsentation, die Marke/den Verein noch stärker an die Fans/Zielgruppe zu binden. <br><br> Ein neues Merchandising-Setup als ein emotionales und ganzheitliches Marken- und Merchandising-Erlebnis für den jeweiligen Verein/Unternehmen zu realisieren; d.h. Merchandising-Produkte nicht nur individuell und personalisiert gestalten, sondern zukünftig intuitiver, spür- und erlebbarer in einer lässigen und entspannten Atmosphäre neu zu präsentieren!`,
      text: `Mit diesem Konzept - basierend auf einer selbstentwickelnden App und Browser Verion - möchte ich Profi-Sportvereinen und Unternehmen eine neue
      und innovative Sales-Strategie aufzeigen, wie sich virtuelle Shopping-Rundgänge als potentielles Einkaufserlebnis für den Fan / Käufer oder spezifische Zielgruppen gewinnbringend für zukünftige Visual-Merch-Online-Shops einsetzen lassen.
      <div class="app__extraSpace"></div>
      Darüber hinaus möchte ich mit meinem Konzept einen Relaunch herkömmlicher Shop-in-Shop-Systeme - in Verbindung mit einer 3-D Visualisierung / Animation - und mit einem smarten integrierten Bezahlsystem vorstellen. Ich bin der festen Überzeugung, dass eine erfolgteiche Umsetzung von meinem Konzept - in Verbindung mit der smarten Funktionsweise – dazu beitragen kann, die Identifikation und Bindung der Fans mit dem Verein / Marke zu verstärken, das Kaufverhalten der jeweiligen Zielgruppen zu beeinflusst und somit letztlich den Merch-Umsatz signifikant zu erhöht.
      <div class="app__extraSpace"></div> 
      <b>Stichwort:</b>  Höhere Verweildauer im Shop.
      <div class="app__extraSpace"></div> 
      Mit meiner Intention verfolge ich aber auch den Ansatz, dass Interesse für Visual Sport-Merchandising-Shopping zu verstärken und gleichzeitig zu inspirieren, um damit potentielle „Berührungsängste“ zukünftig abzubauen... <br>
      <b>Mit dem Ziel:</b> <br>
      Ein neues Merchandising-Setup als ein emotionales und ganzheitliches Marken - und Merchandising - Erlebnis für den jeweiligen Verein / Unternehmen zu realisieren; d.h. Merchandising-Produkte nicht nur individuell und personalisiert gestalten, sondern zukünftig intuitiver, spür - und erlebbarer in einer lässigen und entspannten Atmosphäre neu zu präsentieren.`,
      imgSrc: sectionOneImg,
    },
    {
      id: "part2",
      title: "Basic Thought Part II",
      // text: `Warum sollten wir uns damit zufriedengeben, durch ein Fenster in ein andere, zukunftsorientierte Welt nur zu blicken, wenn wir stattdesse durch dieses auch pro-aktiv hindurchtreten und teilnehmen können <br><br> Weshalb sollten wir Inhalte in zwei Dimensionen betrachten un konsumieren, anstatt diese in drei Dimensionen direkt in unser Lebenswelt und in unseren Entscheidungsprozess für Konsum/Kaufimpulse z integrieren und die gesamten Informationen daraus ganzheitlich z verarbeiten <br><br> <b> Gerade beim Sport spielen Emotionen eine große und entscheidende Rolle - aber auch bei Kaufentscheidungen in Form emotionaler Impulse - und diese wiederum ausgelöst durch neue Einkaufs- und Shoppingwelten - in Form eines virtuellen Rundgangs oder einer 3-D-Tour </b>`,
      text: `Warum sollten wir uns damit zufriedengeben, durch ein "Fenster" in eine andere, zukunftsorientierte Welt nur zu blicken, wenn wir stattdessen auch durch dieses "Fenster" pro-aktiv hindurchtreten und teilnehmen können?
      <div class="app__extraSpace"></div>
      Weshalb sollten wir Content in zwei Dimensionen betrachten und konsumieren, anstatt diesen Content in drei Dimensionen direkt in unsere persönliche Lebenswelt und in unseren Entscheidungsprozess für Konsum / Kaufimpulse zu integrieren, um damit die gesamten Informationen die wir daraus gewinnen, im Nachgang ganzheitlich auch zu verarbeiten?
      <div class="app__extraSpace"></div>
      Gerade beim Sport spielen Emotionen eine sehr große und entscheidende Rolle, aber auch bei persönlichen Kaufentscheidungen - in Form von emotionalen Impulsen - denn gerade diese Impulse können durch eine virtuelle Einkaufs - und Shoppingwelt - in Form eines virtuellen Rundgangs, oder einer 3-D-Tour ausgelöst und verstärkt werden.`,
      imgSrc: sectionTwoImg,
    },
    {
      id: "part3",
      title: "Zielsetzung",
      // text: " Ein neuartiges Einkaufserlebnis - durch lebendigere Inhalts- und Produktdarstellungen - zu generieren, das wiederum eine positive Resonanz auf das Kaufverhalten beim Konsumenten, d.h. Fan/Partnerunternehmen/Sponsoren erzeugt. <br><br> Diese Zielgruppen könnten das gesamte Merchandising-Produktportfolio von allen Seiten aktiv betrachten und digitalisiert eingespielte Produktinformationen erhalten, um so einen optimalen Eindruck von Größe, Form und ggf. sogar von den verwendeten und nachhaltigen Rohstoffen des jeweiligen Produktes zu bekommen. Durch ein überzeugendes Visual Merchandising können die Verkäufe durch neue optische Einflüsse gezielt gesteuert werden - quasi ein wortloser Kommunikationsweg zum Kunden/Fan, der somit in seiner Kaufentscheidung positiv beeinflusst werden kann. <br><br> Der „Digi-Merch-Shop“ als neues Profit-Center mit einem hohen ROI. Daraus ergeben sich auch weitere interessante Parameter für den Verein, wie z.B. optimierte Erkenntnisse über das Kaufverhalten von sog. „Rennern & Pennern“. Die daraus erhaltenen Erkenntnisse bilden die Basis für eine effiziente Portfolio-Optimierung und die zukünftige Merchandising-Ausrichtung. <br><br> Die optimale Waren- und Produktpräsentation in Verbindung mit ein auf den Verein abgestimmtes Story-Telling, welches die wichtige Verein/Unternehmen-Fan-Beziehung verstärkt, führt weiterhin zu einer zu einer positiven Customer Journey und letztlich zu einer zielführenden Umsatzsteigerung.",
      text: `Ein neuartiges Einkaufserlebnis, durch lebendigere Inhalts - und Produktdarstellungen zu generieren, welches wiederum eine positive Resonanz auf das persönliche Kaufverhalten beim Konsumenten, d.h. bei Fans / Partnerunternehmen / Sponsoren erzeugt.
      <div class="app__extraSpace"></div> 
      Diese spezifischen Zielgruppen könnten mit meinem Konzept und der Dartsellung, dass gesamte Merchandising-Produktportfolio von allen Seiten aktiv betrachten und digitalisiert eingespielte Produktinformationen erhalten, um so einen optimalen Eindruck von Größe, Form und ggf. sogar von den verwendeten Rohstoffen des jeweiligen Produktes zu bekommen.
      <div class="app__extraSpace"></div> 
      Durch ein überzeugendes Visual Merchandising können Verkäufe durch neue optische Einflüsse gezielt gesteuert werden - quasi ein wortloser Kommunikationsweg zum Kunden / Fan - der somit in seiner Kaufentscheidung positiv beeinflusst werden kann.
      <div class="app__extraSpace"></div> 
      <b>Ziel:</b> <br>
      + Der neue „Digi-Merch-Shop“ als neues Profit-Center, mit einem hohen ROI. Daraus ergeben sich auch weitere interessante Parameter für den Verein, wie z.B. optimierte Erkenntnisse über das Kaufverhalten von sog. „Rennern & Pennern“.
      Die daraus erhaltenen Erkenntnisse bilden die Basis für eine effiziente Portfolio-Optimierung und die zukünftige Merchandising-Ausrichtung.
      <div class="app__extraSpace"></div> 
      + Die optimale Waren - und Produktpräsentation in Verbindung mit einem - auf den Verein abgestimmtes Story-Telling - und der Funktion, die wichtige Beziehung zwischen Verein / Fan zu verstärken, führt weiterhin zu einer positiven Customer Journey und damit letztlich zu einer zielführenden Umsatz - und Ertragssteigerung.`,
      imgSrc: sectionThreeImg,
    },
    {
      id: "part4",
      title: "Story-Telling",
      // text: `<b>Story-Telling in Verbindung mit Visual Merchandising:</b> <br><br> Inszenierungen erzählen Geschichten, in denen sich der Kunde wiederfindet. Diese positiven Empfindungen erhöhen die Bereitschaft sich länger und „intensiver“ in einem Visual–Merch–Store aufzuhalten: Ich fühle mich wohl, ich fühle mich angesprochen – also versuche ich, dieses Gefühl beizubehalten. Ich schaue mich um, ich betrachte Dinge genauer, ich gehe in die Tiefe. <br><br> <b> Durch eine gute Umsetzung und Positionierung lassen Sie leblose Merchandising-Produkte lebendig erscheinen, mit dem Ziel: „Was ich jetzt finde, nehme ich mit“. Das ist der Belohnungseffekt. So wird aus einem „Das möchte ich vielleicht haben“ ein „Das brauche ich unbedingt“.</b> <br><br> <b>Authentizität und Präferenzen: </b> <br><br> Visual Merchandising sorgt auch dafür, dass ein Verein/ Unternehmen authentisch(er) ist. Von der Webseite, über Social Media, bis hin zum Store ist alles aus einem Guss und alles in einer Sprache. Authentizität ist hierbei eine der wichtigsten Parameter in der Kaufentscheidung. Wer nicht authentisch ist, verliert seine Kunden: </b> <br><br> + Übersichtlichkeit und Orientierung: durch kundenfreundliche Kategorisierung und zielführende Hinweisgeber für eine virtuelle Shopping-Tour, d.h. durch Eingabeoptionen/Filterung für die unterschiedlichen Merch-Produkte schnell und unkompliziert zum gewünschten Produkt gelangen.`,
      text: `Inszenierungen erzählen Geschichten, in denen sich auch der Fan / Kunde mit positiven Empfindungen / Impulsen wiederfinden kann. Diese positiven Empfindungen erhöhen die Bereitschaft, sich länger und „intensiver“ in einem Visual–Merch–Store aufzuhalten: <br>
      "Ich fühle mich wohl, ich fühle mich angesprochen" also versuche ich, dieses Gefühl beizubehalten. "Ich schaue mich um, ich betrachte Dinge genauer, ich gehe in die Tiefe".
      <div class="app__extraSpace"></div> 
      <b>Durch eine kreative visuelle Positionierung können leblose Merchandising-Produkte lebendig erscheinen, mit dem Ziel: <br> „Was ich jetzt finde, nehme ich mit“. Das ist der Belohnungseffekt. So wird aus einem „Das möchte ich vielleicht haben“ ein „Das brauche ich unbedingt“.
      <div class="app__extraSpace"></div> 
      Authentizität und Präferenzen: </b>
      <div class="app__extraSpace"></div> 
      Visual Merchandising sorgt auch dafür, dass ein Verein / Unternehmen authentisch(er) ist. Von der Webseite, über Social Media, bis hin zum Store ist alles aus einem Guss und alles in einer Sprache. Authentizität ist hierbei eine der wichtigsten Parameter in der Kaufentscheidung. Wer nicht authentisch ist, verliert seine Kunden...
      <div class="app__extraSpace"></div> 
      Übersichtlichkeit und Orientierung:<br>
      Durch kundenfreundliche Kategorisierung und zielführende Hinweisgeber / Tools für eine virtuelle Shopping-Tour, d.h. durch smarte Eingabeoptionen / Filterung für die unterschiedlichen Merch-Produkte schnell und unkompliziert zum gewünschten Produkt gelangen.`,
      imgSrc: sectionFourImg,
    },
    {
      id: "part5",
      title: "Authentizität Präferenzen",
      // text: "<b>(Fortsetzung)</b> <br><br> + Smarte Suchfunktionalität durch Spracheingabe-Optionen plus Persönlichkeit/Individualität (optional durch Spracheingabe und interaktive Assistenzsysteme, für einen Einkaufs-Support) <br><br> + Qualität (durch realistische Visualisierungen von Produkten und deren Eigenschaften, wie Größe und Form, die man an einen individuell gestaltbaren 3D-Korpus projizieren kann, um somit ein reales Bild der entsprechenden Produkte, wie z.B. Basecaps, Hoodies, Trikots usw. zu erhalten.<br><br> + Kunden bekommen, verglichen mit normalen Online-Shopping- Anwendungen, umfangreichere Informationen zu Produkten und deren Komponenten.<br><br> + VR-Kunden können 3D-gebrandete Merch-Produkte in ihrer eigentlichen Größe, Gewicht und Form in einer virtuellen 3D-Umgebung und über natürliche Nutzerschnittstellen „anfassen“, inspizieren und testen.",
      text: `<b>+ Smarte Suchfunktionalität </b> durch Spracheingabe-Optionen plus Persönlichkeit / Individualität (optional durch Spracheingabe und interaktive Assistenzsysteme für einen Einkaufs-Support).
      <div class="app__extraSpace"></div> 
      <b>+ Qualität </b> => durch realistische Visualisierungen von Produkten und deren Eigenschaften, wie Größe und Form, die man an einem individuell gestaltbaren 3D-Korpus projizieren kann, um somit ein reales Bild der entsprechenden Produkte, wie z.B. Basecaps, Hoodies, Trikots usw. zu erhalten.
      <div class="app__extraSpace"></div> 
      <b>+ Kunden / Fans </b> bekommen, verglichen mit normalen Online-Shopping-Anwendungen, umfangreichere Informationen zu Produkten und deren Komponenten. <br>  <b>Stichwort Nachhaltigkeit!</b>
      <div class="app__extraSpace"></div> 
      <b>+ VR-Kunden </b> können die - auf den Verein / Unternehmen abgestimmten 3D-Merch-Produkte - in ihrer eigentlichen Größe und Form in einer virtuellen 3D-Umgebung und über natürliche Nutzerschnittstellen „anfassen“, inspizieren und testen.`,
      imgSrc: sectionFiveImg,
    },
    {
      id: "part6",
      title: "Fazit",
      // text: `<b>Für mich ist es wichtig,</b> <br><br> ein innovatives, individuelles und verkaufsförderndes Vertriebskonzept für innovative Merchandising-Produkte für Vereine und Unternehmen zu kreieren und zu implementieren. <br><br> Ich möchte damit ein besonderes Augenmerk auf Individualität, Ressourcen und Umsetzbarkeit legen, aus denen sich potentielle Synergiepotentiale ergeben. Immerhin soll dieses Konzept so individuell, wie die selektierten und gebrandeten Merchandising-Produkte sein, damit eine hohe Identifikation zwischen Käufern, d.h. Fans, Partner, Sponsoren und dem jeweiligen Verein realisiert werden kann.<br><br> Ein neues, innovatives und stimmiges, sowie auf den Verein/Unternehmen abgestimmtes Merchandising-Konzept hilft den Verantwortlichen und den Entscheidungsträgern um mehr Umsatz, Erträge und neues Wachstum zu generieren. <br><br> Darüber hinaus kann ein Outsourcing sämtlicher operativer Prozesse in diesem Bereich nicht nur kosten- und personaloptimiert und somit effizienter genutzt werden, so dass das Management/Vereinsführung sich auf sein Kern-Business fokussieren kann. Dadurch könnten wiederum neue Synergiepotentiale generiert werden, die für eine zukünftig positive wirtschaftliche und finanzielle Entwicklung für jeden Verein/Unternehmen unabdingbar sind.<br><br> <b>Hans-Jörg Hollenbach</b>`,
      text: `<b>Für mich ist es wichtig...</b>
      <div class="app__extraSpace"></div> 
      ein innovatives, individuelles und verkaufsförderndes Vertriebskonzept für innovative Merchandising-Produkte zu kreieren und zu implementieren.
      <div class="app__extraSpace"></div> 
      Ich möchte damit ein besonderes Augenmerk auf Individualität, Ressourcen und Umsetzbarkeit legen, aus denen sich potentielle Synergiepotentiale ergeben. Immerhin soll dieses Konzept so individuell, wie die selektierten und individuellen Merchandising-Produkte sein, damit eine hohe Identifikation  zwischen Käufern, d.h. Fans, Partner, Sponsoren und dem jeweiligen Verein realisiert werden kann.
      <div class="app__extraSpace"></div> 
      Ein neues, innovatives und smartes, sowie auf den Verein / Unternehmen abgestimmtes Merchandising-Konzept supportet die Verantwortlichen / Entscheidungsträger dabei, in Zukunft mehr Umsatz, Erträge und neues Wachstum zu generieren.
      <div class="app__extraSpace"></div> 
      Darüber hinaus kann ein Outsourcing sämtlicher operativer Prozesse in diesem Bereich nicht nur kosten - und personaloptimiert und somit effizienter genutzt werden, so dass das Management / Vereinsführung sich auf sein Kern-Business fokussieren kann. Dadurch könnten wiederum neue Synergiepotentiale generiert werden, die für eine zukünftig positive wirtschaftliche und finanzielle Entwicklung für jeden Verein / Unternehmen unabdingbar sind.
      <div class="app__extraSpace"></div> 
      <b>Hans-Jörg Hollenbach</b>`,
      imgSrc: sectionSixImg,
    },
  ]);

  return (
    <div className="App">
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />

      {contentArray.map((item, index) => (
        <Row
          key={item.id}
          title={item.title}
          description={item.text}
          // imgUrl={requests.fetchTrending}
          imgUrl={item.imgSrc && item.imgSrc}
        />
      ))}
    </div>
  );
}

export default App;

// 2:37

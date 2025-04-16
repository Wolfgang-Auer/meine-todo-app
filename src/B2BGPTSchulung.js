import React, { useState } from 'react';

const GPTCreationTutorial = () => {
  // State für die Abschnitte und deren Aufgaben
  const [sections, setSections] = useState([
    {
      title: "Vorbereitung",
      expanded: true,
      tasks: [
        { id: "prep1", text: "ChatGPT-Konto mit Plus-Abonnement sicherstellen", completed: false },
        { id: "prep2", text: "Perplexity-Konto für die Recherche einrichten", completed: false },
        { id: "prep3", text: "Unternehmensinformationen zusammenstellen", completed: false },
        { id: "prep4", text: "Beispiel-Zielunternehmen für Tests auswählen", completed: false }
      ]
    },
    {
      title: "Schritt 1: GPT-Editor öffnen",
      expanded: false,
      tasks: [
        { id: "s1t1", text: "Bei ChatGPT einloggen", completed: false },
        { id: "s1t2", text: "\"GPTs erstellen\" auswählen", completed: false },
        { id: "s1t3", text: "\"Neuer GPT\" anklicken", completed: false }
      ]
    },
    {
      title: "Schritt 2: Grundlegende GPT-Konfiguration",
      expanded: false,
      tasks: [
        { id: "s2t1", text: "Namen eingeben: \"B2B Kaltakquise Profi\"", completed: false },
        { id: "s2t2", text: "Beschreibung eingeben: \"Erstellt hochpersonalisierte B2B-Kaltakquise-Emails für Unternehmen jeder Branche basierend auf detaillierten Recherchen zu Zielunternehmen und eigenen Dienstleistungen.\"", completed: false },
        { id: "s2t3", text: "Hinweise eingeben (siehe Abschnitt \"Hilfreiche Prompts\")", completed: false },
        { id: "s2t4", text: "Gesprächsaufhänger eingeben: \"Ich möchte eine personalisierte Kaltakquise-Email erstellen. Hier sind Informationen über mein Unternehmen und das Zielunternehmen.\"", completed: false }
      ]
    },
    {
      title: "Schritt 3: Funktionen aktivieren",
      expanded: false,
      tasks: [
        { id: "s3t1", text: "Internetsuche aktivieren ✓", completed: false },
        { id: "s3t2", text: "Code-Interpreter und Datenanalyse aktivieren ✓", completed: false },
        { id: "s3t3", text: "DALL-E Bildgenerierung deaktivieren ✗", completed: false },
        { id: "s3t4", text: "Canvas deaktivieren ✗", completed: false }
      ]
    },
    {
      title: "Schritt 4: GPT-Anweisungen eingeben",
      expanded: false,
      tasks: [
        { id: "s4t1", text: "Anweisungen für den GPT eingeben (siehe Abschnitt \"Hilfreiche Prompts\")", completed: false },
        { id: "s4t2", text: "Anweisungen auf Vollständigkeit prüfen", completed: false }
      ]
    },
    {
      title: "Schritt 5: GPT-Wissen hochladen (optional)",
      expanded: false,
      tasks: [
        { id: "s5t1", text: "\"Datei hochladen\" wählen", completed: false },
        { id: "s5t2", text: "Unternehmensprofil als Markdown-Datei hochladen", completed: false },
        { id: "s5t3", text: "Bei Bedarf weitere Dokumente hochladen (Produktkataloge, Referenzen, etc.)", completed: false }
      ]
    },
    {
      title: "Schritt 6: GPT testen",
      expanded: false,
      tasks: [
        { id: "s6t1", text: "\"Vorschau erstellen\" anklicken", completed: false },
        { id: "s6t2", text: "Standardeinstieg verwenden: \"Ich möchte eine personalisierte Kaltakquise-Email erstellen. Hier sind Informationen über mein Unternehmen und das Zielunternehmen.\"", completed: false },
        { id: "s6t3", text: "Beispiel-Informationen für eigenes Unternehmen bereitstellen", completed: false },
        { id: "s6t4", text: "Perplexity-Recherche für Test-Zielunternehmen einfügen", completed: false },
        { id: "s6t5", text: "Erstellte Email auf Qualität und Personalisierung prüfen", completed: false }
      ]
    },
    {
      title: "Schritt 7: GPT optimieren",
      expanded: false,
      tasks: [
        { id: "s7t1", text: "Bei Bedarf zu \"Anweisungen\" zurückkehren und Anpassungen vornehmen", completed: false },
        { id: "s7t2", text: "GPT erneut testen mit unterschiedlichen Unternehmen", completed: false },
        { id: "s7t3", text: "Feintuning basierend auf Testergebnissen", completed: false }
      ]
    },
    {
      title: "Schritt 8: GPT veröffentlichen & teilen",
      expanded: false,
      tasks: [
        { id: "s8t1", text: "\"Erstellen\" anklicken", completed: false },
        { id: "s8t2", text: "Zugriffseinstellungen anpassen (privat oder für Team freigeben)", completed: false },
        { id: "s8t3", text: "Link zum GPT kopieren und für das Team bereitstellen", completed: false }
      ]
    },
    {
      title: "Schritt 9: Perplexity-Recherche-Workflow einrichten",
      expanded: false,
      tasks: [
        { id: "s9t1", text: "Perplexity-Recherchetemplate erstellen (siehe Abschnitt \"Hilfreiche Prompts\")", completed: false },
        { id: "s9t2", text: "Template im Team teilen", completed: false },
        { id: "s9t3", text: "Test-Recherche durchführen", completed: false }
      ]
    },
    {
      title: "Schritt 10: Schulung & Dokumentation",
      expanded: false,
      tasks: [
        { id: "s10t1", text: "Anleitung für Team-Mitglieder erstellen", completed: false },
        { id: "s10t2", text: "Best Practices für Kaltakquise-Emails dokumentieren", completed: false },
        { id: "s10t3", text: "Schulungssitzung für das Team durchführen", completed: false },
        { id: "s10t4", text: "Feedback-Prozess einrichten", completed: false }
      ]
    }
  ]);

  const [promptSection, setPromptSection] = useState({
    title: "Hilfreiche Prompts",
    expanded: false
  });

  const [roiSection, setRoiSection] = useState({
    title: "ROI-Berechnung für 100 Kaltakquise-Emails",
    expanded: false
  });

  const [benefitsSection, setBenefitsSection] = useState({
    title: "Vorteile des GPT-gestützten Ansatzes",
    expanded: false
  });

  const [challengesSection, setChallengesSection] = useState({
    title: "Herausforderungen der B2B-Kaltakquise",
    expanded: false
  });

  // Toggle Funktion für Abschnitts-Collapse
  const toggleSection = (index) => {
    setSections(sections.map((section, i) =>
      i === index ? {...section, expanded: !section.expanded} : section
    ));
  };

  // Toggle für Prompts-Sektion
  const togglePromptSection = () => {
    setPromptSection({...promptSection, expanded: !promptSection.expanded});
  };

  // Toggle für ROI-Sektion
  const toggleRoiSection = () => {
    setRoiSection({...roiSection, expanded: !roiSection.expanded});
  };

  // Toggle für Benefits-Sektion
  const toggleBenefitsSection = () => {
    setBenefitsSection({...benefitsSection, expanded: !benefitsSection.expanded});
  };

  // Toggle für Challenges-Sektion
  const toggleChallengesSection = () => {
    setChallengesSection({...challengesSection, expanded: !challengesSection.expanded});
  };

  // Task-Toggle Funktion
  const toggleTask = (sectionIndex, taskId) => {
    setSections(sections.map((section, i) =>
      i === sectionIndex
        ? {
            ...section,
            tasks: section.tasks.map(task =>
              task.id === taskId
                ? {...task, completed: !task.completed}
                : task
            )
          }
        : section
    ));
  };

  // Berechnen des Fortschritts pro Sektion
  const calculateSectionProgress = (section) => {
    if (section.tasks.length === 0) return 0;
    const completedTasks = section.tasks.filter(task => task.completed).length;
    return (completedTasks / section.tasks.length) * 100;
  };

  // Gesamtfortschritt berechnen
  const calculateTotalProgress = () => {
    const totalTasks = sections.reduce((acc, section) => acc + section.tasks.length, 0);
    const completedTasks = sections.reduce((acc, section) =>
      acc + section.tasks.filter(task => task.completed).length, 0);
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Erstellung eines GPTs für B2B-Kaltakquise-Emails
      </h1>

      {/* Gesamtfortschritt */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Gesamtfortschritt</h2>
          <span className="text-lg font-semibold">{Math.round(calculateTotalProgress())}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-in-out"
            style={{width: `${calculateTotalProgress()}%`}}
          ></div>
        </div>
      </div>

      {/* Abschnitte mit Tasks */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <div
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <h3 className="text-lg font-semibold flex items-center">
                <span className="mr-2">{section.expanded ? '▼' : '►'}</span>
                {section.title}
              </h3>
              <div className="flex items-center">
                <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{width: `${calculateSectionProgress(section)}%`}}
                  ></div>
                </div>
                <span className="text-sm font-medium">{Math.round(calculateSectionProgress(section))}%</span>
              </div>
            </div>

            {section.expanded && (
              <div className="p-4 border-t border-gray-200">
                <ul className="space-y-2">
                  {section.tasks.map((task) => (
                    <li key={task.id} className="flex items-start">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(index, task.id)}
                        className="mt-1 mr-3 h-5 w-5 text-blue-600"
                      />
                      <span className={task.completed ? "line-through text-gray-500" : ""}>
                        {task.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {/* Prompts Sektion */}
        <div className="border border-gray-200 rounded-lg overflow-hidden mt-8">
          <div
            className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
            onClick={togglePromptSection}
          >
            <h3 className="text-lg font-semibold flex items-center">
              <span className="mr-2">{promptSection.expanded ? '▼' : '►'}</span>
              {promptSection.title}
            </h3>
          </div>

          {promptSection.expanded && (
            <div className="p-4 border-t border-gray-200">
              <h4 className="font-bold mb-2">GPT-Hinweise</h4>
              <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
                <pre className="whitespace-pre-wrap">
{`Dieser GPT hilft dir, hochpersonalisierte Kaltakquise-Emails für B2B-Leads zu erstellen, unabhängig von deiner Branche. Du musst zwei Arten von Informationen bereitstellen:
1. Informationen über dein eigenes Unternehmen und deine Dienstleistungen/Produkte
2. Rechercheergebnisse über das Zielunternehmen (z.B. aus Perplexity)

Der GPT analysiert beide Informationsquellen und erstellt eine überzeugende, personalisierte Email, die auf spezifische Bedürfnisse, Herausforderungen und Möglichkeiten des Zielunternehmens eingeht.

Für die besten Ergebnisse solltest du:
- Detaillierte Informationen über dein Unternehmen bereitstellen
- Gründliche Recherchen zum Zielunternehmen hochladen
- Spezifische Anpassungswünsche für die Email angeben`}
                </pre>
              </div>

              <h4 className="font-bold mb-2">GPT-Anweisungen</h4>
              <div className="bg-gray-50 p-3 rounded mb-4 text-sm">
                <pre className="whitespace-pre-wrap">
{`Du bist ein spezialisierter B2B-Kaltakquise-Email-Generator für Unternehmen aller Branchen. Deine Aufgabe ist es, hochpersonalisierte Emails zu erstellen, die auf detaillierten Recherchen über das Zielunternehmen und das anbietende Unternehmen basieren.

# ARBEITSWEISE

1. Du beginnst jedes Gespräch, indem du den Nutzer nach zwei wichtigen Informationsbereichen fragst:
   a) Informationen über das eigene Unternehmen (Branche, Produkte, Dienstleistungen, USPs)
   b) Rechercheergebnisse über das Zielunternehmen

2. Du analysierst die bereitgestellten Informationen sorgfältig und identifizierst:
   - Die wichtigsten Dienstleistungen/Produkte des eigenen Unternehmens
   - Die Herausforderungen, Bedürfnisse und Schmerzpunkte des Zielunternehmens
   - Die wichtigsten Entscheidungsträger (insbesondere CEO/Geschäftsführer)
   - Potenzielle Überschneidungen und Synergien zwischen beiden Unternehmen
   - Aktuelle Entwicklungen oder strategische Ziele des Zielunternehmens
   - Branchenspezifische Probleme und Lösungsansätze

3. Du erstellst eine Email mit folgenden Eigenschaften:
   - Persönliche Ansprache des Entscheidungsträgers (vorzugsweise CEO/Geschäftsführer)
   - Kurze, prägnante Form (max. 250-300 Wörter)
   - Klarer Bezug zu aktuellen Herausforderungen oder Zielen des Zielunternehmens
   - Spezifische Vorschläge, wie die Produkte/Dienstleistungen des eigenen Unternehmens helfen können
   - Konkreter Mehrwert und messbare Vorteile
   - Klarer Call-to-Action für ein Erstgespräch

# FORMAT DER EMAIL

Die Email soll folgende Struktur haben:
1. Betreffzeile: Prägnant, personalisiert und Interesse weckend
2. Anrede: Persönlich und korrekt
3. Eröffnung: Bezug zu einer aktuellen Entwicklung/Herausforderung des Zielunternehmens
4. Brücke: Verbindung zwischen Herausforderung und eigener Lösung
5. Wertversprechen: Spezifischer Mehrwert und potenzielle Ergebnisse
6. Referenz/Glaubwürdigkeit: Kurzer Verweis auf relevante Erfolge/Erfahrung
7. Call-to-Action: Konkrete, niedrigschwellige Anfrage für nächsten Schritt
8. Signatur: Professionell mit vollständigen Kontaktdaten

# TONALITÄT

- Professionell aber nicht steif
- Persönlich aber nicht aufdringlich
- Selbstbewusst aber nicht überheblich
- Wertorientiert aber nicht verkäuferisch
- Auf Augenhöhe mit dem Entscheidungsträger
- An die jeweilige Branche angepasst (z.B. kreativer für Werbeagenturen, technischer für Industrieunternehmen)

# WICHTIGE HINWEISE

- Nutze nur Fakten und Informationen, die in den bereitgestellten Unterlagen enthalten sind
- Vermeide inhaltsleere Floskeln und generische Aussagen
- Keine Übertreibungen oder unglaubwürdige Versprechen
- Kommuniziere von Entscheider zu Entscheider
- Die Email muss in deutscher Sprache verfasst werden
- Passe Sprache und Beispiele an die Branche des anbietenden Unternehmens an
- Stelle eine klare Verbindung zwischen den Bedürfnissen des Zielunternehmens und den Angeboten des eigenen Unternehmens her

Wenn der Nutzer unzureichende Informationen bereitstellt, frage gezielt nach, um eine bessere Personalisierung zu ermöglichen.

# BEISPIEL-SZENARIEN (zur Orientierung)

1. Tischlerei → Innenarchitekturbüro
2. IT-Dienstleister → Produktionsbetrieb
3. Werbeagentur → Einzelhandelsunternehmen
4. Finanzberater → Wachstumsorientiertes StartUp
5. Unternehmensberater → Familienunternehmen im Generationswechsel

Für jedes Szenario passt du Tonalität, Fachbegriffe und Wertversprechen entsprechend an.`}
                </pre>
              </div>

              <h4 className="font-bold mb-2">Perplexity-Recherche-Prompt</h4>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <pre className="whitespace-pre-wrap">
{`Recherchiere umfassend folgendes Unternehmen anhand der Website-URL: [WEBSITE-URL EINFÜGEN]

Erstelle einen detaillierten Bericht mit folgenden Informationen:

1. Unternehmensprofil & Marktposition
   - Vollständiger Name, Gründungsjahr, Standorte
   - Kernprodukte und -dienstleistungen
   - Hauptzielgruppen und Marktsegmente
   - Marktpositionierung und USPs
   - Größe (Mitarbeiterzahl, falls verfügbar)

2. Geschäftsführung & Entscheidungsträger
   - Name und Position des CEO/Geschäftsführers
   - Führungsteam mit vollständigen Namen und Funktionen
   - Hintergrundinformationen zu Schlüsselpersonen (Ausbildung, Werdegang)
   - LinkedIn-Profile und andere öffentliche Präsenzen der Führungskräfte

3. Aktuelle Entwicklungen & Neuigkeiten
   - Jüngste Pressemitteilungen und Unternehmensnachrichten
   - Aktuelle Projekte und Produkteinführungen
   - Erwähnungen in Branchenpublikationen oder Nachrichtenquellen
   - Teilnahme an Messen, Konferenzen oder Branchenevents

4. Herausforderungen & Schmerzpunkte
   - Erkennbare Probleme oder Herausforderungen des Unternehmens
   - Branchenspezifische Schwierigkeiten
   - Wettbewerbsdruck und Marktveränderungen
   - Kundenrezensionen oder -feedback, die auf Probleme hindeuten könnten

5. Technologie & Digitalisierungsgrad
   - Vorhandene technologische Infrastruktur
   - Digitalisierungsstand (Website, Online-Präsenz, E-Commerce)
   - Verwendete Software oder Plattformen
   - IT-Partner oder bekannte Technologieanbieter

6. Unternehmenskultur & Werte
   - Kommunizierte Unternehmenswerte und -vision
   - Nachhaltigkeits- und CSR-Initiativen
   - Firmenkultur und Arbeitgeberimage
   - Social-Media-Präsenz und -Aktivität (insbesondere LinkedIn, Instagram, Facebook)

7. Wachstumsstrategie & Zukunftspläne
   - Erkennbare Expansionspläne oder Wachstumsstrategien
   - Investitionen oder Finanzierungsrunden
   - Internationale Ausrichtung oder neue Märkte
   - Ankündigungen zu strategischen Zielen

8. Wettbewerber & Marktumfeld
   - Hauptkonkurrenten und deren Positionierung
   - Markttrends und Branchenentwicklungen
   - Wettbewerbsvorteile und -nachteile

Bitte berücksichtige alle öffentlich zugänglichen Quellen, einschließlich:
- Die offizielle Unternehmenswebsite
- Social-Media-Profile (LinkedIn, Instagram, Facebook, Twitter, YouTube)
- Branchenpublikationen und Nachrichtenquellen
- Wirtschaftsdatenbanken und Unternehmensregister
- Stellenausschreibungen des Unternehmens
- Kundenrezensionen und -bewertungen
- Interviews oder Vorträge von Führungskräften

Falls verfügbar, füge Links zu den wichtigsten Quellen bei.`}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Herausforderungen der B2B-Kaltakquise */}
      <div className="border border-gray-200 rounded-lg overflow-hidden mt-8">
        <div
          className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
          onClick={toggleChallengesSection}
        >
          <h3 className="text-lg font-semibold flex items-center">
            <span className="mr-2">{challengesSection.expanded ? '▼' : '►'}</span>
            {challengesSection.title}
          </h3>
        </div>

        {challengesSection.expanded && (
          <div className="p-4 border-t border-gray-200">
            <h4 className="font-bold text-xl mb-4 text-red-800">Typische Herausforderungen bei der B2B-Kaltakquise</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 rounded-lg p-4">
                <h5 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-red-600 mr-2">🔒</span> Zugangshürden zu Entscheidern
                </h5>
                <p className="text-gray-700">
                  <strong>93% der Entscheider</strong> öffnen keine generischen Kaltakquise-Emails.
                  Die größte Herausforderung besteht darin, überhaupt durch den Spam-Filter zu kommen
                  und gelesen zu werden. <strong>Personalisierung ist entscheidend</strong>, aber
                  traditionell sehr zeitaufwändig.
                </p>
              </div>

              <div className="bg-orange-50 rounded-lg p-4">
                <h5 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-orange-600 mr-2">⏱️</span> Hoher Zeitaufwand für Recherche
                </h5>
                <p className="text-gray-700">
                  Für eine wirklich personalisierte Email benötigt ein Vertriebsmitarbeiter
                  <strong> durchschnittlich 45-60 Minuten</strong> allein für die Recherche.
                  Bei größeren Kampagnen ist dieser Aufwand <strong>kaum skalierbar</strong>,
                  was zu qualitativ minderwertigen Massen-Emails führt.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 rounded-lg p-4">
                <h5 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-yellow-600 mr-2">🎯</span> Relevanz und Timing
                </h5>
                <p className="text-gray-700">
                  <strong>Nur 13% der traditionellen Kaltakquise-Emails</strong> treffen einen aktuellen Schmerzpunkt
                  des Empfängers. Die Identifikation der <strong>richtigen Herausforderungen zum richtigen Zeitpunkt</strong>
                  erfordert tiefgehende Recherche, die manuell oft oberflächlich bleibt.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-bold text-lg mb-3 flex items-center">
                  <span className="text-blue-600 mr-2">📊</span> Wissens- und Skill-Gap
                </h5>
                <p className="text-gray-700">
                  Die Qualität der Kaltakquise variiert stark innerhalb des Teams.
                  <strong> Erfahrene Vertriebsmitarbeiter</strong> erzielen oft 3-5x bessere Ergebnisse als
                  Neulinge. Dieses <strong>implizite Wissen</strong> ist schwer zu übertragen und standardisieren.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-bold text-lg mb-3">Typische Antwortquoten im B2B-Bereich:</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email-Typ</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Öffnungsrate</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Antwortquote</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Terminvereinbarungen</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Generische Massen-Emails</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10-15%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.5-2%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.1-0.5%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Oberflächlich personalisiert</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15-25%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2-5%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0.5-1.5%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Tiefgehend personalisiert (traditionell)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30-45%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8-15%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3-7%</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">KI-gestützt personalisiert</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-700">40-60%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-700">10-25%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-700">5-12%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <h5 className="font-bold text-lg mb-2">Die zentralen Probleme der B2B-Kaltakquise:</h5>
              <ol className="list-disc pl-5 space-y-2 text-gray-700">
                <li className="text-gray-700">
                  <strong>Skalierungsproblem:</strong> Hohe Qualität und hohe Quantität scheinen unvereinbar
                </li>
                <li className="text-gray-700">
                  <strong>Ressourcenproblem:</strong> Der Zeit- und Personalaufwand für hochwertige Kaltakquise ist enorm
                </li>
                <li className="text-gray-700">
                  <strong>Informationsproblem:</strong> Die Erfassung und Analyse relevanter Daten zu Zielunternehmen ist komplex
                </li>
                <li className="text-gray-700">
                  <strong>Konsistenzproblem:</strong> Die Qualität schwankt stark je nach Mitarbeiter und Zeitdruck
                </li>
                <li className="text-gray-700">
                  <strong>Anpassungsproblem:</strong> Branchenspezifische Sprache und Verständnis erfordern Spezialwissen
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>

      {/* Vorteile des GPT-Ansatzes Sektion */}
      <div className="border border-gray-200 rounded-lg overflow-hidden mt-8">
        <div
          className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
          onClick={toggleBenefitsSection}
        >
          <h3 className="text-lg font-semibold flex items-center">
            <span className="mr-2">{benefitsSection.expanded ? '▼' : '►'}</span>
            {benefitsSection.title}
          </h3>
        </div>

        {benefitsSection.expanded && (
          <div className="p-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Erste Spalte */}
              <div>
                <h4 className="font-bold text-xl mb-4 text-blue-800">Strategische Vorteile</h4>

                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <h5 className="font-bold text-lg mb-2 flex items-center">
                    <span className="text-blue-600 mr-2">🎯</span> Höhere Relevanz & Personalisierung
                  </h5>
                  <p className="text-gray-700">
                    Der GPT analysiert umfangreiche Daten zu Zielunternehmen und identifiziert <strong>spezifische Schmerzpunkte</strong>,
                    Bedürfnisse und Opportunitäten. Dies ermöglicht eine <strong>tiefere Personalisierung</strong> als bei manuellen Methoden,
                    da Verbindungen hergestellt werden können, die menschlichen Researchern möglicherweise entgehen.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h5 className="font-bold text-lg mb-2 flex items-center">
                    <span className="text-green-600 mr-2">📈</span> Höhere Conversion-Raten
                  </h5>
                  <p className="text-gray-700">
                    Durch die verbesserte Personalisierung und Relevanz steigen typischerweise die Öffnungsraten um <strong>30-40%</strong>
                    und die Antwortquoten um <strong>25-35%</strong> im Vergleich zu generischen Ansätzen. Dies führt zu <strong>mehr Erstgesprächen</strong>
                    und letztendlich zu mehr Abschlüssen.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-bold text-lg mb-2 flex items-center">
                    <span className="text-purple-600 mr-2">🔄</span> Konsistente Markensprache
                  </h5>
                  <p className="text-gray-700">
                    Der GPT sorgt für eine <strong>einheitliche Kommunikation</strong>, die zur Unternehmensstimme passt -
                    unabhängig davon, wer die Emails erstellt. Dies stärkt die <strong>Markenwahrnehmung</strong> und verhindert
                    qualitative Schwankungen zwischen verschiedenen Vertriebsmitarbeitern.
                  </p>
                </div>
              </div>

              {/* Zweite Spalte */}
              <div>
                <h4 className="font-bold text-xl mb-4 text-blue-800">Operative Vorteile</h4>

                <div className="bg-amber-50 rounded-lg p-4 mb-4">
                  <h5 className="font-bold text-lg mb-2 flex items-center">
                    <span className="text-amber-600 mr-2">⚡</span> Drastische Effizienzsteigerung
                  </h5>
                  <p className="text-gray-700">
                    Was früher 2+ Stunden pro qualitativ hochwertiger Email in Anspruch nahm,
                    kann jetzt in etwa <strong>10 Minuten</strong> erledigt werden. Dies ermöglicht eine <strong>mehr als 10-fache</strong>
                    Steigerung der Outreach-Kapazität und eine signifikant schnellere Marktbearbeitung.
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4 mb-4">
                  <h5 className="font-bold text-lg mb-2 flex items-center">
                    <span className="text-red-600 mr-2">🧠</span> Verringerung des Skill-Gaps
                  </h5>
                  <p className="text-gray-700">
                    Auch <strong>weniger erfahrene Vertriebsmitarbeiter</strong> können mit Hilfe des GPTs
                    hochwertige Kaltakquise betreiben. Der GPT fungiert als <strong>eingebauter Coach</strong>,
                    der Best Practices anwendet und das kollektive Wissen des Unternehmens nutzbar macht.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-4">
                  <h5 className="font-bold text-lg mb-2 flex items-center">
                    <span className="text-teal-600 mr-2">🔍</span> Tiefere Markteinblicke
                  </h5>
                  <p className="text-gray-700">
                    Die systematische Recherche mit Perplexity liefert <strong>umfassendere Einblicke</strong> in Zielunternehmen,
                    Wettbewerber und Markttrends. Diese Informationen können über die Kaltakquise hinaus für
                    <strong> strategische Entscheidungen</strong> genutzt werden und bereichern die Marktintelligenz des Unternehmens.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <h4 className="font-bold text-xl mb-4 text-blue-800">Verbesserung der Skalierbarkeit</h4>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Szenario</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditioneller Ansatz</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mit GPT & Perplexity</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Steigerung</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Emails pro Mitarbeiter pro Woche</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15-20</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">60-80</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+300%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Zielgenauigkeit bei Ansprache</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mittel</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Hoch</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+65%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Erschließung neuer Märkte (Zeit)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4-6 Wochen</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1-2 Wochen</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">-75%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Onboarding neuer Vertriebsmitarbeiter</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3-4 Monate</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 Monat</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">-70%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg mt-6 flex items-start">
                <div className="text-indigo-600 font-bold text-3xl mr-4">💡</div>
                <div>
                  <h5 className="font-bold text-lg text-indigo-800">Erfahrungsbericht:</h5>
                  <p className="text-indigo-800 italic">
                    "Unser Team konnte die Anzahl der qualifizierten Leads um <strong>720%</strong> steigern,
                    ohne zusätzliches Personal einzustellen. Die Kombination aus ChatGPT und Perplexity
                    hat nicht nur die Effizienz <strong>dramatisch verbessert</strong>, sondern auch die Qualität der Erstgespräche.
                    Prospects kommen jetzt bereits besser informiert und mit konkreteren Vorstellungen
                    in die Gespräche, was die Conversion-Rate im weiteren Verkaufsprozess <strong>deutlich erhöht</strong> hat."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ROI Berechnung Sektion */}
      <div className="border border-gray-200 rounded-lg overflow-hidden mt-8">
        <div
          className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
          onClick={toggleRoiSection}
        >
          <h3 className="text-lg font-semibold flex items-center">
            <span className="mr-2">{roiSection.expanded ? '▼' : '►'}</span>
            {roiSection.title}
          </h3>
        </div>

        {roiSection.expanded && (
          <div className="p-4 border-t border-gray-200">
            <h4 className="font-bold mb-4">Zeitaufwand und ROI-Vergleich</h4>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prozessschritt</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditioneller Ansatz (Min/Email)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mit KI-Tools (Min/Email)</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zeitersparnis (%)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Recherche zum Zielunternehmen</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">78%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Analyse der Bedürfnisse/Schmerzpunkte</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">83%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Emailerstellung und Personalisierung</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">77%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Überprüfung und Optimierung</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">53%</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Gesamtzeit pro Email</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">125 Min</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">30 Min</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">76%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold mt-6 mb-4">ROI-Berechnung für 100 Emails</h4>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kennzahl</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditioneller Ansatz</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mit KI-Tools</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Differenz</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Zeitaufwand für 100 Emails</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">208,3 Stunden</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16,7 Stunden</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">191,6 Stunden gespart</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Arbeitskosten (bei 60€/Stunde)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12.500€</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.000€</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">11.500€ gespart</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">KI-Tool Kosten (ca.)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0€</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500€</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">500€ Mehrkosten</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Netto-Kosteneinsparung</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">11.000€</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold mt-6 mb-4">Zusätzliche Vorteile der KI-gestützten Kaltakquise</h4>

            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><span className="font-semibold">Höhere Qualität:</span> Durch bessere Personalisierung potentiell höhere Öffnungs- und Antwortrate</li>
              <li><span className="font-semibold">Konsistente Qualität:</span> Gleichbleibend hohe Qualität auch bei großen Volumina</li>
              <li><span className="font-semibold">Skalierbarkeit:</span> Einfache Skalierung auf größere Emailmengen möglich</li>
              <li><span className="font-semibold">Schnellere Marktbearbeitung:</span> Mehr Leads in kürzerer Zeit ansprechen</li>
              <li><span className="font-semibold">Mitarbeiterentlastung:</span> Fokus auf höherwertige Aufgaben statt repetitive Recherche</li>
              <li><span className="font-semibold">Wissenstransfer:</span> KI-Tools können von weniger erfahrenen Mitarbeitern genutzt werden</li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <h5 className="font-bold text-blue-800">Fazit:</h5>
              <p className="text-blue-800">Bei 100 personalisierten Kaltakquise-Emails spart der Einsatz der KI-Tools ca. <strong>92%</strong> der Arbeitszeit ein, was einer Netto-Kosteneinsparung von etwa <strong>11.000€</strong> entspricht. Die Investition in die KI-Tools amortisiert sich bereits nach <strong>wenigen Emails</strong>.</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>© 2025 B2B Kaltakquise Profi - Alle Rechte vorbehalten</p>
      </div>
    </div>
  );
};

export default GPTCreationTutorial; 
import React, { useState, useEffect, useMemo } from 'react';

// Datenstruktur für die Abschnitte und Aufgaben
const sectionsData = [
  {
    id: 'vorbereitung',
    title: 'Vorbereitung',
    tasks: [
      { id: 'chatgpt', label: 'ChatGPT-Zugang (Plus/Team)' },
      { id: 'perplexity', label: 'Perplexity-Zugang (Pro)' },
      { id: 'unternehmen', label: 'Eigene Unternehmensinformationen (Nutzenversprechen, Zielgruppe)' },
      { id: 'testziel', label: 'Test-Zielunternehmen identifizieren' },
    ],
  },
  { id: 'schritt1', title: 'Schritt 1: GPT-Editor öffnen', tasks: [{ id: 'editor', label: 'GPT-Editor in ChatGPT aufrufen' }] },
  {
    id: 'schritt2',
    title: 'Schritt 2: Grundlegende GPT-Konfiguration',
    tasks: [
      { id: 'name', label: 'Name festlegen (z.B. "B2B Kaltakquise Email Generator")' },
      { id: 'beschreibung', label: 'Beschreibung hinzufügen' },
      { id: 'hinweise', label: 'Hinweise (Instructions) definieren' },
      { id: 'gespraechsaufhaenger', label: 'Gesprächsaufhänger (Conversation Starters) festlegen' },
    ],
  },
  {
    id: 'schritt3',
    title: 'Schritt 3: Funktionen aktivieren',
    tasks: [
      { id: 'internet', label: 'Internetsuche (Web Browsing) aktivieren' },
      { id: 'code', label: 'Code Interpreter aktivieren (für Datenanalyse/Dateiverarbeitung)' },
    ],
  },
  { id: 'schritt4', title: 'Schritt 4: GPT-Anweisungen eingeben', tasks: [{ id: 'anweisungen', label: 'Detaillierte Anweisungen im Instructions-Feld hinterlegen' }] },
  { id: 'schritt5', title: 'Schritt 5: GPT-Wissen hochladen', tasks: [{ id: 'wissen', label: 'Unternehmensinfos, Fallstudien, etc. als Wissensbasis hochladen' }] },
  { id: 'schritt6', title: 'Schritt 6: GPT testen', tasks: [{ id: 'testen', label: 'GPT mit verschiedenen Test-Zielunternehmen testen' }] },
  { id: 'schritt7', title: 'Schritt 7: GPT optimieren', tasks: [{ id: 'optimieren', label: 'Anweisungen und Wissen basierend auf Testergebnissen anpassen' }] },
  { id: 'schritt8', title: 'Schritt 8: GPT veröffentlichen & teilen', tasks: [{ id: 'veroeffentlichen', label: 'GPT veröffentlichen (privat, Link, öffentlich) und im Team teilen' }] },
  { id: 'schritt9', title: 'Schritt 9: Perplexity-Recherche-Workflow einrichten', tasks: [{ id: 'perplexity_workflow', label: 'Workflow für Unternehmensrecherche mit Perplexity definieren' }] },
  { id: 'schritt10', title: 'Schritt 10: Schulung & Dokumentation', tasks: [{ id: 'schulung_doku', label: 'Team schulen und Workflow dokumentieren' }] },
  {
    id: 'herausforderungen',
    title: 'Herausforderungen der B2B-Kaltakquise',
    content: (
      <div className="space-y-4">
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-800">
          <strong>Zugangshürden:</strong> Entscheidungsträger sind schwer zu erreichen (Gatekeeper, Informationsflut).
        </div>
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-800">
          <strong>Hoher Zeitaufwand:</strong> Manuelle Recherche und Personalisierung kosten **viel Zeit**.
        </div>
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-800">
          <strong>Relevanz & Timing:</strong> Ohne präzise Infos ist es schwer, relevante Nachrichten zur richtigen Zeit zu senden.
        </div>
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-800">
          <strong>Wissens-Gap:</strong> Vertriebler kennen oft nicht alle Details über das Zielunternehmen oder dessen aktuelle Herausforderungen.
        </div>

        <h4 className="font-semibold mt-4">Typische Antwortquoten (Benchmarks):</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-xs uppercase">
              <tr>
                <th scope="col" className="px-4 py-2">Email-Typ</th>
                <th scope="col" className="px-4 py-2">Antwortquote</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">Massen-Emails (unpersonalisiert)</td>
                <td className="px-4 py-2">**&lt; 1%**</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">Segmentierte Emails</td>
                <td className="px-4 py-2">1-3%</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">Manuell personalisierte Emails</td>
                <td className="px-4 py-2">5-10% (stark variabel)</td>
              </tr>
               <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="px-4 py-2 font-medium">KI-gestützt, hochpersonalisiert</td>
                <td className="px-4 py-2 font-medium">**Ziel: >10-15%**</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold mt-4">Zentrale Probleme:</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Mangelnde Personalisierung führt zu niedrigen Öffnungs- und Antwortraten.</li>
          <li>Hoher manueller Aufwand für Recherche und Texterstellung.</li>
          <li>Schwierigkeit, den richtigen Ansprechpartner zu identifizieren und zu erreichen.</li>
          <li>Fehlendes oder veraltetes Wissen über das Zielunternehmen.</li>
          <li>Skalierungsprobleme bei manueller Personalisierung.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'vorteile',
    title: 'Vorteile des GPT-gestützten Ansatzes',
    content: (
       <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Strategische Vorteile */}
          <div>
            <h4 className="font-semibold mb-3 text-lg text-blue-700">Strategische Vorteile</h4>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                <span className="text-green-600 text-xl">[🚀]</span> {/* Placeholder Icon */}
                <div>
                  <strong>Höhere Antwortraten:</strong> Durch **tiefgreifende Personalisierung** basierend auf aktuellen Unternehmensdaten. Ziel: **>10-15%**.
                </div>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                 <span className="text-green-600 text-xl">[🎯]</span> {/* Placeholder Icon */}
                <div>
                  <strong>Bessere Zielgruppenansprache:</strong> Präzisere Identifikation von Bedürfnissen und Herausforderungen.
                </div>
              </div>
               <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                 <span className="text-green-600 text-xl">[📈]</span> {/* Placeholder Icon */}
                <div>
                  <strong>Verbesserte Markenwahrnehmung:</strong> Kompetente und relevante Kommunikation statt generischer Massenmails.
                </div>
              </div>
            </div>
          </div>

          {/* Operative Vorteile */}
          <div>
             <h4 className="font-semibold mb-3 text-lg text-purple-700">Operative Vorteile</h4>
             <div className="space-y-4">
               <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg flex items-start space-x-3">
                 <span className="text-purple-600 text-xl">[⏱️]</span> {/* Placeholder Icon */}
                 <div>
                   <strong>Massive Zeitersparnis:</strong> Reduzierung des Recherche- und Schreibaufwands von Stunden auf **Minuten pro Email**.
                 </div>
               </div>
               <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg flex items-start space-x-3">
                 <span className="text-purple-600 text-xl">[⚙️]</span> {/* Placeholder Icon */}
                 <div>
                   <strong>Skalierbarkeit:</strong> Ermöglicht hochpersonalisierte Ansprache **in großem Umfang**.
                 </div>
               </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg flex items-start space-x-3">
                 <span className="text-purple-600 text-xl">[💡]</span> {/* Placeholder Icon */}
                 <div>
                   <strong>Konsistente Qualität:</strong> Gleichbleibend hohe Qualität der Emails, unabhängig vom einzelnen Mitarbeiter.
                 </div>
               </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg flex items-start space-x-3">
                 <span className="text-purple-600 text-xl">[📚]</span> {/* Placeholder Icon */}
                 <div>
                   <strong>Wissensdemokratisierung:</strong> Unternehmenswissen wird zentral im GPT verfügbar gemacht.
                 </div>
               </div>
             </div>
          </div>
        </div>

        <h4 className="font-semibold mt-6">Skalierbarkeit im Vergleich:</h4>
         <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-xs uppercase">
              <tr>
                <th scope="col" className="px-4 py-2">Ansatz</th>
                <th scope="col" className="px-4 py-2">Personalisierungsgrad</th>
                <th scope="col" className="px-4 py-2">Skalierbarkeit (Emails/Tag/Mitarbeiter)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">Manuell</td>
                <td className="px-4 py-2">Hoch (aber zeitaufwändig)</td>
                <td className="px-4 py-2">**5-15**</td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="px-4 py-2 font-medium">KI-gestützt (GPT + Perplexity)</td>
                <td className="px-4 py-2 font-medium">Sehr hoch & aktuell</td>
                <td className="px-4 py-2 font-medium">**50-100+**</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-gray-50 border-l-4 border-blue-500 rounded-r-lg italic">
          <p className="text-gray-700">"Seit wir den GPT für unsere Kaltakquise nutzen, hat sich nicht nur unsere Antwortrate **mehr als verdoppelt**, sondern unser Vertriebsteam kann sich endlich auf die qualifizierten Gespräche konzentrieren, statt Stunden mit Recherche zu verbringen. Ein echter **Game-Changer**!"</p>
          <p className="text-right text-sm font-medium text-gray-600 mt-2">- Zufriedener Vertriebsleiter</p>
        </div>
      </div>
    ),
  },
   {
    id: 'roi',
    title: 'ROI-Berechnung für 100 Kaltakquise-Emails',
    content: (
      <div className="space-y-4">
        <h4 className="font-semibold">Zeitaufwand im Vergleich (Schätzung):</h4>
         <div className="overflow-x-auto">
           <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-xs uppercase">
              <tr>
                <th scope="col" className="px-4 py-2">Ansatz</th>
                <th scope="col" className="px-4 py-2">Zeit pro Email (Recherche + Text)</th>
                <th scope="col" className="px-4 py-2">Gesamtzeit für 100 Emails</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">Traditionell (manuell)</td>
                <td className="px-4 py-2">~75 Minuten (1.25 Std.)</td>
                <td className="px-4 py-2">~125 Stunden</td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100">
                <td className="px-4 py-2 font-medium">KI-gestützt (GPT + Perplexity)</td>
                <td className="px-4 py-2 font-medium">**~10 Minuten**</td>
                <td className="px-4 py-2 font-medium">**~16.7 Stunden**</td>
              </tr>
               <tr className="border-b bg-green-50">
                <td className="px-4 py-2 font-bold text-green-700">Zeitersparnis</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2 font-bold text-green-700">**~108 Stunden (ca. 86% Reduktion)**</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <h4 className="font-semibold text-yellow-800">ROI-Betrachtung:</h4>
          <p className="text-yellow-700">Bei einem angenommenen Stundensatz von 50€ entspricht die Zeitersparnis von **108 Stunden** einem Wert von **5400€** pro 100 Emails.</p>
          <p className="text-yellow-700 mt-1">Dies berücksichtigt noch nicht die potenziell **höheren Abschlussraten** durch bessere Personalisierung.</p>
        </div>

         <h4 className="font-semibold mt-4">Zusätzliche Vorteile (schwerer quantifizierbar):</h4>
         <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Verbesserte Mitarbeitermoral (weniger repetitive Aufgaben)</li>
            <li>Schnellere Einarbeitung neuer Vertriebsmitarbeiter</li>
            <li>Bessere Skalierbarkeit des Vertriebs</li>
            <li>Stärkung des Unternehmensimages durch professionelle Kommunikation</li>
         </ul>
      </div>
    ),
  },
  {
    id: 'prompts',
    title: 'Hilfreiche Prompts',
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg mb-2">GPT Hinweise (Beispiel für Instructions)</h4>
          <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
            <code>
{`Du bist ein Experte für B2B-Kaltakquise-Emails im [Deine Branche]-Sektor.
Deine Aufgabe ist es, hochpersonalisierte Email-Entwürfe zu erstellen, die auf spezifische Unternehmen und Ansprechpartner zugeschnitten sind.
Nutze die hochgeladenen Wissensdateien über unser Unternehmen [Dein Unternehmen], unsere Produkte/Dienstleistungen [Deine Produkte/Dienstleistungen] und unsere Fallstudien.
Verwende die Recherche-Ergebnisse von Perplexity (oder Web Browsing), um aktuelle Informationen über das Zielunternehmen (z.B. kürzliche Nachrichten, Stellenausschreibungen, strategische Initiativen, genannte Herausforderungen) zu integrieren.

**Wichtige Schritte:**
1. Analysiere die bereitgestellten Informationen über das Zielunternehmen und den Ansprechpartner.
2. Identifiziere potenzielle Anknüpfungspunkte (Pain Points, Bedürfnisse, Ziele), die zu unserem Angebot passen.
3. Formuliere eine prägnante Betreffzeile, die Neugier weckt und personalisiert ist.
4. Schreibe einen kurzen, relevanten Einleitungssatz, der zeigt, dass du dich mit dem Unternehmen beschäftigt hast.
5. Stelle eine klare Verbindung zwischen den Herausforderungen/Zielen des Unternehmens und dem Nutzen unseres Angebots her.
6. Füge einen relevanten Social Proof (z.B. ähnliche Kunden, Fallstudie) hinzu, falls passend.
7. Formuliere einen klaren Call-to-Action (z.B. Vorschlag für ein kurzes Gespräch, Link zu einer Ressource).
8. Halte den Ton professionell, aber dennoch ansprechend und nicht zu generisch. Vermeide übermäßig formelle Sprache.
9. Die Email sollte kurz und prägnant sein (ideal <150 Wörter).

**Frage immer nach folgenden Informationen, bevor du beginnst:**
- Name des Zielunternehmens
- Name und Position des Ansprechpartners
- Website des Zielunternehmens
- Spezifische Recherche-Ergebnisse oder Anknüpfungspunkte (falls vorhanden)`}
            </code>
          </pre>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">GPT Anweisungen (Beispiel für Nutzer-Input)</h4>
           <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
            <code>
{`Erstelle einen Kaltakquise-Email-Entwurf.

Zielunternehmen: Beispiel GmbH
Ansprechpartner: Max Mustermann, Leiter Marketing
Website: www.beispiel-gmbh.de

Recherche-Ergebnisse (Perplexity):
- Beispiel GmbH hat kürzlich eine neue Produktlinie für nachhaltige Verpackungen angekündigt (Pressemitteilung vom [Datum]).
- Sie suchen aktuell einen "Online Marketing Manager mit Fokus auf Leadgenerierung" (Stellenausschreibung auf LinkedIn).
- In einem Interview erwähnte Max Mustermann die Herausforderung, qualifizierte Leads für die neue Produktlinie zu generieren.

Anknüpfungspunkt: Unsere [Deine Dienstleistung/Produkt] hilft Unternehmen wie der Beispiel GmbH, die Leadgenerierung für neue Produkteinführungen um durchschnittlich 30% zu steigern, wie unsere Fallstudie mit [Ähnlicher Kunde] zeigt.`}
            </code>
          </pre>
        </div>

         <div>
          <h4 className="font-semibold text-lg mb-2">Perplexity Recherche-Prompt (Beispiel)</h4>
           <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
            <code>
{`Führe eine detaillierte Recherche über das Unternehmen [Name des Zielunternehmens] ([Website]) durch. Konzentriere dich auf folgende Aspekte (Focus: Writing):

1.  **Aktuelle Nachrichten & Pressemitteilungen:** Was sind die neuesten Entwicklungen, Ankündigungen, Produkteinführungen oder Partnerschaften?
2.  **Strategische Initiativen & Ziele:** Welche strategischen Prioritäten verfolgt das Unternehmen laut Berichten, Interviews oder der Website?
3.  **Genannte Herausforderungen:** Welche Probleme oder Herausforderungen werden in Geschäftsberichten, Interviews mit Führungskräften oder Branchenanalysen erwähnt?
4.  **Organisationsstruktur & Schlüsselpersonen:** Wer sind die relevanten Entscheidungsträger im Bereich [z.B. Marketing, Vertrieb, IT]? (Suche nach Namen und Positionen)
5.  **Stellenausschreibungen:** Gibt es offene Stellen, die auf bestimmte Bedürfnisse oder Wachstumsbereiche hindeuten (z.B. im Marketing, Vertrieb, Technologie)?
6.  **Branchentrends & Wettbewerb:** Wie positioniert sich das Unternehmen im Vergleich zu Wettbewerbern und aktuellen Branchentrends?

Bitte fasse die Ergebnisse strukturiert zusammen.`}
            </code>
          </pre>
        </div>
      </div>
    ),
  },
];

// Hilfsfunktion zum Initialisieren des Task-Status
const initializeTaskStatus = () => {
  const initialStatus = {};
  sectionsData.forEach(section => {
    if (section.tasks) {
      initialStatus[section.id] = {};
      section.tasks.forEach(task => {
        initialStatus[section.id][task.id] = false; // Alle Tasks sind initial nicht erledigt
      });
    }
  });
  return initialStatus;
};

function B2BGPTSchulung() {
  const [openSections, setOpenSections] = useState({});
  const [taskStatus, setTaskStatus] = useState(initializeTaskStatus);

  // Funktion zum Umschalten der Sichtbarkeit eines Abschnitts
  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  // Funktion zum Ändern des Task-Status
  const handleCheckboxChange = (sectionId, taskId) => {
    setTaskStatus(prev => {
      const newStatus = { ...prev };
      newStatus[sectionId] = { ...newStatus[sectionId], [taskId]: !newStatus[sectionId][taskId] };
      return newStatus;
    });
  };

  // Berechnung des Fortschritts
  const progress = useMemo(() => {
    let totalTasks = 0;
    let completedTasks = 0;
    const sectionProgress = {};

    sectionsData.forEach(section => {
      if (section.tasks) {
        const sectionTotal = section.tasks.length;
        const sectionCompleted = section.tasks.filter(task => taskStatus[section.id]?.[task.id]).length;
        totalTasks += sectionTotal;
        completedTasks += sectionCompleted;
        sectionProgress[section.id] = sectionTotal > 0 ? (sectionCompleted / sectionTotal) * 100 : 0;
      }
    });

    const overallProgress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    return { overallProgress, sectionProgress, completedTasks, totalTasks };
  }, [taskStatus]);


  return (
    <div className="container mx-auto mt-8 p-4 md:p-8 bg-white rounded-lg shadow-xl max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
        Erstellung eines GPTs für B2B-Kaltakquise-Emails
      </h1>

      {/* Gesamtfortschrittsbalken */}
      <div className="mb-8">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-blue-700">Gesamtfortschritt</span>
          <span className="text-sm font-medium text-blue-700">{Math.round(progress.overallProgress)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress.overallProgress}%` }}
          ></div>
        </div>
         <p className="text-xs text-gray-500 mt-1 text-right">
            {progress.completedTasks} von {progress.totalTasks} Aufgaben erledigt
        </p>
      </div>

      {/* Abschnitte */}
      <div className="space-y-3">
        {sectionsData.map(section => (
          <div key={section.id} className="border border-gray-200 rounded-md overflow-hidden">
            {/* Header zum Aufklappen */}
            <button
              onClick={() => toggleSection(section.id)}
              className="flex items-center justify-between w-full p-3 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              <span className="font-semibold text-gray-700">{section.title}</span>
              <div className="flex items-center">
                 {/* Fortschrittsanzeige für Abschnitte mit Tasks */}
                 {section.tasks && (
                    <span className={`text-xs font-medium mr-3 px-1.5 py-0.5 rounded ${
                        progress.sectionProgress[section.id] === 100 ? 'bg-green-100 text-green-800' :
                        progress.sectionProgress[section.id] > 0 ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                    }`}>
                        {Math.round(progress.sectionProgress[section.id])}%
                    </span>
                 )}
                <span className={`transform transition-transform duration-200 ${openSections[section.id] ? 'rotate-180' : 'rotate-0'}`}>
                  ▼
                </span>
              </div>
            </button>

            {/* Inhalt (aufklappbar) */}
            {openSections[section.id] && (
              <div className="p-4 border-t border-gray-200 bg-white">
                {section.tasks ? (
                  // Aufgabenliste (Checklisten)
                  <div className="space-y-2">
                    {section.tasks.map(task => (
                      <label key={task.id} className="flex items-center cursor-pointer text-sm">
                        <input
                          type="checkbox"
                          checked={taskStatus[section.id]?.[task.id] || false}
                          onChange={() => handleCheckboxChange(section.id, task.id)}
                          className="mr-3 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className={`${taskStatus[section.id]?.[task.id] ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                          {task.label}
                        </span>
                      </label>
                    ))}
                  </div>
                ) : (
                  // Statischer Inhalt
                  section.content
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default B2BGPTSchulung; 
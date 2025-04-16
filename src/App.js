import React, { useState } from 'react'; // Importiere useState
import B2BGPTSchulung from './B2BGPTSchulung'; // Stelle sicher, dass B2BGPTSchulung.js im selben Ordner liegt
// import { version } from '../package.json'; // <-- Alte, fehlerhafte Zeile entfernen oder auskommentieren
import packageJson from '../package.json'; // <-- Korrekter Default-Import

function App() {
  // Zustand, um die Sichtbarkeit der Schulung zu steuern
  const [showSchulung, setShowSchulung] = useState(false);

  // Funktion, um den Zustand umzuschalten
  const handleToggleSchulung = () => {
    setShowSchulung(!showSchulung);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      {/* Button zum Anzeigen/Verstecken der Schulung */}
      <button
        onClick={handleToggleSchulung}
        className="mb-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
      >
        {showSchulung ? 'Schulungsanleitung ausblenden' : 'Schulungsanleitung anzeigen'}
      </button>

      {/* Bedingtes Rendern der Schulungskomponente */}
      {showSchulung && <B2BGPTSchulung />}

      {/* Optional: Du könntest hier noch anderen Inhalt anzeigen, wenn die Schulung nicht sichtbar ist */}
      {!showSchulung && (
        <div className="text-center text-gray-500 mt-10">
          <p>Klicke auf den Button, um die Schulungsanleitung zu starten.</p>
        </div>
      )}

      {/* Anzeige der Versionsnummer - jetzt mit Zugriff über das importierte Objekt */}
      <p className="text-xs text-gray-400 mt-auto pt-4">
        Version: {packageJson.version}
      </p>
    </div>
  );
}

export default App;
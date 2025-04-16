import React, { useState, useEffect } from 'react';

function App() {
  // Zustand für die Liste der Todos, initialisiert aus dem Local Storage oder als leeres Array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  // Zustand für den Wert des Eingabefelds
  const [inputValue, setInputValue] = useState('');

  // Effekt zum Speichern der Todos im Local Storage, wenn sie sich ändern
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Funktion zum Aktualisieren des Eingabewerts
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Funktion zum Hinzufügen eines neuen Todos
  const handleAddTodo = (e) => {
    // Verhindert das Neuladen der Seite bei Formularübermittlung (falls in einem Formular verwendet)
    e.preventDefault();
    // Fügt nichts hinzu, wenn das Eingabefeld leer ist
    if (inputValue.trim() === '') return;

    // Erstellt ein neues Todo-Objekt
    const newTodo = {
      id: Date.now(), // Eindeutige ID basierend auf dem Zeitstempel
      text: inputValue,
      completed: false, // Standardmäßig nicht erledigt
    };

    // Fügt das neue Todo zur Liste hinzu
    setTodos([...todos, newTodo]);
    // Setzt das Eingabefeld zurück
    setInputValue('');
  };

  // Funktion zum Umschalten des Erledigt-Status eines Todos
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Funktion zum Entfernen eines Todos
  const handleRemoveTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container mx-auto mt-10 p-5 max-w-lg bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Meine Todo Liste</h1>

      {/* Formular zum Hinzufügen neuer Todos */}
      <form onSubmit={handleAddTodo} className="flex mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
          placeholder="Neues Todo hinzufügen..."
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Hinzufügen
        </button>
      </form>

      {/* Liste der Todos */}
      <ul>
        {todos.length === 0 && (
          <p className="text-gray-500 text-center">Noch keine Todos vorhanden.</p>
        )}
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`flex items-center justify-between p-4 mb-3 rounded-md transition duration-200 ${
              todo.completed ? 'bg-green-50 line-through text-gray-500' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center flex-grow mr-4 cursor-pointer" onClick={() => handleToggleComplete(todo.id)}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
                className="mr-3 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
              />
              <span className="flex-grow break-words">{todo.text}</span>
            </div>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 transition duration-200"
            >
              Löschen
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
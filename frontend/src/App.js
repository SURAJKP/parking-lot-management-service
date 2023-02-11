import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [availableSlots, setAvailableSlots] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/slots")
      .then((res) => res.json())
      .then((data) => setAvailableSlots(data.slots));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Parking Lot Managment Service</h1>
        <h2>{availableSlots}</h2>
      </header>
    </div>
  );
}

export default App;
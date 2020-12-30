import React, { useState, useEffect } from 'react';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="min-h-screen text-xl font-bold text-gray-800 bg-red-400">
      Texto de prueba
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css'

function App() {
  // Destructura usaState en sus dos elementos y se inicie siempre con "Sofía"
  const [name, setName] = useState('Sofía');


  // Función para cambiar el nombre del profesor
  const newTeacherName = (e) => {
    setName(e);
  };

  return (
    <div>
      <h2>Teacher Name {name}</h2>
      <ul>
        <li onClick={() => newTeacherName('Data')}>Data</li>
        <li onClick={() => newTeacherName('Reyes')}>Reyes</li>
        <li onClick={() => newTeacherName('Yolanda')}>Yolanda</li>
      </ul>
    </div>
  );
}

export default App;

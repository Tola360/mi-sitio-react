import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <div className="container">
      <h1>Mi Página React</h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <h1>Hola desde Netlify con despliegue c o n t i n u o:</h1>
    </div>
  )
}

export default App

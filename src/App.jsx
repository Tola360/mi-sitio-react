import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

  return (
    <div className="container">
      <h1>Mi Página React con netlify y despliegue</h1>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <h1>Hola desde Netlify con despliegue continuo:</h1>
    </div>
  )
}

export default App

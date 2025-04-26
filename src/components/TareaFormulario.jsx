import { useState } from 'react';
import '../stylesheets/TareaFormulario.css'

const TareaFormulario = (props) => {

  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value);
  }

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    const tareaNueva = {
      id: Date.now(),
      texto: input,
      completada: false
    }

    setInput('')

    props.onSubmit(tareaNueva);
  }

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input 
        type="text" 
        name="texto"
        className="tarea-input" 
        value={input}
        placeholder="Escribe una tarea"
        onChange={manejarCambio} />

      <button className="tarea-boton">
        Agregar Tarea
      </button>

    </form>
  )
}

export default TareaFormulario
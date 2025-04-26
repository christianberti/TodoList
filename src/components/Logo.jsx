import logo from '../images/freecodecamp-logo.png'
import '../stylesheets/Logo.css'

const Logo = () => {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img 
        src={logo} 
        alt="Logo de freecodecamp" 
        className="freecodecamp-logo" />
    </div>
  )
}

export default Logo
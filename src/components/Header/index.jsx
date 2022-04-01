import './style.css'
import logo from '../../NuKenzie.svg'

const Header = () =>{
    return(
        <header>
            <div className="logo">
                <img src={logo}/>
            </div>
            <button className="logout">Inicio</button>
        </header>
    )
}

export default Header
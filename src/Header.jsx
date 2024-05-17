import {Link} from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return(
        <nav className='hsc'>
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='Sobre'>Sobre</Link>
            <span> | </span>
            <Link to='contato'>Contato</Link>
        </nav>
    )
}
export default Header;
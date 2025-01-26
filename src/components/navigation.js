import logo from '../assets/img/logo.png'
import { Link} from 'react-router-dom';

function Navigation(){
    return( 
    <>
        <div className="menu">
        <img 
            className="logo" 
            src={logo}
            onclick="location.href='index.html'"
            alt="logo"
        /> 
        <nav>
             <ul className="navLi">
                <li><Link to='/home'>Acasă</Link></li>   
                <li><Link to='/about'>Despre Mine</Link></li>
                <li><Link to='/services'>Servicii</Link></li>
                <li><Link to='/booking'>Programează o sedință</Link></li>
                <li><Link to='/articles'>Articole</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
             </ul>

         </nav>
        </div>
    </>  
    )
}

export default Navigation;
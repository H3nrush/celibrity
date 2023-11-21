import './header.scss';
import { Link } from "react-router-dom";
function Header(){
    return(
    <header>
        <div className="nav-container">
            <nav className="navbar">
                <ul>
                    <li><Link className='a' to={"/"}>Home</Link></li>
                    <li><Link className='a' to={"/celiLast"}>bio</Link></li>
                    <li><Link className='a' to={"/celiOne"}>Team</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}
export default Header;
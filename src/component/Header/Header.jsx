import './header.scss';
import { Link } from "react-router-dom";
function Header({thisPage}){
    return(
    <header>
        <div className="nav-container">
            <nav className="navbar">
                <ul>
                    <li>{thisPage === "Home" ? (<strong><Link className='a' to={"/"}>Home</Link></strong>):(<Link className='a' to={"/"}>Home</Link>)}</li>
                    <li>{thisPage === "celiLast" ? (<strong><Link className='a' to={"/celiLast"}>bio</Link></strong>):(<Link className='a' to={"/celiLast"}>bio</Link>)}</li>
                    <li>{thisPage === "celiOne" ? (<strong><Link className='a' to={"/celiOne"}>Team</Link></strong>):(<Link className='a' to={"/celiOne"}>Team</Link>)}</li>
                </ul>
            </nav>
        </div>
    </header>
    )
}
export default Header;
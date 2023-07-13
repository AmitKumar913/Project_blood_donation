import { Link } from 'react-router-dom';
import Topheader from './Topheader';
function Header(){
    return (
        <>
        <header className="continer-fluid ">
            <Topheader/>
            <div id="menu-jk" className="header-bottom">
                <div className="container">
                <div className="row nav-row">
                    <div className="col-md-3 logo">
                    <img src="assets/images/logo.jpg" alt />
                    </div>
                    <div className="col-md-9 nav-col">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/About">About Us</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/Process">Process</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/Blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact US</Link> 
                            </li>
                        </ul>
                        </div>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
        </header>
        </>

    );
}
export default Header;
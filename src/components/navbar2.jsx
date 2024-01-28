import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="navbar navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link text-dark" activeClassName="active" to={`/`}>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" activeClassName="active" to={`/Entertainment`}>Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" activeClassName="active" to={`/Technology`}>Technology</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" activeClassName="active" to={`/Sports`}>Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" activeClassName="active" to={`/Business`}>Business</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" activeClassName="active" to={`/Health`}>Health</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" activeClassName="active" to={`/Science`}>Science</Link></li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar2;
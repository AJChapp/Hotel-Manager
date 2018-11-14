import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = props => (
    <ul className="navbar navbar-dark bg-dark myNav">
        <li className={window.location.pathname === "/"
            ? "nav-item active"
            : "nav-item"}>

            <Link to="/" className="nav-link">
                Home
            </Link>
        </li>
        <li className={window.location.pathname === "/findroom"
            ? "nav-item active"
            : "nav-item"}>

            <Link to="/findroom" className="nav-link">
                Find an Open Room
            </Link>
        </li>
        <li className={window.location.pathname === "/about"
            ? "nav-item active"
            : "nav-item"}>

            <Link to="/about" className="nav-link">
                About Us
            </Link>
        </li>
        {
            props.user ?
                <li className={window.location.pathname === "/UserPage"
                    ? "nav-item active"
                    : "nav-item"}>

                    <Link to="/UserPage" className="nav-link">
                        My Profile
                    </Link>
                </li>
                ://or
                <li className={window.location.pathname === "/login"
                    ? "nav-item active"
                    : "nav-item"}>

                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
        }
        {/* 
         <li className={window.location.pathname === "/events"
            ? "nav-item active"
            : "nav-item"}>

            <Link to="/events" className="nav-link">
                Events
            </Link>
        </li>
        <li className={window.location.pathname === "/search"
            ? "nav-item active"
            : "nav-item"}>

            <Link to="/search" className="nav-link">
                Search (Employee Only)
          </Link>
        </li>
        <li className={window.location.pathname === "/payroll"
            ? "nav-item active"
            : "nav-item"}>

            <Link to="/payroll" className="nav-link">
                Payroll(Employee Only)
          </Link>
        </li> */}

    </ul>
)
export default Navbar
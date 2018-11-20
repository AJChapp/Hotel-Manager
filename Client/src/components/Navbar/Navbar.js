import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import './Navbar.css'
class Navbarr extends Component {


    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            
            <Navbar id="myNav" fixed='top' expand='md' dark={true} color='dark'>
                <NavbarBrand id="navBrand">Hotel Manager</NavbarBrand>
                <NavbarToggler className='navbarToggler' onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className='ml-auto'>

                    <NavItem className={window.location.pathname === "/"
                        ? "nav-item active"
                        : "nav-item"}>
                    
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </NavItem>
                    <NavItem className={window.location.pathname === "/findroom"
                        ? "nav-item active"
                        : "nav-item"}>

                        <Link to="/findroom" className="nav-link">
                            Find an Open Room
                    </Link>
                    </NavItem>
                    <NavItem className={window.location.pathname === "/about"
                        ? "nav-item active"
                        : "nav-item"}>

                        <Link to="/about" className="nav-link">
                            About Us
                    </Link>
                    </NavItem>
                    {
                        this.props.user ?
                        <NavItem className={window.location.pathname === "/profile"
                        ? "nav-item active"
                        : "nav-item"}>

                                <Link to="/profile" className="nav-link">
                                    My Account
                            </Link>
                            </NavItem>
                            ://or
                            <NavItem className={window.location.pathname === "/login"
                            ? "nav-item active"
                            : "nav-item"}>

                                <Link to="/login" className="nav-link">
                                    Login
                            </Link>
                            </NavItem>
                    }
                    </Nav>
                </Collapse>
            </Navbar>

        )
    }

}
export default Navbarr

//          <li className={window.location.pathname === "/events"
//             ? "nav-item active"
//             : "nav-item"}>

//             <Link to="/events" className="nav-link">
//                 Events
//             </Link>
//         </li>
//         <li className={window.location.pathname === "/search"
//             ? "nav-item active"
//             : "nav-item"}>

//             <Link to="/search" className="nav-link">
//                 Search (Employee Only)
//           </Link>
//         </li>
//         <li className={window.location.pathname === "/payroll"
//             ? "nav-item active"
//             : "nav-item"}>

//             <Link to="/payroll" className="nav-link">
//                 Payroll(Employee Only)
//           </Link>
//         </li> 
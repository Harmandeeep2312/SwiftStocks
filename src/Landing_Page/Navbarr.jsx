import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BSNavbar from 'react-bootstrap/Navbar';
import "../styles/Navbarr.css";  
import { ChartNoAxesCombined } from 'lucide-react';

export default function Navbarr() {
return (
    // wrapper that centers the pill navbar
    <div className="nav-shell">
    <BSNavbar expand="lg" className="landing-navbar" variant="dark">
        <Container className="nav-inner">
          {/* logo + name */}
        <div className="brand-block">
            <div className="logo-box">
            <ChartNoAxesCombined className="logo-icon" />
            </div>
            <BSNavbar.Brand href="#home" className="nav-logo">
            SwiftStocks
            </BSNavbar.Brand>
        </div>

        <BSNavbar.Toggle aria-controls="main-nav" />

        <BSNavbar.Collapse id="main-nav">
            {/* center/right links */}
            <Nav className="ms-auto nav-links">
            <Nav.Link href="#signup">Signup</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#support">Support</Nav.Link>
            </Nav>
        </BSNavbar.Collapse>
        </Container>
    </BSNavbar>
    </div>
);
}

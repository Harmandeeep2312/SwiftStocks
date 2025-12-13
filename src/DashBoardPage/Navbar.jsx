    import React, { useState } from "react";
    import Container from "react-bootstrap/Container";
    import Nav from "react-bootstrap/Nav";
    import BSNavbar from "react-bootstrap/Navbar";

    import { ChartNoAxesCombined } from "lucide-react";

    import IconButton from "@mui/material/IconButton";
    import Menu from "@mui/material/Menu";
    import MenuItem from "@mui/material/MenuItem";
    import AccountCircle from "@mui/icons-material/AccountCircle";
    import "../styles/Navbar.css"

    export default function Navbarr() {
    const [selectedPage, setSelectedPage] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    
    const handleNavClick = (index) => {
        setSelectedPage(index);
    };

    
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="nav-shell">
        <BSNavbar expand="lg" className="landing-navbar" variant="dark">
            <Container className="nav-inner">
            <div className="brand-block">
                <div className="logo-box">
                <ChartNoAxesCombined className="logo-icon" />
                </div>
            </div>

            <BSNavbar.Toggle aria-controls="main-nav" />

            <BSNavbar.Collapse id="main-nav">
                <Nav className="ms-auto nav-links">
                <Nav.Link
                    href="/"
                    onClick={() => handleNavClick(0)}
                    className={selectedPage === 0 ? "activeLink" : "navLink"}
                >
                    Dashboard
                </Nav.Link>

                <Nav.Link
                    href="/orders"
                    onClick={() => handleNavClick(1)}
                    className={selectedPage === 1 ? "activeLink" : "navLink"}
                >
                    Orders
                </Nav.Link>

                <Nav.Link
                    href="/holdings"
                    onClick={() => handleNavClick(2)}
                    className={selectedPage === 2 ? "activeLink" : "navLink"}
                >
                    Holdings
                </Nav.Link>

                <Nav.Link
                    href="/positions"
                    onClick={() => handleNavClick(3)}
                    className={selectedPage === 3 ? "activeLink" : "navLink"}
                >
                    Positions
                </Nav.Link>

                <Nav.Link
                    href="/fund"
                    onClick={() => handleNavClick(4)}
                    className={selectedPage === 4 ? "activeLink" : "navLink"}
                >
                    Fund
                </Nav.Link>

                
                <IconButton
                    size="large"
                    aria-label="account"
                    aria-controls="profile-menu"
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>

                
                <Menu
                    id="profile-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                </Menu>
                </Nav>
            </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
        </div>
    );
    }

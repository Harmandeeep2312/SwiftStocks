import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BSNavbar from 'react-bootstrap/Navbar';
import "../styles/Navbarr.css";  
import { ChartNoAxesCombined } from 'lucide-react';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

export default function Navbarr() {
    const [selectedPage, setSelectedPage] = useState(0)
    const [profileDropDown, setProfileDropDown] = useState(false);

    const handleMenu = (event) => {
    setAnchorEl(event);
    };

    const handleProfileClick = () =>{
        setProfileDropDown(!profileDropDown);
    }
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
            <Nav.Link href="/" onClick= {() => handleMenu(0)} className={`${selectedPage === 0 ? "activeLink" : "navLink"}`}>DasBoard</Nav.Link>
            <Nav.Link href="/orders" onClick= {() => handleMenu(1)} className={`${selectedPage === 1 ? "activeLink" : "navLink"}`}>Orders</Nav.Link>
            <Nav.Link href="/holdings" onClick= {() => handleMenu(2)} className={`${selectedPage === 2 ? "activeLink" : "navLink"}`}>Holdings</Nav.Link>
            <Nav.Link href="/positions" onClick= {() => handleMenu(3)} className={`${selectedPage === 3 ? "activeLink" : "navLink"}`}> Positions</Nav.Link>
            <Nav.Link href="/fund" onClick= {() => handleMenu(4)} className={`${selectedPage === 4 ? "activeLink" : "navLink"}`}> Fund</Nav.Link>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                <MenuItem onClick={handleProfileClick}>My account</MenuItem>
            </Menu>
            </Nav>
        </BSNavbar.Collapse>
        </Container>
    </BSNavbar>
    </div>
);
}

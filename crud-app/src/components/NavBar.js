import React from 'react'
// botstrap components
import { Navbar, Nav } from "react-bootstrap";
const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Basic Crud App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/add">Veri Ekle</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
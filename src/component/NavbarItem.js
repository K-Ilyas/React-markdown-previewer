import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function NavbarItem() {
    return (
        <Navbar expand="lg" id="navabr">
            <Container>
                <Navbar.Brand id="title">React Markdown Previewer</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarItem
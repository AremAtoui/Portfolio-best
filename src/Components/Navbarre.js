import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navbarre() {
    return (
        <div>



            <Navbar>
                <Container>
                    <Nav className="me-auto">
                    <ul className="nav flex-column text-white w-100" style={{display:"flex", backgroundColor:"black", height: "0px"}}>


<li href="#" className="nav-link">
    <i className="bx bxs-dashboard" />
    <span className="mx-2"><Link style={{ textDecoration: "none", color: "#72b626", fontFamily: "Poppins, sans-serif" }} to="/">Home</Link></span>
</li>
<li href="#" className="nav-link">
    <i className="bx bx-user-check" />
    <span className="mx-2"><Link style={{ textDecoration: "none", color: "#72b626", fontFamily: "Poppins, sans-serif" }} to="/about">About</Link></span>
</li>

<li href="#" className="nav-link">
    <i className="bx bx-conversation" />
    <span className="mx-2"><Link style={{ textDecoration: "none", color: "#72b626", fontFamily: "Poppins, sans-serif" }} to="/contact">Contact</Link></span>
</li>
<li href="#" className="nav-link">
    <i className="bx bx-conversation" />
    <span className="mx-2"><Link style={{ textDecoration: "none", color: "#72b626", fontFamily: "Poppins, sans-serif" }} to="/portfolio">Portfolio</Link></span>
</li>
</ul>
                    </Nav>
                </Container>
            </Navbar>






        </div>
    )
}

export default Navbarre